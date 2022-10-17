import { basename, extname, posix, resolve } from 'path'
import { deleteAsync } from 'del'
import { $fetch } from 'ohmyfetch'
import { Hookable } from 'hookable'
import fsExtra from 'fs-extra'
import { isValidURL } from './is-valid-url'

export interface FontInputOutput {
  inputFont: string
  outputFont: string
  inputText: string
  outputText: string
}

export interface DownloadOptions {
  base64?: boolean
  overwriting?: boolean
  outputDir: string
  stylePath: string
  fontsDir: string
  fontsPath: string
  headers?: HeadersInit
}

export interface DownloaderHooks {
  'download-css:before': (url: string) => void
  'download-css:done': (url: string, content: string, fonts: FontInputOutput[]) => void
  'download-font:before': (font: FontInputOutput) => void
  'download-font:done': (font: FontInputOutput) => void
  'write-css:before': (path: string, content: string, fonts: FontInputOutput[]) => void
  'write-css:done': (path: string, newContent: string, oldContent: string) => void
}

export class Downloader extends Hookable<DownloaderHooks> {
  private config: DownloadOptions

  public constructor (
    private url: string,
    options?: Partial<DownloadOptions>
  ) {
    super()

    this.config = {
      base64: false,
      overwriting: false,
      outputDir: './',
      stylePath: 'fonts.css',
      fontsDir: 'fonts',
      fontsPath: './fonts',
      headers: [['user-agent', [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'AppleWebKit/537.36 (KHTML, like Gecko)',
        'Chrome/98.0.4758.102 Safari/537.36'
      ].join(' ')]],
      ...options
    }
  }

  async execute (): Promise<void> {
    if (!isValidURL(this.url)) {
      throw new Error('Invalid Google Fonts URL')
    }

    const { outputDir, stylePath, headers, fontsPath } = this.config
    const cssPath = resolve(outputDir, stylePath)
    let overwriting = this.config.overwriting

    if (!overwriting && await fsExtra.pathExists(cssPath)) {
      const currentCssContent = await fsExtra.readFile(cssPath, 'utf-8')
      const currentUrl = (currentCssContent.split(/\r?\n/, 1).shift() || '').replace('/*', '').replace('*/', '').trim()

      overwriting = currentUrl !== this.url
    }

    if (overwriting) {
      await deleteAsync(outputDir, { force: true })
    }

    // download css content
    await this.callHook('download-css:before', this.url)
    const cssContent = await $fetch(this.url, { headers })
    const fontsFromCss = parseFontsFromCss(cssContent, fontsPath)
    await this.callHook('download-css:done', this.url, cssContent, fontsFromCss)

    // download fonts from css
    const fonts = (await Promise.all(this.downloadFonts(fontsFromCss)))
      .filter(font => font.inputText)

    // write css
    await this.callHook('write-css:before', cssPath, cssContent, fonts)
    const newContent = await this.writeCss(cssPath, `/* ${this.url} */\n${cssContent}`, fonts)
    await this.callHook('write-css:done', cssPath, newContent, cssContent)
  }

  private downloadFonts (fonts: FontInputOutput[]) {
    const { headers, base64, outputDir, fontsDir } = this.config

    return fonts.map(async (font) => {
      await this.callHook('download-font:before', font)

      const response = await $fetch.raw(font.inputFont, { headers, responseType: 'arrayBuffer' })

      if (!response?._data) {
        return {} as FontInputOutput
      }

      const buffer = Buffer.from(response?._data)

      if (base64) {
        const mime = response.headers.get('content-type') ?? 'font/woff2'

        font.outputText = `url('data:${mime};base64,${buffer.toString('base64')}')`
      } else {
        const fontPath = resolve(outputDir, fontsDir, font.outputFont)

        await fsExtra.outputFile(fontPath, buffer)
      }

      await this.callHook('download-font:done', font)

      return font
    })
  }

  private async writeCss (path: string, content: string, fonts: FontInputOutput[]) {
    for (const font of fonts) {
      content = content.replace(font.inputText, font.outputText)
    }

    await fsExtra.outputFile(path, content)

    return content
  }
}

function parseFontsFromCss (content: string, fontsPath: string): FontInputOutput[] {
  const fonts: FontInputOutput[] = []
  const re = {
    face: /\s*(?:\/\*\s*(.*?)\s*\*\/)?[^@]*?@font-face\s*{(?:[^}]*?)}\s*/gi,
    family: /font-family\s*:\s*(?:'|")?([^;]*?)(?:'|")?\s*;/i,
    weight: /font-weight\s*:\s*([^;]*?)\s*;/i,
    url: /url\s*\(\s*(?:'|")?\s*([^]*?)\s*(?:'|")?\s*\)\s*?/gi
  }

  let i = 1
  let match1

  while ((match1 = re.face.exec(content)) !== null) {
    const [fontface, comment] = match1
    const familyRegExpArray = re.family.exec(fontface)
    const family = familyRegExpArray ? familyRegExpArray[1] : ''
    const weightRegExpArray = re.weight.exec(fontface)
    const weight = weightRegExpArray ? weightRegExpArray[1] : ''

    let match2
    while ((match2 = re.url.exec(fontface)) !== null) {
      const [forReplace, url] = match2
      const urlPathname = new URL(url).pathname
      const ext = extname(urlPathname)
      if (ext.length < 2) { continue }
      const filename = basename(urlPathname, ext) || ''
      const newFilename = formatFontFileName('{_family}-{weight}-{i}.{ext}', {
        comment: comment || '',
        family,
        weight: weight || '',
        filename,
        _family: family.replace(/\s+/g, '_'),
        ext: ext.replace(/^\./, '') || '',
        i: String(i++)
      }).replace(/\.$/, '')

      fonts.push({
        inputFont: url,
        outputFont: newFilename,
        inputText: forReplace,
        outputText: `url('${posix.join(fontsPath, newFilename)}')`
      })
    }
  }

  return fonts
}

function formatFontFileName (template: string, values: { [s: string]: string } | ArrayLike<string>): string {
  return Object.entries(values)
    .filter(([key]) => /^[a-z0-9_-]+$/gi.test(key))
    .map(([key, value]) => [new RegExp(`([^{]|^){${key}}([^}]|$)`, 'g'), `$1${value}$2`])
    .reduce((str, [regexp, replacement]) => str.replace(regexp, String(replacement)), template)
    .replace(/({|}){2}/g, '$1')
}
