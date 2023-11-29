import { writeFileSync } from 'node:fs'
// https://developers.google.com/fonts/docs/developer_api?hl=pt-br&apix_params=%7B%22sort%22%3A%22ALPHA%22%7D#api_url_specification
import fontData from './font-data.json' assert { type: 'json' }

const weights = []
const subsets = []
const families = fontData.items.map((font) => {
  return {
    family: font.family,
    variants: font.variants,
    subsets: font.subsets
  }
}).map((font) => {
  const normal = font.variants.filter(v => !v.includes('italic')).map(r => parseInt(r.replace('regular', 400)))
  const italic = font.variants.filter(v => v.includes('italic')).map(r => r === 'italic' ? 400 : parseInt(r.replace('italic', '')))
  const wght = [...normal]
  const ital = [...italic]

  if (wght.includes(400)) {
    wght.unshift(true)
  }

  if (ital.includes(400)) {
    ital.unshift(true)
  }

  weights.push(...normal)
  weights.push(...italic)

  subsets.push(...font.subsets)
  return `
  ${font.family.includes(' ') ? `'${font.family}'` : font.family}: {
    display?: GoogleFontsDisplay
    subsets?: '${font.subsets.join('\' | \'')}' | ('${font.subsets.join('\' | \'')}')[]${
    wght.length
  ? `\r\n    wght?: ${normal.length > 2 ? 'string | ' : ''}${wght.join(' | ')}${normal.length > 1 ? ` | (${normal.join(' | ')})[]` : ''}
    normal?: ${normal.length > 2 ? 'string | ' : ''}${wght.join(' | ')}${normal.length > 1 ? ` | (${normal.join(' | ')})[]` : ''}
    regular?: ${normal.length > 2 ? 'string | ' : ''}${wght.join(' | ')}${normal.length > 1 ? ` | (${normal.join(' | ')})[]` : ''}`
    : ''}${
    ital.length
  ? `\r\n    ital?: ${italic.length > 2 ? 'string | ' : ''}${ital.join(' | ')}${italic.length > 1 ? ` | (${italic.join(' | ')})[]` : ''}
    italic?: ${italic.length > 2 ? 'string | ' : ''}${ital.join(' | ')}${italic.length > 1 ? ` | (${italic.join(' | ')})[]` : ''}
    i?: ${italic.length > 2 ? 'string | ' : ''}${ital.join(' | ')}${italic.length > 1 ? ` | (${italic.join(' | ')})[]` : ''}`
    : ''}
    text?: string
  }${wght.length > 1 ? ` | ${normal.length > 2 ? 'string | ' : ''}${wght.join(' | ')}${normal.length > 1 ? ` | (${normal.join(' | ')})[]` : ''}` : ''},
`
})

writeFileSync('../src/google-fonts-metadata.ts', `export type GoogleFontsDisplay = 'auto' | 'block' | 'swap' | 'fallback' | 'optional'

export type GoogleFontsSubset = '${Array.from(new Set(subsets)).join('\' | \'')}'

export type GoogleFontsWeight = ${Array.from(new Set(weights)).sort().join(' | ')}

export type GoogleFontsMetadata = {${families.join('')}}
`, 'utf-8')
