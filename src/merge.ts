import deepmerge from 'deepmerge'
import type { GoogleFonts } from './types'

export function merge (...fonts: GoogleFonts[]): GoogleFonts {
  return deepmerge.all<GoogleFonts>(fonts)
}
