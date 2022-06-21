import { basename, extname, posix } from 'path'
import type { Families, FamilyStyles, FontInputOutput } from './types'

export function isValidDisplay (display: string): boolean {
  return ['auto', 'block', 'swap', 'fallback', 'optional'].includes(display)
}

export function convertFamiliesObject (families: string[], v2 = true): Families {
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

    const values: FamilyStyles = {}

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

          if (parseInt(pos) === index && /^\+?\d+$/.test(w)) {
            return parseInt(w)
          }

          return 0
        }).filter(v => v > 0)

        values[styleParsed] = Object.entries(values[styleParsed]).length > 0 ? values[styleParsed] : true
      })
    }

    result[parts[0]] = values
  })

  return result
}

export function convertFamiliesToArray (families: Families, v2 = true): string[] {
  const result: string[] = []

  // v1
  if (!v2) {
    Object.entries(families).forEach(([name, values]) => {
      if (!name) {
        return
      }

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

export function parseFontsFromCss (content: string, fontsPath: string): FontInputOutput[] {
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

function parseStyle (style: string): string {
  const _style = style.toLowerCase()

  if (['wght', 'regular', 'normal'].includes(_style)) {
    return 'wght'
  }

  if (['i', 'italic', 'ital'].includes(_style)) {
    return 'ital'
  }

  return _style
}
