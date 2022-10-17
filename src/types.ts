export interface FamilyStyles {
  [style: string]: boolean | number | number[]
}

export interface Families {
  [family: string]: boolean | number | number[] | FamilyStyles
}

export interface GoogleFonts {
  families?: Families
  display?: string
  subsets?: string[] | string
  text?: string
}
