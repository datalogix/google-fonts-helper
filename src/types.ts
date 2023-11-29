import type { GoogleFontsDisplay, GoogleFontsSubset, GoogleFontsWeight, GoogleFontsMetadata } from './google-fonts-metadata'

export type FontDisplay = GoogleFontsDisplay

export type FontSubset = GoogleFontsSubset

export type FontWeight = GoogleFontsWeight | string

export type FontStyle = boolean | FontWeight | FontWeight[]

export type FontOptions = {
  display?: FontDisplay
  subsets?: FontSubset | FontSubset[]
  text?: string
}

export type Families = {
  [family: string]: FontStyle | {
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
