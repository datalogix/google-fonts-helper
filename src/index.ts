import { resolve } from 'path'
import { format } from 'url'
import { unescape, ParsedUrlQueryInput } from 'querystring'
import { outputFile, pathExistsSync } from 'fs-extra'
import { all } from 'deepmerge'
import got from 'got'
import { isValidDisplay, convertFamiliesObject, convertFamiliesToArray, parseFontsFromCss } from './utils'
import { GoogleFonts, DownloadOptions } from './types'

export class GoogleFontsHelper {
  private fonts: GoogleFonts

  constructor (fonts: GoogleFonts = {}) {
    this.fonts = fonts
  }

  getFonts (): GoogleFonts {
    return this.fonts
  }

  constructURL (): string | false {
    const { families, display, subsets } = this.fonts
    const family = convertFamiliesToArray(families ?? {})

    if (family.length < 1) {
      return false
    }

    const query: ParsedUrlQueryInput = {
      family
    }

    if (display && isValidDisplay(display)) {
      query.display = display
    }

    const subset = (Array.isArray(subsets) ? subsets : [subsets]).filter(Boolean)

    if (subset.length > 0) {
      query.subset = subset.join(',')
    }

    return unescape(format({
      protocol: 'https',
      hostname: 'fonts.googleapis.com',
      pathname: 'css2',
      query
    }))
  }

  merge (...values: Array<GoogleFonts | GoogleFontsHelper>): void {
    const newFonts: GoogleFonts[] = [this.fonts]

    values.forEach(value => {
      newFonts.push(value instanceof GoogleFontsHelper ? value.getFonts() : value)
    })

    this.fonts = all<GoogleFonts>(newFonts)
  }

  static isValidURL (url: string): boolean {
    return /fonts.googleapis.com/.test(url)
  }

  static parse (url: string): GoogleFontsHelper {
    if (!GoogleFontsHelper.isValidURL(url)) {
      return new GoogleFontsHelper()
    }

    const { searchParams } = new URL(url)

    if (!searchParams.has('family')) {
      return new GoogleFontsHelper()
    }

    const result: GoogleFonts = {}

    const families = convertFamiliesObject(searchParams.getAll('family'))
    if (Object.keys(families).length < 1) {
      return new GoogleFontsHelper()
    }

    result.families = families

    const display = searchParams.get('display')
    if (display && isValidDisplay(display)) {
      result.display = display
    }

    const subsets = searchParams.get('subset')
    if (subsets) {
      result.subsets = subsets.split(',')
    }

    return new GoogleFontsHelper(result)
  }

  static async download (url: string, options?: Partial<DownloadOptions>): Promise<void> {
    if (!GoogleFontsHelper.isValidURL(url)) {
      throw new Error('Invalid Google Fonts URL')
    }

    const config: DownloadOptions = {
      base64: false,
      overwriting: false,
      outputDir: './',
      stylePath: 'fonts.css',
      fontsDir: 'fonts',
      fontsPath: './fonts',
      ...options
    }

    const stylePath = resolve(config.outputDir, config.stylePath)
    const fontsDir = resolve(config.outputDir, config.fontsDir)

    if (!config.overwriting && pathExistsSync(stylePath)) {
      return
    }

    const headers = {
      'user-agent': [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'AppleWebKit/537.36 (KHTML, like Gecko)',
        'Chrome/80.0.3987.132 Safari/537.36'
      ].join(' ')
    }

    let { body: css } = await got(url, { headers })

    const fonts = parseFontsFromCss(css, config.fontsPath)

    for (const font of fonts) {
      const response = got(font.inputFont)
      const buffer = await response.buffer()

      if (config.base64) {
        const mime = (await response).headers['content-type'] ?? 'font/woff2'
        const content = buffer.toString('base64')

        css = css.replace(font.inputText, `url('data:${mime};base64,${content}')`)
      } else {
        const fontPath = resolve(fontsDir, font.outputFont)

        await outputFile(fontPath, buffer)

        css = css.replace(font.inputText, font.outputText)
      }
    }

    await outputFile(stylePath, css)
  }
}

export default GoogleFontsHelper
