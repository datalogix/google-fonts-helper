import { QueryObject, resolveURL, withQuery, withHttps } from 'ufo'
import { GOOGLE_FONTS_DOMAIN, isValidDisplay, parseFamilyName, parseStyle } from './utils'
import type { GoogleFonts, Families } from './types'

export function constructURL ({ families, display, subsets, text }: GoogleFonts = {}): string | false {
  const _subsets = (Array.isArray(subsets) ? subsets : [subsets]).filter(Boolean)
  const family = convertFamiliesToArray(families ?? {})

  if (family.length < 1) {
    return false
  }

  const query: QueryObject = {
    family
  }

  if (display && isValidDisplay(display)) {
    query.display = display
  }

  if (_subsets.length > 0) {
    query.subset = _subsets.join(',')
  }

  if (text) {
    query.text = text
  }

  return withHttps(withQuery(resolveURL(GOOGLE_FONTS_DOMAIN, 'css2'), query))
}

function convertFamiliesToArray (families: Families): string[] {
  const result: string[] = []

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
      let forceWght = false

      Object
        .entries(values)
        .sort(([styleA], [styleB]) => styleA.localeCompare(styleB))
        .forEach(([style, weight]) => {
          const styleParsed = parseStyle(style)
          styles.push(styleParsed)

          const weightList = Array.isArray(weight) ? weight : [weight]
          weightList.forEach((value: string | number) => {
            if (Object.keys(values).length === 1 && styleParsed === 'wght') {
              weights.push(String(value))
            } else {
              const index = styleParsed === 'wght' ? 0 : 1

              if (
                (value.toString() === 'true' || value === 1 || value === 400) &&
                Object.entries(values).length === 1 && weightList.length === 1
              ) {
                weights.push(`${index}`)
              } else if (value) {
                forceWght = true
                weights.push(`${index},${value}`)
              }
            }
          })
        })

      if (!styles.includes('wght') && forceWght) {
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

  return result
}
