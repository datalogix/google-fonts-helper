import { Downloader, DownloadOptions } from './downloader'

export function download (url: string, options?: Partial<DownloadOptions>) {
  return new Downloader(url, options)
}

export async function getFontInfo (url: string, options?: Partial<DownloadOptions>): Promise<[Map<string, string>, string]> {
  const info = new Downloader(url, options)
  const { fonts, css } = await info.extractFontInfo()

  let localCSS: string = css
  const fontsMap: Map<string, string> = new Map()

  // Replace remote with local font url() paths
  for (const font of fonts) {
    localCSS = localCSS.replace(font.inputText, font.outputText)
    fontsMap.set(font.inputFont, font.outputFont)
  }

  return [fontsMap, localCSS]
}
