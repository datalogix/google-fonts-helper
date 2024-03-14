import { createURL } from 'ufo'
import { isValidURL } from './is-valid-url'
import { isValidDisplay, parseFamilyName, parseStyle } from './utils'
import type { GoogleFonts, Families, FontDisplay, FontSubset } from './types'

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
    result.display = display as FontDisplay
  }

  const subsets = searchParams.get('subset')
  if (subsets) {
    result.subsets = subsets.split(',') as FontSubset[]
  }

  const text = searchParams.get('text')
  if (text) {
    result.text = text
  }

  return result
}

function convertFamiliesObject (families: string[], v2 = true): Families {
  const result: Families = {}

  families.flatMap(family => family.split('|')).forEach((family) => {
    if (!family) {
      return
    }

    if (!family.includes(':')) {
      result[family] = true
      return
    }

    const parts = family.split(':')

    if (!parts[1]) {
      return
    }

    const values: any = {}

    // v1
    if (!v2) {
      // https://developers.google.com/fonts/docs/getting_started#specifying_font_families_and_styles_in_a_stylesheet_url

      parts[1].split(',').forEach((style) => {
        const styleParsed = parseStyle(style)

        if (styleParsed === 'wght') {
          values.wght = true
        }

        if (styleParsed === 'ital') {
          values.ital = true
        }

        if (styleParsed === 'bold' || styleParsed === 'b') {
          values.wght = 700
        }

        if (styleParsed === 'bolditalic' || styleParsed === 'bi') {
          values.ital = 700
        }
      })
    }

    // v2
    if (v2) {
      let [styles, weights] = parts[1].split('@')

      if (!weights) {
        weights = String(styles).replace(',', ';')
        styles = 'wght'
      }

      styles.split(',').forEach((style) => {
        const styleParsed = parseStyle(style)

        values[styleParsed] = weights.split(';').map((weight) => {
          if (/^\+?\d+$/.test(weight)) {
            return parseInt(weight)
          }

          const [pos, w] = weight.split(',')
          const index = styleParsed === 'wght' ? 0 : 1

          if (!w) {
            return weight
          }

          if (parseInt(pos) !== index) {
            return 0
          }

          if (/^\+?\d+$/.test(w)) {
            return parseInt(w)
          }

          return w
        }).filter(v => parseInt(v.toString()) > 0 || v.toString().includes('..'))

        if (!values[styleParsed].length) {
          values[styleParsed] = true
          return
        }

        if (values[styleParsed].length > 1) {
          return
        }

        const first = values[styleParsed][0]

        if (String(first).includes('..')) {
          values[styleParsed] = first
        }

        if (first === 1 || first === true) {
          values[styleParsed] = true
        }
      })
    }

    result[parseFamilyName(parts[0])] = values
  })

  return result
}
