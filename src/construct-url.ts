import { QueryObject, resolveURL, withQuery, withHttps } from 'ufo'
import { GOOGLE_FONTS_DOMAIN, isValidDisplay, parseFamilyName, parseStyle } from './utils'
import type { GoogleFonts, Families } from './types'

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

function convertFamiliesToArray (families: Families, v2 = true): string[] {
  const result: string[] = []

  // v1
  if (!v2) {
    Object.entries(families).forEach(([name, values]) => {
      if (!name) {
        return
      }

      name = parseFamilyName(name)

      if ((Array.isArray(values) && values.length > 0) || (values === true || values === 400)) {
        result.push(name)
        return
      }

      if (values === 700) {
        result.push(`${name}:bold`)
        return
      }

      if (Object.keys(values).length > 0) {
        const styles: string[] = []

        Object
          .entries(values)
          .sort(([styleA], [styleB]) => styleA.localeCompare(styleB))
          .forEach(([style, weight]) => {
            const styleParsed = parseStyle(style)

            if (styleParsed === 'ital' && (weight === 700 || (Array.isArray(weight) && weight.includes(700)))) {
              styles.push('bolditalic')

              if (Array.isArray(weight) && weight.includes(400)) {
                styles.push(styleParsed)
              }
            } else if (styleParsed === 'wght' && (weight === 700 || (Array.isArray(weight) && weight.includes(700)))) {
              styles.push('bold')

              if (Array.isArray(weight) && weight.includes(400)) {
                styles.push(styleParsed)
              }
            } else if (weight !== false) {
              styles.push(styleParsed)
            }
          })

        const stylesSortered = styles
          .sort(([styleA], [styleB]) => styleA.localeCompare(styleB))
          .reverse()
          .join(',')

        if (stylesSortered === 'wght') {
          result.push(name)
          return
        }

        result.push(`${name}:${stylesSortered}`)
      }
    })

    return result.length ? [result.join('|')] : result
  }

  // v2
  if (v2) {
    Object.entries(families).forEach(([name, values]) => {
      if (!name) {
        return
      }

      name = parseFamilyName(name)

      if (typeof values === 'string' && String(values).includes('..')) {
        result.push(`${name}:wght@${values}`)
        return
      }

      if (Array.isArray(values) && values.length > 0) {
        result.push(`${name}:wght@${values.join(';')}`)
        return
      }

      if (Object.keys(values).length > 0) {
        const styles: string[] = []
        const weights: string[] = []

        Object
          .entries(values)
          .sort(([styleA], [styleB]) => styleA.localeCompare(styleB))
          .forEach(([style, weight]) => {
            const styleParsed = parseStyle(style)
            styles.push(styleParsed);

            (Array.isArray(weight) ? weight : [weight]).forEach((value: string | number) => {
              if (Object.keys(values).length === 1 && styleParsed === 'wght') {
                weights.push(String(value))
              } else {
                const index = styleParsed === 'wght' ? 0 : 1
                weights.push(`${index},${value}`)
              }
            })
          })

        if (!styles.includes('wght')) {
          styles.push('wght')
        }

        const weightsSortered = weights
          .sort(([weightA], [weightB]) => weightA.localeCompare(weightB))
          .join(';')

        result.push(`${name}:${styles.join(',')}@${weightsSortered}`)
        return
      }

      if (values) {
        result.push(name)
      }
    })
  }

  return result
}
