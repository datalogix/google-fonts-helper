export type FamilyWeight = string | boolean | number | number[]

export interface FamilyStyles {
  [style: string]: FamilyWeight
}

export interface Families {
  [family: string]: FamilyWeight | FamilyStyles
}

export interface GoogleFonts {
  families?: Families
  display?: string
  subsets?: string[] | string
  text?: string
}
