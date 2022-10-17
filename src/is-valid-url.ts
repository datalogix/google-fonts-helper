import { GOOGLE_FONTS_DOMAIN } from './utils'

export function isValidURL (url: string): boolean {
  return RegExp(GOOGLE_FONTS_DOMAIN).test(url)
}
