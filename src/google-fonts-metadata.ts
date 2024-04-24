export type GoogleFontsDisplay = 'auto' | 'block' | 'swap' | 'fallback' | 'optional'

export type GoogleFontsSubset = 'latin' | 'latin-ext' | 'adlam' | 'vietnamese' | 'sinhala' | 'ethiopic' | 'cyrillic' | 'cyrillic-ext' | 'greek' | 'tifinagh' | 'kannada' | 'telugu' | 'devanagari' | 'hebrew' | 'greek-ext' | 'arabic' | 'bengali' | 'oriya' | 'gujarati' | 'gurmukhi' | 'malayalam' | 'tamil' | 'khmer' | 'thai' | 'japanese' | 'korean' | 'math' | 'symbols' | 'new-tai-lue' | 'cherokee' | 'armenian' | 'tibetan' | 'kayah-li' | 'lisu' | 'chinese-simplified' | 'lepcha' | 'gunjala-gondi' | 'emoji' | 'music' | 'anatolian-hieroglyphs' | 'avestan' | 'balinese' | 'bamum' | 'bassa-vah' | 'batak' | 'bhaiksuki' | 'brahmi' | 'buginese' | 'buhid' | 'canadian-aboriginal' | 'carian' | 'caucasian-albanian' | 'chakma' | 'cham' | 'chorasmian' | 'coptic' | 'cuneiform' | 'cypriot' | 'cypro-minoan' | 'deseret' | 'duployan' | 'egyptian-hieroglyphs' | 'elbasan' | 'elymaic' | 'georgian' | 'glagolitic' | 'gothic' | 'grantha' | 'chinese-hongkong' | 'hanifi-rohingya' | 'hanunoo' | 'hatran' | 'imperial-aramaic' | 'indic-siyaq-numbers' | 'inscriptional-pahlavi' | 'inscriptional-parthian' | 'javanese' | 'kaithi' | 'kawi' | 'kharoshthi' | 'khojki' | 'khudawadi' | 'lao' | 'limbu' | 'linear-a' | 'linear-b' | 'lycian' | 'lydian' | 'mahajani' | 'mandaic' | 'manichaean' | 'marchen' | 'masaram-gondi' | 'mayan-numerals' | 'medefaidrin' | 'meetei-mayek' | 'mende-kikakui' | 'meroitic' | 'meroitic-cursive' | 'meroitic-hieroglyphs' | 'miao' | 'modi' | 'mongolian' | 'mro' | 'multani' | 'myanmar' | 'nko' | 'nabataean' | 'nag-mundari' | 'nandinagari' | 'newa' | 'nushu' | 'ogham' | 'ol-chiki' | 'old-hungarian' | 'old-italic' | 'old-north-arabian' | 'old-permic' | 'old-persian' | 'old-sogdian' | 'old-south-arabian' | 'old-turkic' | 'osage' | 'osmanya' | 'pahawh-hmong' | 'palmyrene' | 'pau-cin-hau' | 'phags-pa' | 'phoenician' | 'psalter-pahlavi' | 'rejang' | 'runic' | 'samaritan' | 'saurashtra' | 'sharada' | 'shavian' | 'siddham' | 'signwriting' | 'sogdian' | 'sora-sompeng' | 'soyombo' | 'sundanese' | 'syloti-nagri' | 'braille' | 'syriac' | 'chinese-traditional' | 'tagalog' | 'tagbanwa' | 'tai-le' | 'tai-tham' | 'tai-viet' | 'takri' | 'tamil-supplement' | 'tangsa' | 'thaana' | 'tirhuta' | 'ugaritic' | 'vai' | 'vithkuqi' | 'wancho' | 'warang-citi' | 'yi' | 'zanabazar-square' | 'ahom' | 'dogra' | 'khitan-small-script' | 'makasar' | 'nyiakeng-puachue-hmong' | 'old-uyghur' | 'ottoman-siyaq-numbers' | 'tangut' | 'toto' | 'yezidi'

export type GoogleFontsWeight = boolean | string | string[] | number | number[]

export type GoogleFontsMetadata = {
  ABeeZee: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'ADLaM Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'adlam' | 'latin' | 'latin-ext' | ('adlam' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'AR One Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Abel: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Abhaya Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Aboreto: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Abril Fatface': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Abyssinica SIL': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'ethiopic' | 'latin' | 'latin-ext' | ('ethiopic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Aclonica: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Acme: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Actor: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Adamina: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Advent Pro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Agbalumo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Agdasima: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Aguafina Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Akatab: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tifinagh' | ('latin' | 'latin-ext' | 'tifinagh')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Akaya Kanadaka': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Akaya Telivigala': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Akronim: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Akshar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Aladin: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Alata: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Alatsi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Albert Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Aldrich: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Alef: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | ('hebrew' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Alegreya: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Alegreya SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Alegreya Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Alegreya Sans SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Aleo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Alex Brush': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Alexandria: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Alfa Slab One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Alice: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Alike: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Alike Angular': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Alkalami: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Alkatra: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'devanagari' | 'latin' | 'latin-ext' | 'oriya' | ('bengali' | 'devanagari' | 'latin' | 'latin-ext' | 'oriya')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Allan: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Allerta: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Allerta Stencil': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Allison: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Allura: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Almarai: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | ('arabic')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Almendra: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Almendra Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Almendra SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Alumni Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Alumni Sans Collegiate One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Alumni Sans Inline One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Alumni Sans Pinstripe': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Amarante: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Amaranth: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Amatic SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Amethysta: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Amiko: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Amiri: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Amiri Quran': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Amita: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Anaheim: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Andada Pro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Andika: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Anek Bangla': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Anek Devanagari': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Anek Gujarati': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Anek Gurmukhi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Anek Kannada': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Anek Latin': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Anek Malayalam': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Anek Odia': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | ('latin' | 'latin-ext' | 'oriya')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Anek Tamil': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Anek Telugu': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Angkor: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Annie Use Your Telescope': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Anonymous Pro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Antic: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Antic Didone': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Antic Slab': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Anton: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Antonio: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Anuphan: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Anybody: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Aoboshi One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Arapey: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Arbutus: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Arbutus Slab': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Architects Daughter': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Archivo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Archivo Black': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Archivo Narrow': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Are You Serious': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Aref Ruqaa': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Aref Ruqaa Ink': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Arima: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'malayalam' | 'tamil' | 'vietnamese' | ('greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'malayalam' | 'tamil' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Arimo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Arizonia: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Armata: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Arsenal: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Artifika: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Arvo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Arya: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Asap: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Asap Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Asar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Asset: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Assistant: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Astloch: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Asul: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Athiti: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Atkinson Hyperlegible': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Atma: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Atomic Age': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Aubrey: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Audiowide: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Autour One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Average: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Average Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Averia Gruesa Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Averia Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Averia Sans Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Averia Serif Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Azeret Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  B612: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'B612 Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'BIZ UDGothic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'BIZ UDMincho': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'BIZ UDPGothic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'BIZ UDPMincho': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Babylonica: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bacasime Antique': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bad Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | ('cyrillic' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bagel Fat One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Bahiana: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Bahianita: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bai Jamjuree': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Bakbak One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ballet: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Baloo 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | 'vietnamese' | ('devanagari' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Baloo Bhai 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'vietnamese' | ('gujarati' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Baloo Bhaijaan 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Baloo Bhaina 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | 'vietnamese' | ('latin' | 'latin-ext' | 'oriya' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Baloo Chettan 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | 'vietnamese' | ('latin' | 'latin-ext' | 'malayalam' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Baloo Da 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | 'vietnamese' | ('bengali' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Baloo Paaji 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese' | ('gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Baloo Tamma 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | 'vietnamese' | ('kannada' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Baloo Tammudu 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | 'vietnamese' | ('latin' | 'latin-ext' | 'telugu' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Baloo Thambi 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | 'vietnamese' | ('latin' | 'latin-ext' | 'tamil' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Balsamiq Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Balthazar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Bangers: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Barlow: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Barlow Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Barlow Semi Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Barriecito: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Barrio: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Basic: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Baskervville: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Battambang: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Baumans: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Bayon: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Be Vietnam Pro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Beau Rivage': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bebas Neue': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Belanosima: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Belgrano: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Bellefair: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Belleza: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Bellota: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Bellota Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  BenchNine: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Benne: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Bentham: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Berkshire Swash': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Besley: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Beth Ellen': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Bevan: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'BhuTuka Expanded One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Big Shoulders Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Big Shoulders Inline Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Big Shoulders Inline Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Big Shoulders Stencil Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Big Shoulders Stencil Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Big Shoulders Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bigelow Rules': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bigshot One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Bilbo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bilbo Swash Caps': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  BioRhyme: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'BioRhyme Expanded': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Birthstone: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Birthstone Bounce': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Biryani: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Bitter: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Black And White Picture': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Black Han Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Black Ops One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Blaka: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Blaka Hollow': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Blaka Ink': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Blinker: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bodoni Moda': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Bokor: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bona Nova': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Bonbon: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bonheur Royale': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Boogaloo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Borel: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese' | ('latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bowlby One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bowlby One SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Braah One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese' | ('gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Brawler: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bree Serif': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bricolage Grotesque': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bruno Ace': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bruno Ace SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Brygada 1918': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Bubblegum Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bubbler One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Buda: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Buenard: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Bungee: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bungee Hairline': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bungee Inline': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bungee Outline': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bungee Shade': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Bungee Spice': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Butcherman: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Butterfly Kids': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cabin: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Cabin Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Cabin Sketch': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Caesar Dressing': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cagliostro: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cairo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Cairo Play': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Caladea: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Calistoga: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Calligraffitti: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cambay: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Cambo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Candal: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cantarell: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Cantata One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Cantora One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Caprasimo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Capriola: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Caramel: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Carattere: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cardo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Carlito: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Carme: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Carrois Gothic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Carrois Gothic SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Carter One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Castoro: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Castoro Titling': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Catamaran: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Caudex: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Caveat: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Caveat Brush': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Cedarville Cursive': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Ceviche One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Chakra Petch': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Changa: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Changa One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Chango: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Charis SIL': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Charm: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Charmonman: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Chathura: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Chau Philomene One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Chela One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Chelsea Market': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Chenla: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cherish: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Cherry Bomb One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Cherry Cream Soda': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Cherry Swash': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Chewy: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Chicle: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Chilanka: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Chivo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Chivo Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Chokokutai: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Chonburi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cinzel: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Cinzel Decorative': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Clicker Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Climate Crisis': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Coda: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Codystar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Coiny: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | 'vietnamese' | ('latin' | 'latin-ext' | 'tamil' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Combo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Comfortaa: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Comforter: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Comforter Brush': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Comic Neue': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Coming Soon': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Comme: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Commissioner: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Concert One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Condiment: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Content: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Contrail One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Convergence: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cookie: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Copse: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Corben: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Corinthia: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cormorant: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Cormorant Garamond': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Cormorant Infant': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Cormorant SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Cormorant Unicase': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Cormorant Upright': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Courgette: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Courier Prime': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Cousine: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Coustard: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Covered By Your Grace': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Crafty Girls': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Creepster: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Crete Round': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Crimson Pro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Crimson Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Croissant One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Crushed: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cuprum: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Cute Font': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Cutive: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Cutive Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'DM Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'DM Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'DM Serif Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'DM Serif Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Dai Banna SIL': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'new-tai-lue' | ('latin' | 'latin-ext' | 'new-tai-lue')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Damion: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Dancing Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Dangrek: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Darker Grotesque': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Darumadrop One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'David Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Dawning of a New Day': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Days One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Dekko: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Dela Gothic One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Delicious Handrawn': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Delius: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Delius Swash Caps': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Delius Unicase': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Della Respira': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Denk One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Devonshire: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Dhurjati: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Didact Gothic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Diphylleia: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Diplomata: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Diplomata SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Do Hyeon': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Dokdo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Domine: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Donegal One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Dongle: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Doppio One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Dorsa: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Dosis: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  DotGothic16: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Dr Sugiyama': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Duru Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  DynaPuff: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Dynalight: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'EB Garamond': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Eagle Lake': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'East Sea Dokdo': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Eater: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Economica: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Eczar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('devanagari' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Edu NSW ACT Foundation': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Edu QLD Beginner': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Edu SA Beginner': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Edu TAS Beginner': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Edu VIC WA NT Beginner': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'El Messiri': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'cyrillic' | 'latin' | 'latin-ext' | ('arabic' | 'cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Electrolize: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Elsie: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Elsie Swash Caps': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Emblema One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Emilys Candy': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Encode Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Encode Sans Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Encode Sans Expanded': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Encode Sans SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Encode Sans Semi Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Encode Sans Semi Expanded': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Engagement: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Englebert: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Enriqueta: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ephesis: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Epilogue: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Erica One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Esteban: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Estonia: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Euphoria Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ewert: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Exo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Exo 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Expletus Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Explora: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cherokee' | 'latin' | 'latin-ext' | 'vietnamese' | ('cherokee' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Fahkwang: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Familjen Grotesk': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Fanwood Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Farro: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Farsan: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'vietnamese' | ('gujarati' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Fascinate: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Fascinate Inline': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Faster One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Fasthand: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Fauna One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Faustina: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Federant: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Federo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Felipa: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Fenix: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Festive: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Figtree: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Finger Paint': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Finlandica: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Fira Code': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Fira Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Fira Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Fira Sans Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Fira Sans Extra Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Fjalla One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Fjord One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Flamenco: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Flavors: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Fleur De Leah': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Flow Block': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Flow Circular': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Flow Rounded': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Foldit: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Fondamento: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Fontdiner Swanky': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Forum: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Fragment Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Francois One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Frank Ruhl Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Fraunces: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Freckle Face': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Fredericka the Great': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Fredoka: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Freehand: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Fresca: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Frijole: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Fruktur: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Fugaz One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Fuggles: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Fuzzy Bubbles': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'GFS Didot': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | ('greek')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'GFS Neohellenic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | ('greek')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Gabarito: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gabriela: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gaegu: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gafata: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Gajraj One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Galada: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | ('bengali' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Galdeano: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Galindo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Gamja Flower': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gantari: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Gasoek One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gayathri: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'malayalam' | ('latin' | 'malayalam')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gelasio: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Gemunu Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Genos: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cherokee' | 'latin' | 'latin-ext' | 'vietnamese' | ('cherokee' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Gentium Book Plus': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Gentium Plus': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Geo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Geologica: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Georama: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Geostar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Geostar Fill': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Germania One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Gideon Roman': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gidugu: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Gilda Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Girassol: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Give You Glory': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Glass Antiqua': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Glegoo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gloock: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Gloria Hallelujah': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Glory: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Gluten: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Goblin One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Gochi Hand': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Goldman: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Golos Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gorditas: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Gothic A1': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gotu: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | 'vietnamese' | ('devanagari' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Goudy Bookletter 1911': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Gowun Batang': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Gowun Dodum': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Graduate: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Grand Hotel': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Grandiflora One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Grandstander: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Grape Nuts': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Gravitas One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Great Vibes': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Grechen Fuemen': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Grenze: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Grenze Gotisch': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Grey Qo': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Griffy: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gruppo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gudea: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Gugi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gulzar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gupter: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gurajada: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Gwendolyn: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Habibi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hachi Maru Pop': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Hahmlet: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Halant: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hammersmith One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Hanalei: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hanalei Fill': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Handjet: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'armenian' | 'cyrillic' | 'cyrillic-ext' | 'greek' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'armenian' | 'cyrillic' | 'cyrillic-ext' | 'greek' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Handlee: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hanken Grotesk': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Hanuman: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Happy Monkey': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Harmattan: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Headland One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hedvig Letters Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | ('latin' | 'latin-ext' | 'math' | 'symbols')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hedvig Letters Serif': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | ('latin' | 'latin-ext' | 'math' | 'symbols')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Heebo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | ('hebrew' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Henny Penny': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hepta Slab': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Herr Von Muellerhoff': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hi Melody': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hina Mincho': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Hind: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hind Guntur': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hind Madurai': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hind Siliguri': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Hind Vadodara': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Holtwood One SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Homemade Apple': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Homenaje: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Hubballi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Hurricane: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IBM Plex Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'IBM Plex Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'IBM Plex Sans Arabic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('arabic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IBM Plex Sans Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'IBM Plex Sans Devanagari': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IBM Plex Sans Hebrew': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IBM Plex Sans JP': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IBM Plex Sans KR': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IBM Plex Sans Thai': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'thai')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IBM Plex Sans Thai Looped': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'thai')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IBM Plex Serif': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'IM Fell DW Pica': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'IM Fell DW Pica SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IM Fell Double Pica': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'IM Fell Double Pica SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IM Fell English': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'IM Fell English SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IM Fell French Canon': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'IM Fell French Canon SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'IM Fell Great Primer': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'IM Fell Great Primer SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Ibarra Real Nova': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Iceberg: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Iceland: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Imbue: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Imperial Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Imprima: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Inclusive Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Inconsolata: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Inder: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Indie Flower': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Ingrid Darling': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Inika: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Inknut Antiqua': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Inria Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Inria Serif': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Inspiration: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Instrument Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Instrument Serif': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Inter: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Inter Tight': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Irish Grover': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Island Moments': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Istok Web': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Italiana: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Italianno: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Itim: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Jacques Francois': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Jacques Francois Shadow': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Jaldi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'JetBrains Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Jim Nightshade': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Joan: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Jockey One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Jolly Lodger': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Jomhuria: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Jomolhari: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'tibetan' | ('latin' | 'tibetan')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Josefin Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Josefin Slab': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Jost: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Joti One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Jua: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Judson: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Julee: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Julius Sans One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Junge: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Jura: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'kayah-li' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'kayah-li' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Just Another Hand': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Just Me Again Down Here': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  K2D: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Kablammo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kadwa: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | ('devanagari' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kaisei Decol': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kaisei HarunoUmi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kaisei Opti': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kaisei Tokumin': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kalam: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kameron: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kanit: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Kantumruy Pro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Karantina: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Karla: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Karma: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Katibeh: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kaushan Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kavivanar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kavoon: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kay Pho Du': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kayah-li' | 'latin' | 'latin-ext' | ('kayah-li' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kdam Thmor Pro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Keania One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kelly Slab': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kenia: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Khand: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Khmer: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Khula: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kings: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kirang Haerang': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kite One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kiwi Maru': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Klee One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Knewave: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  KoHo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Kodchasan: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Koh Santepheap': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kolker Brush': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Konkhmer Sleokchher': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kosugi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kosugi Maru': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kotta One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Koulen: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kranky: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kreon: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kristi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Krona One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Krub: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Kufam: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Kulim Park': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Kumar One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kumar One Outline': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Kumbh Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | ('latin' | 'latin-ext' | 'math')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Kurale: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'La Belle Aurore': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Labrada: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Lacquer: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Laila: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lakki Reddy': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lalezar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lancelot: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Langar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lateef: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lato: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Lavishly Yours': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'League Gothic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'League Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'League Spartan': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Leckerli One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ledger: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lekton: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Lemon: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lemonada: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lexend: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lexend Deca': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lexend Exa': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lexend Giga': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lexend Mega': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lexend Peta': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lexend Tera': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lexend Zetta': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Libre Barcode 128': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Libre Barcode 128 Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Libre Barcode 39': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Libre Barcode 39 Extended': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Libre Barcode 39 Extended Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Libre Barcode 39 Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Libre Barcode EAN13 Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Libre Baskerville': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Libre Bodoni': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Libre Caslon Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Libre Caslon Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Libre Franklin': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Licorice: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Life Savers': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lilita One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lily Script One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Limelight: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Linden Hill': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Linefont: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lisu Bosa': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lisu' | ('latin' | 'latin-ext' | 'lisu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Literata: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Liu Jian Mao Cao': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Livvic: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Lobster: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lobster Two': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Londrina Outline': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Londrina Shadow': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Londrina Sketch': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Londrina Solid': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Long Cang': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lora: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Love Light': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Love Ya Like A Sister': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Loved by the King': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Lovers Quarrel': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Luckiest Guy': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lugrasimo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lumanosimo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lunasima: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lusitana: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Lustria: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Luxurious Roman': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Luxurious Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'M PLUS 1': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'M PLUS 1 Code': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'M PLUS 1p': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'M PLUS 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'M PLUS Code Latin': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'M PLUS Rounded 1c': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Ma Shan Zheng': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Macondo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Macondo Swash Caps': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mada: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Magra: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Maiden Orange': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Maitree: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Major Mono Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mako: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mali: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Mallanna: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mandali: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Manjari: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Manrope: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mansalva: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Manuale: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Marcellus: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Marcellus SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Marck Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Margarine: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Marhey: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Markazi Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Marko One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Marmelad: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Martel: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Martel Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Martian Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Marvel: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Mate: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Mate SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Material Icons': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Material Icons Outlined': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Material Icons Round': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Material Icons Sharp': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Material Icons Two Tone': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Material Symbols Outlined': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Material Symbols Rounded': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Material Symbols Sharp': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Maven Pro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  McLaren: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mea Culpa': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Meddon: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  MedievalSharp: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Medula One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Meera Inimai': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'tamil' | ('latin' | 'tamil')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Megrim: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Meie Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Meow Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Merienda: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Merriweather: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Merriweather Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Metal: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Metal Mania': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Metamorphous: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Metrophobic: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Michroma: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Milonga: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Miltonian: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Miltonian Tattoo': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mina: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mingzat: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lepcha' | ('latin' | 'latin-ext' | 'lepcha')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Miniver: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Miriam Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mirza: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Miss Fajardose': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mitr: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mochiy Pop One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mochiy Pop P One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Modak: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Modern Antiqua': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mogra: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mohave: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Moirai One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Molengo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Molle: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Monda: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Monofett: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Monomaniac One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Monoton: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Monsieur La Doulaise': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Montaga: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Montagu Slab': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  MonteCarlo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Montez: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Montserrat: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Montserrat Alternates': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Montserrat Subrayada': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Moo Lah Lah': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mooli: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Moon Dance': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Moul: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Moulpali: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mountains of Christmas': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mouse Memoirs': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mr Bedfort': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mr Dafoe': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mr De Haviland': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mrs Saint Delafield': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mrs Sheppards': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Ms Madi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mukta: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mukta Mahee': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mukta Malar': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mukta Vaani': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mulish: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Murecho: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  MuseoModerno: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'My Soul': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Mynerve: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Mystery Quest': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  NTR: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Nabla: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'math' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'math' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nanum Brush Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nanum Gothic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nanum Gothic Coding': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nanum Myeongjo': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nanum Pen Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Narnoor: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gunjala-gondi' | 'latin' | 'latin-ext' | 'math' | 'symbols' | ('gunjala-gondi' | 'latin' | 'latin-ext' | 'math' | 'symbols')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Neonderthaw: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nerko One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Neucha: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | ('cyrillic' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Neuton: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'New Rocker': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'New Tegomin': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'News Cycle': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Newsreader: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Niconne: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Niramit: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Nixie One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Nobile: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Nokora: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Norican: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Nosifer: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Notable: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nothing You Could Do': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noticia Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Noto Color Emoji': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'emoji' | ('emoji')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Emoji': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'emoji' | ('emoji')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Kufi Arabic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | ('arabic')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Music': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'music' | ('latin' | 'latin-ext' | 'music')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Naskh Arabic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Nastaliq Urdu': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Rashi Hebrew': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'devanagari' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'devanagari' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Adlam': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'adlam' | 'latin' | 'latin-ext' | ('adlam' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Adlam Unjoined': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'adlam' | 'latin' | 'latin-ext' | ('adlam' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Anatolian Hieroglyphs': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'anatolian-hieroglyphs' | 'latin' | 'latin-ext' | ('anatolian-hieroglyphs' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Arabic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | ('arabic')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Armenian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'armenian' | 'latin' | 'latin-ext' | ('armenian' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Avestan': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'avestan' | 'latin' | 'latin-ext' | ('avestan' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Balinese': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'balinese' | 'latin' | 'latin-ext' | ('balinese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Bamum': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bamum' | 'latin' | 'latin-ext' | ('bamum' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Bassa Vah': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bassa-vah' | 'latin' | 'latin-ext' | ('bassa-vah' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Batak': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'batak' | 'latin' | 'latin-ext' | ('batak' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Bengali': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Bhaiksuki': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bhaiksuki' | 'latin' | 'latin-ext' | ('bhaiksuki' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Brahmi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'brahmi' | 'latin' | 'latin-ext' | ('brahmi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Buginese': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'buginese' | 'latin' | 'latin-ext' | ('buginese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Buhid': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'buhid' | 'latin' | 'latin-ext' | ('buhid' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Canadian Aboriginal': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'canadian-aboriginal' | 'latin' | 'latin-ext' | ('canadian-aboriginal' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Carian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'carian' | 'latin' | 'latin-ext' | ('carian' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Caucasian Albanian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'caucasian-albanian' | 'latin' | 'latin-ext' | ('caucasian-albanian' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Chakma': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chakma' | 'latin' | 'latin-ext' | ('chakma' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Cham': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cham' | 'latin' | 'latin-ext' | ('cham' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Cherokee': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cherokee' | 'latin' | 'latin-ext' | ('cherokee' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Chorasmian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chorasmian' | 'latin' | 'latin-ext' | ('chorasmian' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Coptic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'coptic' | 'latin' | 'latin-ext' | ('coptic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Cuneiform': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cuneiform' | 'latin' | 'latin-ext' | ('cuneiform' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Cypriot': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cypriot' | 'latin' | 'latin-ext' | ('cypriot' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Cypro Minoan': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cypro-minoan' | 'latin' | 'latin-ext' | ('cypro-minoan' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Deseret': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'deseret' | 'latin' | 'latin-ext' | ('deseret' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Devanagari': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Duployan': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'duployan' | 'latin' | 'latin-ext' | ('duployan' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Egyptian Hieroglyphs': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'egyptian-hieroglyphs' | 'latin' | 'latin-ext' | ('egyptian-hieroglyphs' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Elbasan': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'elbasan' | 'latin' | 'latin-ext' | ('elbasan' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Elymaic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'elymaic' | 'latin' | 'latin-ext' | ('elymaic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Ethiopic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'ethiopic' | 'latin' | 'latin-ext' | ('ethiopic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Georgian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'georgian' | 'latin' | 'latin-ext' | ('georgian' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Glagolitic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'glagolitic' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'glagolitic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Gothic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gothic' | 'latin' | 'latin-ext' | ('gothic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Grantha': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'grantha' | 'latin' | 'latin-ext' | ('grantha' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Gujarati': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols' | ('gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Gunjala Gondi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gunjala-gondi' | 'latin' | 'latin-ext' | ('gunjala-gondi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Gurmukhi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans HK': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Hanifi Rohingya': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hanifi-rohingya' | 'latin' | 'latin-ext' | ('hanifi-rohingya' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Hanunoo': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hanunoo' | 'latin' | 'latin-ext' | ('hanunoo' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Hatran': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hatran' | 'latin' | 'latin-ext' | ('hatran' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Hebrew': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Imperial Aramaic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'imperial-aramaic' | 'latin' | 'latin-ext' | ('imperial-aramaic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Indic Siyaq Numbers': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'indic-siyaq-numbers' | 'latin' | 'latin-ext' | ('indic-siyaq-numbers' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Inscriptional Pahlavi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'inscriptional-pahlavi' | 'latin' | 'latin-ext' | ('inscriptional-pahlavi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Inscriptional Parthian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'inscriptional-parthian' | 'latin' | 'latin-ext' | ('inscriptional-parthian' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans JP': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Javanese': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'javanese' | 'latin' | 'latin-ext' | ('javanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans KR': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Kaithi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kaithi' | 'latin' | 'latin-ext' | ('kaithi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Kannada': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Kawi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kawi' | 'latin' | 'latin-ext' | ('kawi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Kayah Li': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kayah-li' | 'latin' | 'latin-ext' | ('kayah-li' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Kharoshthi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kharoshthi' | 'latin' | 'latin-ext' | ('kharoshthi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Khmer': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Khojki': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khojki' | 'latin' | 'latin-ext' | ('khojki' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Khudawadi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khudawadi' | 'latin' | 'latin-ext' | ('khudawadi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Lao': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'lao' | 'latin' | 'latin-ext' | ('lao' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Lao Looped': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'lao' | 'latin' | 'latin-ext' | ('lao' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Lepcha': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lepcha' | ('latin' | 'latin-ext' | 'lepcha')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Limbu': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'limbu' | ('latin' | 'latin-ext' | 'limbu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Linear A': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'linear-a' | ('latin' | 'latin-ext' | 'linear-a')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Linear B': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'linear-b' | ('latin' | 'latin-ext' | 'linear-b')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Lisu': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lisu' | ('latin' | 'latin-ext' | 'lisu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Lycian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'lycian' | ('lycian')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Lydian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lydian' | ('latin' | 'latin-ext' | 'lydian')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Mahajani': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mahajani' | ('latin' | 'latin-ext' | 'mahajani')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Malayalam': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Mandaic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mandaic' | ('latin' | 'latin-ext' | 'mandaic')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Manichaean': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'manichaean' | ('latin' | 'latin-ext' | 'manichaean')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Marchen': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'marchen' | ('latin' | 'latin-ext' | 'marchen')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Masaram Gondi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'masaram-gondi' | ('latin' | 'latin-ext' | 'masaram-gondi')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Math': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'math' | ('math')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Mayan Numerals': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mayan-numerals' | ('latin' | 'latin-ext' | 'mayan-numerals')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Medefaidrin': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'medefaidrin' | ('latin' | 'latin-ext' | 'medefaidrin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Meetei Mayek': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'meetei-mayek' | ('latin' | 'latin-ext' | 'meetei-mayek')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Mende Kikakui': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mende-kikakui' | ('latin' | 'latin-ext' | 'mende-kikakui')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Meroitic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'meroitic' | 'meroitic-cursive' | 'meroitic-hieroglyphs' | ('latin' | 'latin-ext' | 'meroitic' | 'meroitic-cursive' | 'meroitic-hieroglyphs')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Miao': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'miao' | ('latin' | 'latin-ext' | 'miao')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Modi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'modi' | ('latin' | 'latin-ext' | 'modi')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Mongolian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mongolian' | ('latin' | 'latin-ext' | 'mongolian')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Mro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mro' | ('latin' | 'latin-ext' | 'mro')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Multani': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'multani' | ('latin' | 'latin-ext' | 'multani')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Myanmar': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'myanmar' | ('myanmar')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans NKo': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nko' | ('latin' | 'latin-ext' | 'nko')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans NKo Unjoined': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nko' | ('latin' | 'latin-ext' | 'nko')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Nabataean': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nabataean' | ('latin' | 'latin-ext' | 'nabataean')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Nag Mundari': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nag-mundari' | ('latin' | 'latin-ext' | 'nag-mundari')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Nandinagari': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nandinagari' | ('latin' | 'latin-ext' | 'nandinagari')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans New Tai Lue': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'new-tai-lue' | ('latin' | 'latin-ext' | 'new-tai-lue')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Newa': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'newa' | ('latin' | 'latin-ext' | 'newa')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Nushu': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nushu' | ('latin' | 'latin-ext' | 'nushu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Ogham': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ogham' | ('latin' | 'latin-ext' | 'ogham')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Ol Chiki': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ol-chiki' | ('latin' | 'latin-ext' | 'ol-chiki')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Old Hungarian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-hungarian' | ('latin' | 'latin-ext' | 'old-hungarian')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Old Italic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-italic' | ('latin' | 'latin-ext' | 'old-italic')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Old North Arabian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-north-arabian' | ('latin' | 'latin-ext' | 'old-north-arabian')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Old Permic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'old-permic' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'old-permic')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Old Persian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-persian' | ('latin' | 'latin-ext' | 'old-persian')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Old Sogdian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-sogdian' | ('latin' | 'latin-ext' | 'old-sogdian')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Old South Arabian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-south-arabian' | ('latin' | 'latin-ext' | 'old-south-arabian')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Old Turkic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-turkic' | ('latin' | 'latin-ext' | 'old-turkic')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Oriya': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | ('latin' | 'latin-ext' | 'oriya')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Osage': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'osage' | ('latin' | 'latin-ext' | 'osage')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Osmanya': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'osmanya' | ('latin' | 'latin-ext' | 'osmanya')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Pahawh Hmong': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'pahawh-hmong' | ('latin' | 'latin-ext' | 'pahawh-hmong')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Palmyrene': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'palmyrene' | ('latin' | 'latin-ext' | 'palmyrene')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Pau Cin Hau': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'pau-cin-hau' | ('latin' | 'latin-ext' | 'pau-cin-hau')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Phags Pa': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'phags-pa' | ('phags-pa')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Phoenician': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'phoenician' | ('latin' | 'latin-ext' | 'phoenician')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Psalter Pahlavi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'psalter-pahlavi' | ('latin' | 'latin-ext' | 'psalter-pahlavi')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Rejang': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'rejang' | ('latin' | 'latin-ext' | 'rejang')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Runic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'runic' | ('latin' | 'latin-ext' | 'runic')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-simplified' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Samaritan': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'samaritan' | ('latin' | 'latin-ext' | 'samaritan')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Saurashtra': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'saurashtra' | ('latin' | 'latin-ext' | 'saurashtra')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Sharada': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sharada' | ('latin' | 'latin-ext' | 'sharada')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Shavian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'shavian' | ('latin' | 'latin-ext' | 'shavian')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Siddham': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'siddham' | ('latin' | 'latin-ext' | 'siddham')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans SignWriting': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'signwriting' | ('latin' | 'latin-ext' | 'signwriting')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Sinhala': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Sogdian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sogdian' | ('latin' | 'latin-ext' | 'sogdian')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Sora Sompeng': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sora-sompeng' | ('latin' | 'latin-ext' | 'sora-sompeng')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Soyombo': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'soyombo' | ('latin' | 'latin-ext' | 'soyombo')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Sundanese': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sundanese' | ('latin' | 'latin-ext' | 'sundanese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Syloti Nagri': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'syloti-nagri' | ('latin' | 'latin-ext' | 'syloti-nagri')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Symbols': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'symbols' | ('latin' | 'latin-ext' | 'symbols')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Symbols 2': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'braille' | 'latin' | 'latin-ext' | 'math' | 'mayan-numerals' | 'symbols' | ('braille' | 'latin' | 'latin-ext' | 'math' | 'mayan-numerals' | 'symbols')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Syriac': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'syriac' | ('latin' | 'latin-ext' | 'syriac')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Syriac Eastern': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'syriac' | ('latin' | 'latin-ext' | 'syriac')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans TC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-traditional' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-traditional' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Tagalog': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tagalog' | ('latin' | 'latin-ext' | 'tagalog')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Tagbanwa': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tagbanwa' | ('latin' | 'latin-ext' | 'tagbanwa')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Tai Le': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-le' | ('latin' | 'latin-ext' | 'tai-le')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Tai Tham': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-tham' | ('latin' | 'latin-ext' | 'tai-tham')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Tai Viet': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-viet' | ('latin' | 'latin-ext' | 'tai-viet')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Takri': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'takri' | ('latin' | 'latin-ext' | 'takri')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Tamil': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Tamil Supplement': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil-supplement' | ('latin' | 'latin-ext' | 'tamil-supplement')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Tangsa': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tangsa' | ('latin' | 'latin-ext' | 'tangsa')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Telugu': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Thaana': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thaana' | ('latin' | 'latin-ext' | 'thaana')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Thai': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | ('latin' | 'latin-ext' | 'thai')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Thai Looped': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | ('latin' | 'latin-ext' | 'thai')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Tifinagh': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tifinagh' | ('latin' | 'latin-ext' | 'tifinagh')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Tirhuta': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tirhuta' | ('latin' | 'latin-ext' | 'tirhuta')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Ugaritic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ugaritic' | ('latin' | 'latin-ext' | 'ugaritic')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Vai': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vai' | ('latin' | 'latin-ext' | 'vai')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Vithkuqi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vithkuqi' | ('latin' | 'latin-ext' | 'vithkuqi')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Wancho': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'wancho' | ('latin' | 'latin-ext' | 'wancho')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Warang Citi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'warang-citi' | ('latin' | 'latin-ext' | 'warang-citi')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Yi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'yi' | ('latin' | 'latin-ext' | 'yi')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Sans Zanabazar Square': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'zanabazar-square' | ('latin' | 'latin-ext' | 'zanabazar-square')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Ahom': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'ahom' | 'latin' | 'latin-ext' | ('ahom' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Armenian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'armenian' | 'latin' | 'latin-ext' | ('armenian' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Balinese': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'balinese' | 'latin' | 'latin-ext' | ('balinese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Bengali': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Devanagari': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Dogra': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'dogra' | 'latin' | 'latin-ext' | ('dogra' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Ethiopic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'ethiopic' | 'latin' | 'latin-ext' | ('ethiopic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Georgian': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'georgian' | 'latin' | 'latin-ext' | ('georgian' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Grantha': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'grantha' | 'latin' | 'latin-ext' | ('grantha' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Gujarati': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols' | ('gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Gurmukhi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif HK': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Hebrew': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif JP': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif KR': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Kannada': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Khitan Small Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khitan-small-script' | 'latin' | 'latin-ext' | ('khitan-small-script' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Khmer': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Khojki': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khojki' | 'latin' | 'latin-ext' | ('khojki' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Lao': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'lao' | 'latin' | 'latin-ext' | ('lao' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Makasar': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'makasar' | ('latin' | 'latin-ext' | 'makasar')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Malayalam': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Myanmar': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'myanmar' | ('myanmar')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif NP Hmong': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'nyiakeng-puachue-hmong' | ('latin' | 'nyiakeng-puachue-hmong')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Old Uyghur': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-uyghur' | ('latin' | 'latin-ext' | 'old-uyghur')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Oriya': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | ('latin' | 'latin-ext' | 'oriya')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Ottoman Siyaq': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ottoman-siyaq-numbers' | ('latin' | 'latin-ext' | 'ottoman-siyaq-numbers')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Sinhala': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif TC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-traditional' | 'latin' | ('chinese-traditional' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Tamil': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Tangut': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tangut' | ('latin' | 'latin-ext' | 'tangut')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Telugu': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Thai': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | ('latin' | 'latin-ext' | 'thai')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Tibetan': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tibetan' | ('latin' | 'latin-ext' | 'tibetan')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Toto': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'toto' | ('latin' | 'latin-ext' | 'toto')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Vithkuqi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vithkuqi' | ('latin' | 'latin-ext' | 'vithkuqi')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Serif Yezidi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'yezidi' | ('latin' | 'latin-ext' | 'yezidi')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Noto Traditional Nushu': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nushu' | ('latin' | 'latin-ext' | 'nushu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nova Cut': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nova Flat': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nova Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | ('greek' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nova Oval': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nova Round': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nova Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nova Slim': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Nova Square': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Numans: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Nunito: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Nunito Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Nuosu SIL': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'yi' | ('latin' | 'latin-ext' | 'yi')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Odibee Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Odor Mean Chey': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Offside: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Oi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'tamil' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'tamil' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Old Standard TT': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Oldenburg: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ole: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Oleo Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Oleo Script Swash Caps': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Onest: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Oooh Baby': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Open Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Oranienbaum: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Orbit: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Orbitron: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Oregano: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Orelega One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Orienta: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Original Surfer': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Oswald: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Outfit: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Over the Rainbow': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Overlock: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Overlock SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Overpass: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Overpass Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ovo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Oxanium: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Oxygen: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Oxygen Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'PT Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'PT Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'PT Sans Caption': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'PT Sans Narrow': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'PT Serif': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'PT Serif Caption': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Pacifico: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Padauk: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'myanmar' | ('latin' | 'latin-ext' | 'myanmar')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Padyakke Expanded One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Palanquin: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Palanquin Dark': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Palette Mosaic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Pangolin: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Paprika: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Parisienne: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Passero One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Passion One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Passions Conflict': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Pathway Extreme': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Pathway Gothic One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Patrick Hand': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Patrick Hand SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Pattaya: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Patua One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Pavanam: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Paytone One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Peddana: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Peralta: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Permanent Marker': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Petemoss: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Petit Formal Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Petrona: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Philosopher: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Phudu: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Piazzolla: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Piedra: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Pinyon Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Pirata One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Pixelify Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Plaster: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Play: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Playball: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Playfair: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Playfair Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Playfair Display SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Playpen Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese' | ('latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Plus Jakarta Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Podkova: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Poiret One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Poller One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Poltawski Nowy': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Poly: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Pompiere: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Pontano Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Poor Story': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Poppins: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Port Lligat Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Port Lligat Slab': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Potta One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Pragati Narrow': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Praise: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Prata: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Preahvihear: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Press Start 2P': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Pridi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Princess Sofia': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Prociono: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Prompt: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Prosto One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Proza Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Public Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Puppies Play': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Puritan: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Purple Purse': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Qahiri: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Quando: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Quantico: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Quattrocento: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Quattrocento Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Questrial: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Quicksand: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Quintessential: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Qwigley: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Qwitcher Grypen': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  REM: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Racing Sans One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Radio Canada': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'canadian-aboriginal' | 'latin' | 'latin-ext' | 'vietnamese' | ('canadian-aboriginal' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Radley: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Rajdhani: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Rakkas: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Raleway: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Raleway Dots': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ramabhadra: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ramaraja: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Rambla: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Rammetto One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rampart One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ranchers: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Rancho: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ranga: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Rasa: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'vietnamese' | ('gujarati' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Rationale: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Ravi Prakash': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Readex Pro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Recursive: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Red Hat Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Red Hat Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Red Hat Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Red Rose': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Redacted: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Redacted Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Redressed: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Reem Kufi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Reem Kufi Fun': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Reem Kufi Ink': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Reenie Beanie': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Reggae One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Revalia: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rhodium Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ribeye: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Ribeye Marrow': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Righteous: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Risque: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Road Rage': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Roboto: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Roboto Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Roboto Flex': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Roboto Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Roboto Serif': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Roboto Slab': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Rochester: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rock 3D': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rock Salt': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'RocknRoll One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Rokkitt: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Romanesco: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Ropa Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Rosario: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Rosarivo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Rouge Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Rowdies: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rozha One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Rubik: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('arabic' | 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Rubik 80s Fade': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Beastly': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Bubbles': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Burned': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Dirt': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Distressed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Gemstones': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Glitch': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Iso': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Marker Hatch': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Maze': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Microbe': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Mono One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Moonrocks': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Pixels': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Puddles': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Spray Paint': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Storm': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Vinyl': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rubik Wet Paint': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ruda: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Rufina: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Ruge Boogie': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ruluko: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Rum Raisin': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Ruslan Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Russo One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ruthie: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ruwudu: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Rye: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'STIX Two Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Sacramento: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sahitya: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | ('devanagari' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sail: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Saira: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Saira Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Saira Extra Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Saira Semi Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Saira Stencil One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Salsa: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sanchez: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Sancreek: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sansita: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Sansita Swashed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sarabun: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Sarala: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sarina: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sarpanch: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sassy Frass': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Satisfy: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sawarabi Gothic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sawarabi Mincho': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Scada: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Scheherazade New': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Schibsted Grotesk': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Schoolbell: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Scope One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Seaweed Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Secular One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sedgwick Ave': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sedgwick Ave Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sen: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Send Flowers': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sevillana: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Seymour One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Shadows Into Light': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Shadows Into Light Two': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Shalimar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Shantell Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Shanti: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Share: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Share Tech': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Share Tech Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Shippori Antique': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Shippori Antique B1': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Shippori Mincho': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Shippori Mincho B1': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Shizuru: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Shojumaru: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Short Stack': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Shrikhand: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Siemreap: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sigmar: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sigmar One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Signika: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Signika Negative': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Silkscreen: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Simonetta: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Single Day': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | ('korean')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sintony: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sirin Stencil': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Six Caps': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Skranji: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Slabo 13px': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Slabo 27px': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Slackey: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Slackside One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Smokum: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Smooch: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Smooch Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Smythe: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sniglet: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Snippet: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Snowburst One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sofadi One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sofia: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sofia Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Sofia Sans Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Sofia Sans Extra Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Sofia Sans Semi Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Solitreo: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Solway: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sometype Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Song Myung': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sono: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sonsie One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sora: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sorts Mill Goudy': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Source Code Pro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Source Sans 3': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Source Serif 4': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Space Grotesk': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Space Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Special Elite': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Spectral: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Spectral SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Spicy Rice': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Spinnaker: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Spirax: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Splash: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Spline Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Spline Sans Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Squada One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Square Peg': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sree Krushnadevaraya': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sriracha: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Srisakdi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Staatliches: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Stalemate: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Stalinist One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Stardos Stencil': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Stick: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Stick No Bills': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Stint Ultra Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Stint Ultra Expanded': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Stoke: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Strait: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Style Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Stylish: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sue Ellen Francisco': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Suez One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Sulphur Point': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sumana: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sunflower: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sunshiney: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Supermercado One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Sura: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Suranna: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Suravaram: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Suwannaphum: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Swanky and Moo Moo': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Syncopate: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Syne: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | 'latin-ext' | ('greek' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Syne Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Syne Tactile': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Tai Heritage Pro': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-viet' | 'vietnamese' | ('latin' | 'latin-ext' | 'tai-viet' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Tajawal: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Tangerine: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Tapestry: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Taprom: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Tauri: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Taviraj: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Teko: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Tektur: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Telex: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Tenali Ramakrishna': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Tenor Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Text Me One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Texturina: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Thasadith: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'The Girl Next Door': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'The Nautigal': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Tienne: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Tillana: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Tilt Neon': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Tilt Prism': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Tilt Warp': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Timmana: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Tinos: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Tiro Bangla': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Tiro Devanagari Hindi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Tiro Devanagari Marathi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Tiro Devanagari Sanskrit': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Tiro Gurmukhi': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Tiro Kannada': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Tiro Tamil': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Tiro Telugu': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Titan One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Titillium Web': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Tomorrow: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Tourney: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Trade Winds': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Train One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Trirong: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Trispace: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Trocchi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Trochut: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Truculenta: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Trykker: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Tsukimi Rounded': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Tulpen One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Turret Road': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Twinkle Star': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ubuntu: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Ubuntu Condensed': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Ubuntu Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Uchen: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'tibetan' | ('latin' | 'tibetan')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Ultra: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Unbounded: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Uncial Antiqua': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Underdog: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Unica One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  UnifrakturCook: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  UnifrakturMaguntia: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Unkempt: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Unlock: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Unna: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Updock: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Urbanist: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  VT323: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Vampiro One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Varela: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Varela Round': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Varta: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Vast Shadow': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Vazirmatn: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Vesper Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Viaoda Libre': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Vibes: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Vibur: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Victor Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Vidaloka: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Viga: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Vina Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Voces: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Volkhov: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Vollkorn: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Vollkorn SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Voltaire: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Vujahday Script': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Waiting for the Sunrise': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Wallpoet: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Walter Turncoat': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Warnes: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Water Brush': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Waterfall: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Wavefont: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Wellfleet: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Wendy One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Whisper: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  WindSong: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Wire One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Wix Madefor Display': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Wix Madefor Text': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Work Sans': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Xanh Mono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Yaldevi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Yanone Kaffeesatz': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Yantramanav: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Yatra One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Yellowtail: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Yeon Sung': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Yeseva One': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Yesteryear: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Yomogi: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Young Serif': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Yrsa: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  Ysabeau: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Ysabeau Infant': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Ysabeau Office': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Ysabeau SC': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Yuji Boku': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Yuji Hentaigana Akari': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Yuji Hentaigana Akebono': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Yuji Mai': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Yuji Syuku': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Yusei Magic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'ZCOOL KuaiLe': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'ZCOOL QingKe HuangYou': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'ZCOOL XiaoWei': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Zen Antique': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Zen Antique Soft': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Zen Dots': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Zen Kaku Gothic Antique': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Zen Kaku Gothic New': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Zen Kurenaido': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Zen Loop': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Zen Maru Gothic': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Zen Old Mincho': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Zen Tokyo Zoo': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  Zeyada: GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Zhi Mang Xing': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },

  'Zilla Slab': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    ital?: GoogleFontsWeight
    italic?: GoogleFontsWeight
    i?: GoogleFontsWeight
    text?: string
  },

  'Zilla Slab Highlight': GoogleFontsWeight | {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    [key: string]: undefined | GoogleFontsWeight
    wght?: GoogleFontsWeight
    normal?: GoogleFontsWeight
    regular?: GoogleFontsWeight
    text?: string
  },
}
