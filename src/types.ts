export interface GoogleFonts {
  families?: Families
  display?: string
  subsets?: string[] | string
}

export interface Families {
  [family: string]: boolean | number[] | FamilyStyles
}

export interface FamilyStyles {
  [style: string]: number[]
}

export interface FontInputOutput {
  inputFont: string
  outputFont: string
  inputText: string
  outputText: string
}
