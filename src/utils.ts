import { basename, extname, posix } from 'path'
import { Families, FamilyStyles, FontInputOutput } from './types'

export function isValidDisplay (display: string): boolean {
  return ['auto', 'block', 'swap', 'fallback', 'optional'].includes(display)
}

export function convertFamiliesObject (families: string[]): Families {
  const result: Families = {}

  families.forEach((family) => {
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
    let [styles, weights] = parts[1].split('@')

    if (!weights) {
      weights = String(styles).replace(',', ';')
      styles = 'wght'
    }

    styles.split(',').forEach((style) => {
      values[style] = weights.split(';').map((weight) => {
        if (/^\+?\d+$/.test(weight)) {
          return parseInt(weight)
        }

        const [pos, w] = weight.split(',')
        const index = style === 'wght' ? 0 : 1

        if (parseInt(pos) === index && /^\+?\d+$/.test(w)) {
          return parseInt(w)
        }

        return 0
      }).filter(v => v > 0)

      values[style] = Object.entries(values[style]).length > 0 ? values[style] : true
    })

    result[parts[0]] = values
  })

  return result
}

export function convertFamiliesToArray (families: Families): string[] {
  const result: string[] = []

  Object.entries(families).forEach(([name, values]) => {
    if (!name) return

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
          styles.push(style);

          (Array.isArray(weight) ? weight : [weight]).forEach((value: string | number) => {
            if (Object.keys(values).length === 1 && style === 'wght') {
              weights.push(String(value))
            } else {
              const index = style === 'wght' ? 0 : 1
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
      const newFilename = formatFontFileName('{_family}-{weight}-{comment}{i}.{ext}', {
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
