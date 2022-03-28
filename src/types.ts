export interface FamilyStyles {
  [style: string]: boolean | number | number[]
}

export interface Families {
  [family: string]: boolean | number | number[] | FamilyStyles
}

export interface FontInputOutput {
  inputFont: string
  outputFont: string
  inputText: string
  outputText: string
}

export interface DownloadOptions {
  base64?: boolean
  overwriting?: boolean
  outputDir: string
  stylePath: string
  fontsDir: string
  fontsPath: string
  headers?: HeadersInit
}

export interface GoogleFonts {
  families?: Families
  display?: string
  subsets?: string[] | string
  text?: string
}
