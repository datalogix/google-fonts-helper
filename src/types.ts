import type { GoogleFontsDisplay, GoogleFontsSubset, GoogleFontsWeight, GoogleFontsMetadata } from './google-fonts-metadata'

export type FontDisplay = GoogleFontsDisplay

export type FontSubset = GoogleFontsSubset

export type FontStyle = GoogleFontsWeight

export type FontOptions = {
  display?: FontDisplay
  subsets?: FontSubset | FontSubset[]
  text?: string
}

export type Families = {
  [family: string]: FontStyle | {
    // other axes
    [key: string]: undefined | FontStyle

    // normal
    wght?: FontStyle
    normal?: FontStyle
    regular?: FontStyle

    // italic
    ital?: FontStyle
    italic?: FontStyle
    i?: FontStyle
  }
}

export type GoogleFonts = {
  families?: Families & Partial<GoogleFontsMetadata>
} & FontOptions
