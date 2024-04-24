import { writeFileSync } from 'node:fs'
// https://developers.google.com/fonts/docs/developer_api?hl=pt-br&apix_params=%7B%22sort%22%3A%22ALPHA%22%7D#api_url_specification
import fontData from './font-data.json' assert { type: 'json' }

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

  subsets.push(...font.subsets)
  return `
  ${font.family.includes(' ') ? `'${font.family}'` : font.family}: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: '${font.subsets.join('\' | \'')}' | ('${font.subsets.join('\' | \'')}')[]
    [key: string]: undefined | GoogleFontsWeight${
    wght.length
  ? `\r\n    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight`
    : ''}${
    ital.length
  ? `\r\n    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight`
    : ''}
    text?: string
  },
`
})

writeFileSync('../src/google-fonts-metadata.ts', `export type GoogleFontsDisplay = 'auto' | 'block' | 'swap' | 'fallback' | 'optional'

export type GoogleFontsSubset = '${Array.from(new Set(subsets)).join('\' | \'')}'

export type GoogleFontsWeight = boolean | string | string[] | number | number[]

export type GoogleFontsMetadata = {${families.join('')}}
`, 'utf-8')
