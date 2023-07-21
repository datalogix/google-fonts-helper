export const GOOGLE_FONTS_DOMAIN = 'fonts.googleapis.com'

export function isValidDisplay (display: string): boolean {
  return ['auto', 'block', 'swap', 'fallback', 'optional'].includes(display)
}

export function parseStyle (style: string): string {
  if (['wght', 'regular', 'normal'].includes(style.toLowerCase())) {
    return 'wght'
  }

  if (['i', 'italic', 'ital'].includes(style.toLowerCase())) {
    return 'ital'
  }

  return style
}

export function parseFamilyName (name: string) {
  return decodeURIComponent(name).replace(/\+/g, ' ')
}
