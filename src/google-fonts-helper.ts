
import { resolve } from 'path'
import { outputFile, pathExistsSync } from 'fs-extra'
import { all } from 'deepmerge'
import { createURL, QueryObject, resolveURL, withQuery, withHttps } from 'ufo'
import { $fetch, Headers } from 'ohmyfetch'
import { isValidDisplay, convertFamiliesObject, convertFamiliesToArray, parseFontsFromCss } from './utils'
import type { GoogleFonts, DownloadOptions } from './types'

const GOOGLE_FONTS_DOMAIN = 'fonts.googleapis.com'

export function constructURL ({ families, display, subsets, text }: GoogleFonts = {}): string | false {
  const subset = (Array.isArray(subsets) ? subsets : [subsets]).filter(Boolean)
  const prefix = subset.length > 0 ? 'css' : 'css2'
  const family = convertFamiliesToArray(families ?? {}, prefix.endsWith('2'))

  if (family.length < 1) {
    return false
  }

  const query: QueryObject = {
    family
  }

  if (display && isValidDisplay(display)) {
    query.display = display
  }

  if (subset.length > 0) {
    query.subset = subset.join(',')
  }

  if (text) {
    query.text = text
  }

  return withHttps(withQuery(resolveURL(GOOGLE_FONTS_DOMAIN, prefix), query))
}

export function merge (...values: GoogleFonts[]): GoogleFonts {
  return all<GoogleFonts>(values)
}

export function isValidURL (url: string): boolean {
  return RegExp(GOOGLE_FONTS_DOMAIN).test(url)
}

export function parse (url: string): GoogleFonts {
  const result: GoogleFonts = {}

  if (!isValidURL(url)) {
    return result
  }

  const { searchParams, pathname } = createURL(url)

  if (!searchParams.has('family')) {
    return result
  }

  const families = convertFamiliesObject(searchParams.getAll('family'), pathname.endsWith('2'))

  if (Object.keys(families).length < 1) {
    return result
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

  const text = searchParams.get('text')
  if (text) {
    result.text = text
  }

  return result
}

export async function download (url: string, options?: Partial<DownloadOptions>): Promise<void> {
  if (!isValidURL(url)) {
    throw new Error('Invalid Google Fonts URL')
  }

  const headers: HeadersInit = new Headers()
  headers.set('user-agent', [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'AppleWebKit/537.36 (KHTML, like Gecko)',
    'Chrome/98.0.4758.102 Safari/537.36'
  ].join(' '))

  const config: DownloadOptions = {
    base64: false,
    overwriting: false,
    outputDir: './',
    stylePath: 'fonts.css',
    fontsDir: 'fonts',
    fontsPath: './fonts',
    headers,
    ...options
  }

  const stylePath = resolve(config.outputDir, config.stylePath)

  if (!config.overwriting && pathExistsSync(stylePath)) {
    return
  }

  // download css content
  let content = await $fetch(url, { headers: config.headers })

  // fonts from css file
  const fonts = parseFontsFromCss(content, config.fontsPath)
    .map(async (font) => {
      const response = await $fetch.raw(font.inputFont, { headers: config.headers, responseType: 'arrayBuffer' })

      if (!response?._data) {
        return
      }

      const buffer = Buffer.from(response?._data)

      if (config.base64) {
        const mime = response.headers.get('content-type') ?? 'font/woff2'
        const content = buffer.toString('base64')

        font.outputText = `url('data:${mime};base64,${content}')`
      } else {
        const fontsDir = resolve(config.outputDir, config.fontsDir)
        const fontPath = resolve(fontsDir, font.outputFont)

        await outputFile(fontPath, buffer)
      }

      return font
    })

  // convert results and save css file
  const results = (await Promise.all(fonts))

  for (const result of results) {
    if (result) {
      content = content.replace(result.inputText, result.outputText)
    }
  }

  await outputFile(stylePath, content)
}
