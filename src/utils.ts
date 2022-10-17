export const GOOGLE_FONTS_DOMAIN = 'fonts.googleapis.com'

export function isValidDisplay (display: string): boolean {
  return ['auto', 'block', 'swap', 'fallback', 'optional'].includes(display)
}

export function parseStyle (style: string): string {
  const _style = style.toLowerCase()

  if (['wght', 'regular', 'normal'].includes(_style)) {
    return 'wght'
  }

  if (['i', 'italic', 'ital'].includes(_style)) {
    return 'ital'
  }

  return _style
}

export function parseFamilyName (name: string) {
  return decodeURIComponent(name).replace('+', ' ')
}
