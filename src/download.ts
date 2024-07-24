import { Downloader, DownloadOptions } from './downloader'

export function download (url: string, options?: Partial<DownloadOptions>) {
  return new Downloader(url, options)
}

export async function getFontInfo (url: string, options?: Partial<DownloadOptions>): Promise<{ fontMaps: Map<string, string>, localCSS: string }> {
  const info = new Downloader(url, options)
  const { fonts, css } = await info.extractFontInfo()

  let localCSS: string = ''
  const fontMaps: Map<string, string> = new Map()

  // Replace remote with local font url() paths
  for (const font of fonts) {
    localCSS = css.replace(font.inputText, font.outputText)
    fontMaps.set(font.inputFont, font.outputFont)
  }

  return {
    localCSS,
    fontMaps
  }
}
