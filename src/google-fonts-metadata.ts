import type { FontStyle } from './types'

export type GoogleFontsDisplay = 'auto' | 'block' | 'swap' | 'fallback' | 'optional'

export type GoogleFontsSubset = 'latin' | 'latin-ext' | 'adlam' | 'vietnamese' | 'sinhala' | 'ethiopic' | 'cyrillic' | 'cyrillic-ext' | 'greek' | 'tifinagh' | 'kannada' | 'telugu' | 'devanagari' | 'hebrew' | 'greek-ext' | 'arabic' | 'bengali' | 'oriya' | 'gujarati' | 'gurmukhi' | 'malayalam' | 'tamil' | 'khmer' | 'thai' | 'japanese' | 'korean' | 'math' | 'symbols' | 'new-tai-lue' | 'cherokee' | 'armenian' | 'tibetan' | 'kayah-li' | 'lisu' | 'chinese-simplified' | 'lepcha' | 'gunjala-gondi' | 'emoji' | 'music' | 'anatolian-hieroglyphs' | 'avestan' | 'balinese' | 'bamum' | 'bassa-vah' | 'batak' | 'bhaiksuki' | 'brahmi' | 'buginese' | 'buhid' | 'canadian-aboriginal' | 'carian' | 'caucasian-albanian' | 'chakma' | 'cham' | 'chorasmian' | 'coptic' | 'cuneiform' | 'cypriot' | 'cypro-minoan' | 'deseret' | 'duployan' | 'egyptian-hieroglyphs' | 'elbasan' | 'elymaic' | 'georgian' | 'glagolitic' | 'gothic' | 'grantha' | 'chinese-hongkong' | 'hanifi-rohingya' | 'hanunoo' | 'hatran' | 'imperial-aramaic' | 'indic-siyaq-numbers' | 'inscriptional-pahlavi' | 'inscriptional-parthian' | 'javanese' | 'kaithi' | 'kawi' | 'kharoshthi' | 'khojki' | 'khudawadi' | 'lao' | 'limbu' | 'linear-a' | 'linear-b' | 'lycian' | 'lydian' | 'mahajani' | 'mandaic' | 'manichaean' | 'marchen' | 'masaram-gondi' | 'mayan-numerals' | 'medefaidrin' | 'meetei-mayek' | 'mende-kikakui' | 'meroitic' | 'meroitic-cursive' | 'meroitic-hieroglyphs' | 'miao' | 'modi' | 'mongolian' | 'mro' | 'multani' | 'myanmar' | 'nko' | 'nabataean' | 'nag-mundari' | 'nandinagari' | 'newa' | 'nushu' | 'ogham' | 'ol-chiki' | 'old-hungarian' | 'old-italic' | 'old-north-arabian' | 'old-permic' | 'old-persian' | 'old-sogdian' | 'old-south-arabian' | 'old-turkic' | 'osage' | 'osmanya' | 'pahawh-hmong' | 'palmyrene' | 'pau-cin-hau' | 'phags-pa' | 'phoenician' | 'psalter-pahlavi' | 'rejang' | 'runic' | 'samaritan' | 'saurashtra' | 'sharada' | 'shavian' | 'siddham' | 'signwriting' | 'sogdian' | 'sora-sompeng' | 'soyombo' | 'sundanese' | 'syloti-nagri' | 'braille' | 'syriac' | 'chinese-traditional' | 'tagalog' | 'tagbanwa' | 'tai-le' | 'tai-tham' | 'tai-viet' | 'takri' | 'tamil-supplement' | 'tangsa' | 'thaana' | 'tirhuta' | 'ugaritic' | 'vai' | 'vithkuqi' | 'wancho' | 'warang-citi' | 'yi' | 'zanabazar-square' | 'ahom' | 'dogra' | 'khitan-small-script' | 'makasar' | 'nyiakeng-puachue-hmong' | 'old-uyghur' | 'ottoman-siyaq-numbers' | 'tangut' | 'toto' | 'yezidi'

export type GoogleFontsWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type GoogleFontsMetadata = {
  ABeeZee: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'ADLaM Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'adlam' | 'latin' | 'latin-ext' | ('adlam' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'AR One Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Abel: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Abhaya Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  Aboreto: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Abril Fatface': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Abyssinica SIL': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'ethiopic' | 'latin' | 'latin-ext' | ('ethiopic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Aclonica: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Acme: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Actor: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Adamina: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Advent Pro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Agbalumo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Agdasima: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Aguafina Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Akatab: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tifinagh' | ('latin' | 'latin-ext' | 'tifinagh')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  'Akaya Kanadaka': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Akaya Telivigala': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Akronim: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Akshar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Aladin: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alata: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alatsi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Albert Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Aldrich: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alef: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | ('hebrew' | 'latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Alegreya: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  'Alegreya SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 700 | 800 | 900 | (400 | 500 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 700 | 800 | 900 | (400 | 500 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 700 | 800 | 900 | (400 | 500 | 700 | 800 | 900)[]
    ital?: string | true | 400 | 500 | 700 | 800 | 900 | (400 | 500 | 700 | 800 | 900)[]
    italic?: string | true | 400 | 500 | 700 | 800 | 900 | (400 | 500 | 700 | 800 | 900)[]
    i?: string | true | 400 | 500 | 700 | 800 | 900 | (400 | 500 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 700 | 800 | 900 | (400 | 500 | 700 | 800 | 900)[],

  'Alegreya Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    i?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[],

  'Alegreya Sans SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    i?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[],

  Aleo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Alex Brush': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alexandria: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Alfa Slab One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alice: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alike: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Alike Angular': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alkalami: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alkatra: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'devanagari' | 'latin' | 'latin-ext' | 'oriya' | ('bengali' | 'devanagari' | 'latin' | 'latin-ext' | 'oriya')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Allan: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Allerta: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Allerta Stencil': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Allison: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Allura: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Almarai: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | ('arabic')[]
    wght?: string | true | 300 | 400 | 700 | 800 | (300 | 400 | 700 | 800)[]
    normal?: string | true | 300 | 400 | 700 | 800 | (300 | 400 | 700 | 800)[]
    regular?: string | true | 300 | 400 | 700 | 800 | (300 | 400 | 700 | 800)[]
    text?: string
  } | string | true | 300 | 400 | 700 | 800 | (300 | 400 | 700 | 800)[],

  Almendra: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Almendra Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Almendra SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Alumni Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Alumni Sans Collegiate One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Alumni Sans Inline One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Alumni Sans Pinstripe': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Amarante: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Amaranth: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Amatic SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Amethysta: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Amiko: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    normal?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    regular?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 600 | 700 | (400 | 600 | 700)[],

  Amiri: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Amiri Quran': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Amita: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Anaheim: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Andada Pro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  Andika: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Anek Bangla': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Devanagari': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Gujarati': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Gurmukhi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Kannada': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Latin': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Malayalam': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Odia': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | ('latin' | 'latin-ext' | 'oriya')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Tamil': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Telugu': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Angkor: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Annie Use Your Telescope': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Anonymous Pro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Antic: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Antic Didone': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Antic Slab': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Anton: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Antonio: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  Anuphan: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  Anybody: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Aoboshi One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Arapey: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Arbutus: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Arbutus Slab': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Architects Daughter': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Archivo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Archivo Black': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Archivo Narrow': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Are You Serious': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Aref Ruqaa': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Aref Ruqaa Ink': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Arima: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'malayalam' | 'tamil' | 'vietnamese' | ('greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'malayalam' | 'tamil' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  Arimo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Arizonia: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Armata: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Arsenal: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Artifika: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Arvo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Arya: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Asap: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Asap Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Asar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Asset: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Assistant: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Astloch: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Asul: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Athiti: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Atkinson Hyperlegible': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Atma: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Atomic Age': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Aubrey: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Audiowide: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Autour One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Average: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Average Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Averia Gruesa Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Averia Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    ital?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    italic?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    i?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Averia Sans Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    ital?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    italic?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    i?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Averia Serif Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    ital?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    italic?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    i?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Azeret Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  B612: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'B612 Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'BIZ UDGothic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'BIZ UDMincho': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'BIZ UDPGothic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'BIZ UDPMincho': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Babylonica: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bacasime Antique': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bad Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | ('cyrillic' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bagel Fat One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bahiana: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bahianita: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bai Jamjuree': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Bakbak One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ballet: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Baloo 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | 'vietnamese' | ('devanagari' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Bhai 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'vietnamese' | ('gujarati' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Bhaijaan 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Bhaina 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | 'vietnamese' | ('latin' | 'latin-ext' | 'oriya' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Chettan 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | 'vietnamese' | ('latin' | 'latin-ext' | 'malayalam' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Da 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | 'vietnamese' | ('bengali' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Paaji 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese' | ('gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Tamma 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | 'vietnamese' | ('kannada' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Tammudu 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | 'vietnamese' | ('latin' | 'latin-ext' | 'telugu' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Thambi 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | 'vietnamese' | ('latin' | 'latin-ext' | 'tamil' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Balsamiq Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Balthazar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bangers: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Barlow: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Barlow Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Barlow Semi Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Barriecito: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Barrio: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Basic: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Baskervville: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Battambang: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[],

  Baumans: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bayon: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Be Vietnam Pro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Beau Rivage': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bebas Neue': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Belanosima: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    normal?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    regular?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 600 | 700 | (400 | 600 | 700)[],

  Belgrano: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bellefair: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Belleza: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bellota: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    ital?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    italic?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    i?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Bellota Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    ital?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    italic?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    i?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  BenchNine: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Benne: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bentham: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Berkshire Swash': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Besley: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  'Beth Ellen': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bevan: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'BhuTuka Expanded One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Big Shoulders Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Big Shoulders Inline Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Big Shoulders Inline Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Big Shoulders Stencil Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Big Shoulders Stencil Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Big Shoulders Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Bigelow Rules': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bigshot One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bilbo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bilbo Swash Caps': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  BioRhyme: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'BioRhyme Expanded': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[],

  Birthstone: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Birthstone Bounce': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 500 | (400 | 500)[]
    normal?: true | 400 | 500 | (400 | 500)[]
    regular?: true | 400 | 500 | (400 | 500)[]
    text?: string
  } | true | 400 | 500 | (400 | 500)[],

  Biryani: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[],

  Bitter: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Black And White Picture': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Black Han Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Black Ops One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Blaka: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Blaka Hollow': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Blaka Ink': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Blinker: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 600 | 700 | 800 | 900)[],

  'Bodoni Moda': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Bokor: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bona Nova': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Bonbon: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bonheur Royale': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Boogaloo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Borel: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese' | ('latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bowlby One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bowlby One SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Braah One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese' | ('gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Brawler: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Bree Serif': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bricolage Grotesque': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Bruno Ace': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bruno Ace SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Brygada 1918': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Bubblegum Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bubbler One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Buda: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: 300
    normal?: 300
    regular?: 300
    text?: string
  },

  Buenard: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Bungee: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bungee Hairline': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bungee Inline': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bungee Outline': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bungee Shade': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bungee Spice': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Butcherman: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Butterfly Kids': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cabin: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Cabin Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Cabin Sketch': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Caesar Dressing': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cagliostro: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cairo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Cairo Play': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Caladea: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Calistoga: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Calligraffitti: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cambay: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Cambo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Candal: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cantarell: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Cantata One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cantora One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Caprasimo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Capriola: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Caramel: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Carattere: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cardo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Carlito: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Carme: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Carrois Gothic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Carrois Gothic SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Carter One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Castoro: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Castoro Titling': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Catamaran: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Caudex: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Caveat: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Caveat Brush': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cedarville Cursive': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ceviche One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Chakra Petch': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Changa: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Changa One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Chango: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Charis SIL': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Charm: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Charmonman: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Chathura: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 800 | (100 | 300 | 400 | 700 | 800)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 800 | (100 | 300 | 400 | 700 | 800)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 800 | (100 | 300 | 400 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 800 | (100 | 300 | 400 | 700 | 800)[],

  'Chau Philomene One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Chela One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Chelsea Market': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Chenla: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cherish: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cherry Bomb One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cherry Cream Soda': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cherry Swash': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Chewy: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Chicle: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Chilanka: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Chivo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Chivo Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Chokokutai: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Chonburi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cinzel: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  'Cinzel Decorative': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    normal?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    regular?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 700 | 900 | (400 | 700 | 900)[],

  'Clicker Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Climate Crisis': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Coda: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 800 | (400 | 800)[]
    normal?: true | 400 | 800 | (400 | 800)[]
    regular?: true | 400 | 800 | (400 | 800)[]
    text?: string
  } | true | 400 | 800 | (400 | 800)[],

  Codystar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 300 | 400 | (300 | 400)[]
    normal?: true | 300 | 400 | (300 | 400)[]
    regular?: true | 300 | 400 | (300 | 400)[]
    text?: string
  } | true | 300 | 400 | (300 | 400)[],

  Coiny: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | 'vietnamese' | ('latin' | 'latin-ext' | 'tamil' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Combo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Comfortaa: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Comforter: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Comforter Brush': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Comic Neue': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    ital?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    italic?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    i?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Coming Soon': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Comme: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Commissioner: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Concert One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Condiment: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Content: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Contrail One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Convergence: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cookie: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Copse: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Corben: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Corinthia: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Cormorant: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Cormorant Garamond': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Cormorant Infant': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Cormorant SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Cormorant Unicase': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Cormorant Upright': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Courgette: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Courier Prime': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Cousine: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Coustard: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 900 | (400 | 900)[]
    normal?: true | 400 | 900 | (400 | 900)[]
    regular?: true | 400 | 900 | (400 | 900)[]
    text?: string
  } | true | 400 | 900 | (400 | 900)[],

  'Covered By Your Grace': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Crafty Girls': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Creepster: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Crete Round': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Crimson Pro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Crimson Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    normal?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    regular?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    ital?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    italic?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    i?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 600 | 700 | (400 | 600 | 700)[],

  'Croissant One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Crushed: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cuprum: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Cute Font': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cutive: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cutive Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'DM Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    normal?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    regular?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    ital?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    italic?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    i?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    text?: string
  } | string | true | 300 | 400 | 500 | (300 | 400 | 500)[],

  'DM Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'DM Serif Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'DM Serif Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Dai Banna SIL': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'new-tai-lue' | ('latin' | 'latin-ext' | 'new-tai-lue')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Damion: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Dancing Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Dangrek: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Darker Grotesque': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Darumadrop One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'David Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  'Dawning of a New Day': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Days One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dekko: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Dela Gothic One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Delicious Handrawn': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Delius: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Delius Swash Caps': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Delius Unicase': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Della Respira': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Denk One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Devonshire: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dhurjati: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Didact Gothic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Diphylleia: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Diplomata: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Diplomata SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Do Hyeon': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dokdo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Domine: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Donegal One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dongle: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Doppio One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dorsa: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dosis: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  DotGothic16: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Dr Sugiyama': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Duru Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  DynaPuff: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Dynalight: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'EB Garamond': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Eagle Lake': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'East Sea Dokdo': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Eater: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Economica: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Eczar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('devanagari' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Edu NSW ACT Foundation': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Edu QLD Beginner': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Edu SA Beginner': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Edu TAS Beginner': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Edu VIC WA NT Beginner': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'El Messiri': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'cyrillic' | 'latin' | 'latin-ext' | ('arabic' | 'cyrillic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Electrolize: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Elsie: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 900 | (400 | 900)[]
    normal?: true | 400 | 900 | (400 | 900)[]
    regular?: true | 400 | 900 | (400 | 900)[]
    text?: string
  } | true | 400 | 900 | (400 | 900)[],

  'Elsie Swash Caps': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 900 | (400 | 900)[]
    normal?: true | 400 | 900 | (400 | 900)[]
    regular?: true | 400 | 900 | (400 | 900)[]
    text?: string
  } | true | 400 | 900 | (400 | 900)[],

  'Emblema One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Emilys Candy': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Encode Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Encode Sans Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Encode Sans Expanded': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Encode Sans SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Encode Sans Semi Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Encode Sans Semi Expanded': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Engagement: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Englebert: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Enriqueta: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Ephesis: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Epilogue: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Erica One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Esteban: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Estonia: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Euphoria Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ewert: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Exo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Exo 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Expletus Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Explora: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cherokee' | 'latin' | 'latin-ext' | 'vietnamese' | ('cherokee' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fahkwang: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Familjen Grotesk': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Fanwood Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Farro: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[],

  Farsan: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'vietnamese' | ('gujarati' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fascinate: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fascinate Inline': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Faster One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fasthand: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fauna One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Faustina: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[],

  Federant: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Federo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Felipa: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fenix: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Festive: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Figtree: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Finger Paint': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Finlandica: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Fira Code': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Fira Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  'Fira Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Fira Sans Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Fira Sans Extra Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Fjalla One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fjord One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Flamenco: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 300 | 400 | (300 | 400)[]
    normal?: true | 300 | 400 | (300 | 400)[]
    regular?: true | 300 | 400 | (300 | 400)[]
    text?: string
  } | true | 300 | 400 | (300 | 400)[],

  Flavors: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fleur De Leah': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Flow Block': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Flow Circular': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Flow Rounded': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Foldit: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Fondamento: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Fontdiner Swanky': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Forum: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fragment Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Francois One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Frank Ruhl Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Fraunces: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Freckle Face': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fredericka the Great': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fredoka: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Freehand: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fresca: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Frijole: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fruktur: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Fugaz One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fuggles: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fuzzy Bubbles': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'GFS Didot': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'greek' | ('greek')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'GFS Neohellenic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'greek' | ('greek')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Gabarito: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Gabriela: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gaegu: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Gafata: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gajraj One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Galada: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | ('bengali' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Galdeano: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Galindo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gamja Flower': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gantari: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Gasoek One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gayathri: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'malayalam' | ('latin' | 'malayalam')[]
    wght?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    normal?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    regular?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    text?: string
  } | string | true | 100 | 400 | 700 | (100 | 400 | 700)[],

  Gelasio: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Gemunu Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Genos: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cherokee' | 'latin' | 'latin-ext' | 'vietnamese' | ('cherokee' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Gentium Book Plus': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Gentium Plus': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Geo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Geologica: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Georama: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Geostar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Geostar Fill': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Germania One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gideon Roman': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gidugu: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gilda Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Girassol: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Give You Glory': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Glass Antiqua': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Glegoo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Gloock: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gloria Hallelujah': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Glory: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Gluten: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Goblin One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gochi Hand': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Goldman: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Golos Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Gorditas: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Gothic A1': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Gotu: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | 'vietnamese' | ('devanagari' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Goudy Bookletter 1911': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gowun Batang': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Gowun Dodum': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Graduate: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Grand Hotel': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Grandiflora One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Grandstander: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Grape Nuts': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gravitas One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Great Vibes': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Grechen Fuemen': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Grenze: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Grenze Gotisch': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Grey Qo': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Griffy: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gruppo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gudea: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Gugi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gulzar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gupter: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  Gurajada: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gwendolyn: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Habibi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hachi Maru Pop': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Hahmlet: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Halant: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Hammersmith One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Hanalei: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hanalei Fill': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Handjet: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'armenian' | 'cyrillic' | 'cyrillic-ext' | 'greek' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'armenian' | 'cyrillic' | 'cyrillic-ext' | 'greek' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Handlee: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hanken Grotesk': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Hanuman: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[],

  'Happy Monkey': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Harmattan: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Headland One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hedvig Letters Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | ('latin' | 'latin-ext' | 'math' | 'symbols')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hedvig Letters Serif': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | ('latin' | 'latin-ext' | 'math' | 'symbols')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Heebo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | ('hebrew' | 'latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Henny Penny': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hepta Slab': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Herr Von Muellerhoff': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hi Melody': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hina Mincho': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Hind: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Hind Guntur': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Hind Madurai': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Hind Siliguri': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Hind Vadodara': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Holtwood One SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Homemade Apple': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Homenaje: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Hubballi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Hurricane: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'IBM Plex Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans Arabic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('arabic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans Devanagari': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans Hebrew': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans JP': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans KR': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans Thai': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'thai')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans Thai Looped': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'thai')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Serif': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IM Fell DW Pica': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'IM Fell DW Pica SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'IM Fell Double Pica': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'IM Fell Double Pica SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'IM Fell English': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'IM Fell English SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'IM Fell French Canon': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'IM Fell French Canon SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'IM Fell Great Primer': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'IM Fell Great Primer SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ibarra Real Nova': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Iceberg: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Iceland: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Imbue: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Imperial Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Imprima: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Inclusive Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Inconsolata: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Inder: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Indie Flower': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ingrid Darling': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Inika: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Inknut Antiqua': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Inria Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    ital?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    italic?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    i?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Inria Serif': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    ital?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    italic?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    i?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Inspiration: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Instrument Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Instrument Serif': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Inter: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Inter Tight': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Irish Grover': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Island Moments': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Istok Web': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Italiana: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Italianno: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Itim: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Jacques Francois': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Jacques Francois Shadow': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Jaldi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'JetBrains Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Jim Nightshade': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Joan: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Jockey One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Jolly Lodger': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Jomhuria: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Jomolhari: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'tibetan' | ('latin' | 'tibetan')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Josefin Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'Josefin Slab': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  Jost: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Joti One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Jua: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Judson: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Julee: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Julius Sans One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Junge: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Jura: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'kayah-li' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'kayah-li' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Just Another Hand': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Just Me Again Down Here': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  K2D: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Kablammo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kadwa: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | ('devanagari' | 'latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Kaisei Decol': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  'Kaisei HarunoUmi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  'Kaisei Opti': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  'Kaisei Tokumin': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | 800 | (400 | 500 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 700 | 800 | (400 | 500 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 700 | 800 | (400 | 500 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 700 | 800 | (400 | 500 | 700 | 800)[],

  Kalam: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Kameron: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Kanit: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Kantumruy Pro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  Karantina: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Karla: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Karma: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Katibeh: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kaushan Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kavivanar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kavoon: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kay Pho Du': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kayah-li' | 'latin' | 'latin-ext' | ('kayah-li' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Kdam Thmor Pro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Keania One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kelly Slab': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kenia: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Khand: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Khmer: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Khula: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 600 | 700 | 800 | (300 | 400 | 600 | 700 | 800)[]
    normal?: string | true | 300 | 400 | 600 | 700 | 800 | (300 | 400 | 600 | 700 | 800)[]
    regular?: string | true | 300 | 400 | 600 | 700 | 800 | (300 | 400 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 300 | 400 | 600 | 700 | 800 | (300 | 400 | 600 | 700 | 800)[],

  Kings: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kirang Haerang': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kite One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kiwi Maru': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    normal?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    regular?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    text?: string
  } | string | true | 300 | 400 | 500 | (300 | 400 | 500)[],

  'Klee One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 600 | (400 | 600)[]
    normal?: true | 400 | 600 | (400 | 600)[]
    regular?: true | 400 | 600 | (400 | 600)[]
    text?: string
  } | true | 400 | 600 | (400 | 600)[],

  Knewave: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  KoHo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  Kodchasan: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Koh Santepheap': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[],

  'Kolker Brush': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Konkhmer Sleokchher': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kosugi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kosugi Maru': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kotta One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Koulen: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kranky: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kreon: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Kristi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Krona One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Krub: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  Kufam: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  'Kulim Park': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 600 | 700 | (200 | 300 | 400 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 600 | 700 | (200 | 300 | 400 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 600 | 700 | (200 | 300 | 400 | 600 | 700)[]
    ital?: string | true | 200 | 300 | 400 | 600 | 700 | (200 | 300 | 400 | 600 | 700)[]
    italic?: string | true | 200 | 300 | 400 | 600 | 700 | (200 | 300 | 400 | 600 | 700)[]
    i?: string | true | 200 | 300 | 400 | 600 | 700 | (200 | 300 | 400 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 600 | 700 | (200 | 300 | 400 | 600 | 700)[],

  'Kumar One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kumar One Outline': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kumbh Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | ('latin' | 'latin-ext' | 'math')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Kurale: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'La Belle Aurore': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Labrada: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Lacquer: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Laila: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Lakki Reddy': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lalezar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lancelot: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Langar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lateef: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Lato: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    ital?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    italic?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    i?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[],

  'Lavishly Yours': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'League Gothic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'League Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'League Spartan': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Leckerli One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ledger: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lekton: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Lemon: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lemonada: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Lexend: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Deca': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Exa': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Giga': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Mega': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Peta': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Tera': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Zetta': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Libre Barcode 128': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode 128 Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode 39': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode 39 Extended': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode 39 Extended Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode 39 Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode EAN13 Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Baskerville': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Libre Bodoni': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Libre Caslon Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Caslon Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Libre Franklin': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Licorice: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Life Savers': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    normal?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    regular?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 700 | 800 | (400 | 700 | 800)[],

  'Lilita One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Lily Script One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Limelight: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Linden Hill': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Linefont: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lisu Bosa': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lisu' | ('latin' | 'latin-ext' | 'lisu')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Literata: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Liu Jian Mao Cao': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Livvic: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 900)[],

  Lobster: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Lobster Two': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Londrina Outline': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Londrina Shadow': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Londrina Sketch': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Londrina Solid': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 300 | 400 | 900 | (100 | 300 | 400 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 900 | (100 | 300 | 400 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 900 | (100 | 300 | 400 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 900 | (100 | 300 | 400 | 900)[],

  'Long Cang': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lora: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Love Light': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Love Ya Like A Sister': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Loved by the King': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Lovers Quarrel': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Luckiest Guy': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lugrasimo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lumanosimo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lunasima: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Lusitana: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Lustria: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Luxurious Roman': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Luxurious Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'M PLUS 1': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'M PLUS 1 Code': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'M PLUS 1p': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[],

  'M PLUS 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'M PLUS Code Latin': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'M PLUS Rounded 1c': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[],

  'Ma Shan Zheng': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Macondo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Macondo Swash Caps': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mada: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Magra: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Maiden Orange': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Maitree: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Major Mono Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mako: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mali: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  Mallanna: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mandali: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Manjari: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    wght?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    normal?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    regular?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    text?: string
  } | string | true | 100 | 400 | 700 | (100 | 400 | 700)[],

  Manrope: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Mansalva: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Manuale: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[],

  Marcellus: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Marcellus SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Marck Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Margarine: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Marhey: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Markazi Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Marko One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Marmelad: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Martel: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[],

  'Martel Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[],

  'Martian Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Marvel: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Mate: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Mate SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Icons': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Icons Outlined': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Icons Round': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Icons Sharp': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Icons Two Tone': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Symbols Outlined': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'Material Symbols Rounded': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'Material Symbols Sharp': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'Maven Pro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  McLaren: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mea Culpa': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Meddon: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  MedievalSharp: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Medula One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Meera Inimai': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'tamil' | ('latin' | 'tamil')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Megrim: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Meie Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Meow Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Merienda: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Merriweather: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 700 | 900 | (300 | 400 | 700 | 900)[]
    normal?: string | true | 300 | 400 | 700 | 900 | (300 | 400 | 700 | 900)[]
    regular?: string | true | 300 | 400 | 700 | 900 | (300 | 400 | 700 | 900)[]
    ital?: string | true | 300 | 400 | 700 | 900 | (300 | 400 | 700 | 900)[]
    italic?: string | true | 300 | 400 | 700 | 900 | (300 | 400 | 700 | 900)[]
    i?: string | true | 300 | 400 | 700 | 900 | (300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 700 | 900 | (300 | 400 | 700 | 900)[],

  'Merriweather Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[],

  Metal: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Metal Mania': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Metamorphous: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Metrophobic: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Michroma: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Milonga: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Miltonian: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Miltonian Tattoo': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mina: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Mingzat: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lepcha' | ('latin' | 'latin-ext' | 'lepcha')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Miniver: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Miriam Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Mirza: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Miss Fajardose': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mitr: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Mochiy Pop One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mochiy Pop P One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Modak: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Modern Antiqua': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mogra: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mohave: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Moirai One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Molengo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Molle: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  },

  Monda: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Monofett: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Monomaniac One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Monoton: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Monsieur La Doulaise': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Montaga: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Montagu Slab': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  MonteCarlo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Montez: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Montserrat: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Montserrat Alternates': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Montserrat Subrayada': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Moo Lah Lah': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mooli: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Moon Dance': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Moul: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Moulpali: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mountains of Christmas': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Mouse Memoirs': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mr Bedfort': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mr Dafoe': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mr De Haviland': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mrs Saint Delafield': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mrs Sheppards': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ms Madi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mukta: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Mukta Mahee': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Mukta Malar': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Mukta Vaani': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Mulish: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Murecho: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  MuseoModerno: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'My Soul': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mynerve: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mystery Quest': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  NTR: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Nabla: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'math' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'math' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nanum Brush Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nanum Gothic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    normal?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    regular?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 700 | 800 | (400 | 700 | 800)[],

  'Nanum Gothic Coding': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Nanum Myeongjo': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    normal?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    regular?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 700 | 800 | (400 | 700 | 800)[],

  'Nanum Pen Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Narnoor: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gunjala-gondi' | 'latin' | 'latin-ext' | 'math' | 'symbols' | ('gunjala-gondi' | 'latin' | 'latin-ext' | 'math' | 'symbols')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  Neonderthaw: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nerko One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Neucha: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | ('cyrillic' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Neuton: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[],

  'New Rocker': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'New Tegomin': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'News Cycle': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Newsreader: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Niconne: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Niramit: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Nixie One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Nobile: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    ital?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    italic?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    i?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  Nokora: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[],

  Norican: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Nosifer: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Notable: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nothing You Could Do': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noticia Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Noto Color Emoji': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'emoji' | ('emoji')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Emoji': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'emoji' | ('emoji')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Noto Kufi Arabic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | ('arabic')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Music': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'music' | ('latin' | 'latin-ext' | 'music')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Naskh Arabic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Nastaliq Urdu': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Rashi Hebrew': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'devanagari' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'devanagari' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Adlam': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'adlam' | 'latin' | 'latin-ext' | ('adlam' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Adlam Unjoined': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'adlam' | 'latin' | 'latin-ext' | ('adlam' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Anatolian Hieroglyphs': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'anatolian-hieroglyphs' | 'latin' | 'latin-ext' | ('anatolian-hieroglyphs' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Arabic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | ('arabic')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Armenian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'armenian' | 'latin' | 'latin-ext' | ('armenian' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Avestan': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'avestan' | 'latin' | 'latin-ext' | ('avestan' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Balinese': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'balinese' | 'latin' | 'latin-ext' | ('balinese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Bamum': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bamum' | 'latin' | 'latin-ext' | ('bamum' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Bassa Vah': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bassa-vah' | 'latin' | 'latin-ext' | ('bassa-vah' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Batak': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'batak' | 'latin' | 'latin-ext' | ('batak' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Bengali': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Bhaiksuki': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bhaiksuki' | 'latin' | 'latin-ext' | ('bhaiksuki' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Brahmi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'brahmi' | 'latin' | 'latin-ext' | ('brahmi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Buginese': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'buginese' | 'latin' | 'latin-ext' | ('buginese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Buhid': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'buhid' | 'latin' | 'latin-ext' | ('buhid' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Canadian Aboriginal': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'canadian-aboriginal' | 'latin' | 'latin-ext' | ('canadian-aboriginal' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Carian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'carian' | 'latin' | 'latin-ext' | ('carian' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Caucasian Albanian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'caucasian-albanian' | 'latin' | 'latin-ext' | ('caucasian-albanian' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Chakma': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chakma' | 'latin' | 'latin-ext' | ('chakma' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Cham': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cham' | 'latin' | 'latin-ext' | ('cham' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Cherokee': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cherokee' | 'latin' | 'latin-ext' | ('cherokee' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Chorasmian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chorasmian' | 'latin' | 'latin-ext' | ('chorasmian' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Coptic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'coptic' | 'latin' | 'latin-ext' | ('coptic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Cuneiform': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cuneiform' | 'latin' | 'latin-ext' | ('cuneiform' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Cypriot': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cypriot' | 'latin' | 'latin-ext' | ('cypriot' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Cypro Minoan': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cypro-minoan' | 'latin' | 'latin-ext' | ('cypro-minoan' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Deseret': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'deseret' | 'latin' | 'latin-ext' | ('deseret' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Devanagari': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Duployan': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'duployan' | 'latin' | 'latin-ext' | ('duployan' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Noto Sans Egyptian Hieroglyphs': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'egyptian-hieroglyphs' | 'latin' | 'latin-ext' | ('egyptian-hieroglyphs' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Elbasan': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'elbasan' | 'latin' | 'latin-ext' | ('elbasan' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Elymaic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'elymaic' | 'latin' | 'latin-ext' | ('elymaic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Ethiopic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'ethiopic' | 'latin' | 'latin-ext' | ('ethiopic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Georgian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'georgian' | 'latin' | 'latin-ext' | ('georgian' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Glagolitic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'glagolitic' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'glagolitic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Gothic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gothic' | 'latin' | 'latin-ext' | ('gothic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Grantha': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'grantha' | 'latin' | 'latin-ext' | ('grantha' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Gujarati': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols' | ('gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Gunjala Gondi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gunjala-gondi' | 'latin' | 'latin-ext' | ('gunjala-gondi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Gurmukhi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans HK': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Hanifi Rohingya': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hanifi-rohingya' | 'latin' | 'latin-ext' | ('hanifi-rohingya' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Hanunoo': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hanunoo' | 'latin' | 'latin-ext' | ('hanunoo' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Hatran': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hatran' | 'latin' | 'latin-ext' | ('hatran' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Hebrew': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Imperial Aramaic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'imperial-aramaic' | 'latin' | 'latin-ext' | ('imperial-aramaic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Indic Siyaq Numbers': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'indic-siyaq-numbers' | 'latin' | 'latin-ext' | ('indic-siyaq-numbers' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Inscriptional Pahlavi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'inscriptional-pahlavi' | 'latin' | 'latin-ext' | ('inscriptional-pahlavi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Inscriptional Parthian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'inscriptional-parthian' | 'latin' | 'latin-ext' | ('inscriptional-parthian' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans JP': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Javanese': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'javanese' | 'latin' | 'latin-ext' | ('javanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans KR': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Kaithi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kaithi' | 'latin' | 'latin-ext' | ('kaithi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Kannada': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Kawi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kawi' | 'latin' | 'latin-ext' | ('kawi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Kayah Li': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kayah-li' | 'latin' | 'latin-ext' | ('kayah-li' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Kharoshthi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kharoshthi' | 'latin' | 'latin-ext' | ('kharoshthi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Khmer': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Khojki': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khojki' | 'latin' | 'latin-ext' | ('khojki' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Khudawadi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khudawadi' | 'latin' | 'latin-ext' | ('khudawadi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Lao': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'lao' | 'latin' | 'latin-ext' | ('lao' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Lao Looped': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'lao' | 'latin' | 'latin-ext' | ('lao' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Lepcha': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lepcha' | ('latin' | 'latin-ext' | 'lepcha')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Limbu': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'limbu' | ('latin' | 'latin-ext' | 'limbu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Linear A': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'linear-a' | ('latin' | 'latin-ext' | 'linear-a')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Linear B': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'linear-b' | ('latin' | 'latin-ext' | 'linear-b')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Lisu': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lisu' | ('latin' | 'latin-ext' | 'lisu')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Lycian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'lycian' | ('lycian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Lydian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lydian' | ('latin' | 'latin-ext' | 'lydian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Mahajani': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mahajani' | ('latin' | 'latin-ext' | 'mahajani')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Malayalam': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Mandaic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mandaic' | ('latin' | 'latin-ext' | 'mandaic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Manichaean': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'manichaean' | ('latin' | 'latin-ext' | 'manichaean')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Marchen': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'marchen' | ('latin' | 'latin-ext' | 'marchen')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Masaram Gondi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'masaram-gondi' | ('latin' | 'latin-ext' | 'masaram-gondi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Math': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'math' | ('math')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Mayan Numerals': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mayan-numerals' | ('latin' | 'latin-ext' | 'mayan-numerals')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Medefaidrin': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'medefaidrin' | ('latin' | 'latin-ext' | 'medefaidrin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Meetei Mayek': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'meetei-mayek' | ('latin' | 'latin-ext' | 'meetei-mayek')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Mende Kikakui': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mende-kikakui' | ('latin' | 'latin-ext' | 'mende-kikakui')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Meroitic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'meroitic' | 'meroitic-cursive' | 'meroitic-hieroglyphs' | ('latin' | 'latin-ext' | 'meroitic' | 'meroitic-cursive' | 'meroitic-hieroglyphs')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Miao': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'miao' | ('latin' | 'latin-ext' | 'miao')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Modi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'modi' | ('latin' | 'latin-ext' | 'modi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Mongolian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mongolian' | ('latin' | 'latin-ext' | 'mongolian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Mro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mro' | ('latin' | 'latin-ext' | 'mro')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Multani': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'multani' | ('latin' | 'latin-ext' | 'multani')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Myanmar': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'myanmar' | ('myanmar')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans NKo': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nko' | ('latin' | 'latin-ext' | 'nko')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans NKo Unjoined': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nko' | ('latin' | 'latin-ext' | 'nko')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Nabataean': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nabataean' | ('latin' | 'latin-ext' | 'nabataean')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Nag Mundari': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nag-mundari' | ('latin' | 'latin-ext' | 'nag-mundari')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Nandinagari': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nandinagari' | ('latin' | 'latin-ext' | 'nandinagari')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans New Tai Lue': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'new-tai-lue' | ('latin' | 'latin-ext' | 'new-tai-lue')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Newa': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'newa' | ('latin' | 'latin-ext' | 'newa')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Nushu': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nushu' | ('latin' | 'latin-ext' | 'nushu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Ogham': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ogham' | ('latin' | 'latin-ext' | 'ogham')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Ol Chiki': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ol-chiki' | ('latin' | 'latin-ext' | 'ol-chiki')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Old Hungarian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-hungarian' | ('latin' | 'latin-ext' | 'old-hungarian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old Italic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-italic' | ('latin' | 'latin-ext' | 'old-italic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old North Arabian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-north-arabian' | ('latin' | 'latin-ext' | 'old-north-arabian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old Permic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'old-permic' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'old-permic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old Persian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-persian' | ('latin' | 'latin-ext' | 'old-persian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old Sogdian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-sogdian' | ('latin' | 'latin-ext' | 'old-sogdian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old South Arabian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-south-arabian' | ('latin' | 'latin-ext' | 'old-south-arabian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old Turkic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-turkic' | ('latin' | 'latin-ext' | 'old-turkic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Oriya': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | ('latin' | 'latin-ext' | 'oriya')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Osage': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'osage' | ('latin' | 'latin-ext' | 'osage')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Osmanya': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'osmanya' | ('latin' | 'latin-ext' | 'osmanya')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Pahawh Hmong': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'pahawh-hmong' | ('latin' | 'latin-ext' | 'pahawh-hmong')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Palmyrene': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'palmyrene' | ('latin' | 'latin-ext' | 'palmyrene')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Pau Cin Hau': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'pau-cin-hau' | ('latin' | 'latin-ext' | 'pau-cin-hau')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Phags Pa': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'phags-pa' | ('phags-pa')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Phoenician': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'phoenician' | ('latin' | 'latin-ext' | 'phoenician')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Psalter Pahlavi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'psalter-pahlavi' | ('latin' | 'latin-ext' | 'psalter-pahlavi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Rejang': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'rejang' | ('latin' | 'latin-ext' | 'rejang')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Runic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'runic' | ('latin' | 'latin-ext' | 'runic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-simplified' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Samaritan': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'samaritan' | ('latin' | 'latin-ext' | 'samaritan')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Saurashtra': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'saurashtra' | ('latin' | 'latin-ext' | 'saurashtra')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Sharada': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sharada' | ('latin' | 'latin-ext' | 'sharada')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Shavian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'shavian' | ('latin' | 'latin-ext' | 'shavian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Siddham': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'siddham' | ('latin' | 'latin-ext' | 'siddham')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans SignWriting': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'signwriting' | ('latin' | 'latin-ext' | 'signwriting')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Sinhala': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Sogdian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sogdian' | ('latin' | 'latin-ext' | 'sogdian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Sora Sompeng': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sora-sompeng' | ('latin' | 'latin-ext' | 'sora-sompeng')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Soyombo': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'soyombo' | ('latin' | 'latin-ext' | 'soyombo')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Sundanese': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sundanese' | ('latin' | 'latin-ext' | 'sundanese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Syloti Nagri': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'syloti-nagri' | ('latin' | 'latin-ext' | 'syloti-nagri')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Symbols': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'symbols' | ('latin' | 'latin-ext' | 'symbols')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Symbols 2': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'braille' | 'latin' | 'latin-ext' | 'math' | 'mayan-numerals' | 'symbols' | ('braille' | 'latin' | 'latin-ext' | 'math' | 'mayan-numerals' | 'symbols')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Syriac': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'syriac' | ('latin' | 'latin-ext' | 'syriac')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Syriac Eastern': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'syriac' | ('latin' | 'latin-ext' | 'syriac')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans TC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-traditional' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-traditional' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Tagalog': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tagalog' | ('latin' | 'latin-ext' | 'tagalog')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tagbanwa': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tagbanwa' | ('latin' | 'latin-ext' | 'tagbanwa')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tai Le': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-le' | ('latin' | 'latin-ext' | 'tai-le')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tai Tham': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-tham' | ('latin' | 'latin-ext' | 'tai-tham')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Tai Viet': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-viet' | ('latin' | 'latin-ext' | 'tai-viet')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Takri': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'takri' | ('latin' | 'latin-ext' | 'takri')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tamil': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Tamil Supplement': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil-supplement' | ('latin' | 'latin-ext' | 'tamil-supplement')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tangsa': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tangsa' | ('latin' | 'latin-ext' | 'tangsa')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Telugu': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Thaana': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thaana' | ('latin' | 'latin-ext' | 'thaana')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Thai': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | ('latin' | 'latin-ext' | 'thai')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Thai Looped': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | ('latin' | 'latin-ext' | 'thai')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Tifinagh': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tifinagh' | ('latin' | 'latin-ext' | 'tifinagh')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tirhuta': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tirhuta' | ('latin' | 'latin-ext' | 'tirhuta')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Ugaritic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ugaritic' | ('latin' | 'latin-ext' | 'ugaritic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Vai': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vai' | ('latin' | 'latin-ext' | 'vai')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Vithkuqi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vithkuqi' | ('latin' | 'latin-ext' | 'vithkuqi')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Wancho': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'wancho' | ('latin' | 'latin-ext' | 'wancho')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Warang Citi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'warang-citi' | ('latin' | 'latin-ext' | 'warang-citi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Yi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'yi' | ('latin' | 'latin-ext' | 'yi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Zanabazar Square': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'zanabazar-square' | ('latin' | 'latin-ext' | 'zanabazar-square')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Ahom': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'ahom' | 'latin' | 'latin-ext' | ('ahom' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Armenian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'armenian' | 'latin' | 'latin-ext' | ('armenian' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Balinese': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'balinese' | 'latin' | 'latin-ext' | ('balinese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Bengali': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Devanagari': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Dogra': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'dogra' | 'latin' | 'latin-ext' | ('dogra' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Ethiopic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'ethiopic' | 'latin' | 'latin-ext' | ('ethiopic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Georgian': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'georgian' | 'latin' | 'latin-ext' | ('georgian' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Grantha': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'grantha' | 'latin' | 'latin-ext' | ('grantha' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Gujarati': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols' | ('gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Gurmukhi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif HK': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Hebrew': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif JP': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[],

  'Noto Serif KR': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[],

  'Noto Serif Kannada': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Khitan Small Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khitan-small-script' | 'latin' | 'latin-ext' | ('khitan-small-script' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Khmer': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Khojki': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khojki' | 'latin' | 'latin-ext' | ('khojki' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Serif Lao': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'lao' | 'latin' | 'latin-ext' | ('lao' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Makasar': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'makasar' | ('latin' | 'latin-ext' | 'makasar')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Malayalam': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Myanmar': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'myanmar' | ('myanmar')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif NP Hmong': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'nyiakeng-puachue-hmong' | ('latin' | 'nyiakeng-puachue-hmong')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Serif Old Uyghur': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-uyghur' | ('latin' | 'latin-ext' | 'old-uyghur')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Oriya': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | ('latin' | 'latin-ext' | 'oriya')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Serif Ottoman Siyaq': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ottoman-siyaq-numbers' | ('latin' | 'latin-ext' | 'ottoman-siyaq-numbers')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[],

  'Noto Serif Sinhala': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif TC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-traditional' | 'latin' | ('chinese-traditional' | 'latin')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[],

  'Noto Serif Tamil': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Tangut': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tangut' | ('latin' | 'latin-ext' | 'tangut')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Telugu': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Thai': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | ('latin' | 'latin-ext' | 'thai')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Tibetan': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tibetan' | ('latin' | 'latin-ext' | 'tibetan')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Toto': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'toto' | ('latin' | 'latin-ext' | 'toto')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Serif Vithkuqi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vithkuqi' | ('latin' | 'latin-ext' | 'vithkuqi')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Serif Yezidi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'yezidi' | ('latin' | 'latin-ext' | 'yezidi')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Traditional Nushu': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nushu' | ('latin' | 'latin-ext' | 'nushu')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Nova Cut': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Flat': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | ('greek' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Oval': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Round': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Slim': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Square': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Numans: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Nunito: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Nunito Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Nuosu SIL': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'yi' | ('latin' | 'latin-ext' | 'yi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Odibee Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Odor Mean Chey': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Offside: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Oi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'tamil' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'tamil' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Old Standard TT': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Oldenburg: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ole: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Oleo Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Oleo Script Swash Caps': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Onest: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Oooh Baby': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Open Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[],

  Oranienbaum: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Orbit: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Orbitron: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Oregano: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Orelega One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Orienta: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Original Surfer': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Oswald: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  Outfit: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Over the Rainbow': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Overlock: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    normal?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    regular?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    ital?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    italic?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    i?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 700 | 900 | (400 | 700 | 900)[],

  'Overlock SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Overpass: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Overpass Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Ovo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Oxanium: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Oxygen: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Oxygen Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'PT Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'PT Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'PT Sans Caption': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'PT Sans Narrow': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'PT Serif': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'PT Serif Caption': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Pacifico: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Padauk: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'myanmar' | ('latin' | 'latin-ext' | 'myanmar')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Padyakke Expanded One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Palanquin: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'Palanquin Dark': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Palette Mosaic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Pangolin: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Paprika: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Parisienne: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Passero One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Passion One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    normal?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    regular?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 700 | 900 | (400 | 700 | 900)[],

  'Passions Conflict': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pathway Extreme': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Pathway Gothic One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Patrick Hand': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Patrick Hand SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Pattaya: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Patua One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Pavanam: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Paytone One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Peddana: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Peralta: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Permanent Marker': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Petemoss: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Petit Formal Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Petrona: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Philosopher: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Phudu: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Piazzolla: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Piedra: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pinyon Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pirata One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pixelify Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Plaster: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Play: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Playball: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Playfair: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Playfair Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  'Playfair Display SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    normal?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    regular?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    ital?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    italic?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    i?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 700 | 900 | (400 | 700 | 900)[],

  'Playpen Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese' | ('latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Plus Jakarta Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Podkova: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Poiret One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Poller One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Poltawski Nowy': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Poly: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Pompiere: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pontano Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Poor Story': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Poppins: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Port Lligat Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Port Lligat Slab': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Potta One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pragati Narrow': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Praise: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Prata: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Preahvihear: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Press Start 2P': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Pridi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Princess Sofia': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Prociono: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Prompt: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Prosto One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Proza Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Public Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Puppies Play': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Puritan: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Purple Purse': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Qahiri: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Quando: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Quantico: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Quattrocento: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Quattrocento Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Questrial: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Quicksand: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Quintessential: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Qwigley: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Qwitcher Grypen': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  REM: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Racing Sans One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Radio Canada': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'canadian-aboriginal' | 'latin' | 'latin-ext' | 'vietnamese' | ('canadian-aboriginal' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Radley: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Rajdhani: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Rakkas: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Raleway: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Raleway Dots': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ramabhadra: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ramaraja: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Rambla: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Rammetto One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rampart One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ranchers: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Rancho: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ranga: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Rasa: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'vietnamese' | ('gujarati' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Rationale: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ravi Prakash': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Readex Pro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  Recursive: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Red Hat Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Red Hat Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Red Hat Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Red Rose': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Redacted: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Redacted Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Redressed: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Reem Kufi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Reem Kufi Fun': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Reem Kufi Ink': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Reenie Beanie': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Reggae One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Revalia: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rhodium Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ribeye: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ribeye Marrow': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Righteous: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Risque: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Road Rage': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Roboto: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    ital?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    italic?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    i?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[],

  'Roboto Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Roboto Flex': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Roboto Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'Roboto Serif': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Roboto Slab': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Rochester: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rock 3D': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rock Salt': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'RocknRoll One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Rokkitt: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Romanesco: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ropa Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Rosario: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Rosarivo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Rouge Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Rowdies: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Rozha One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Rubik: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('arabic' | 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Rubik 80s Fade': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Beastly': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Bubbles': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Burned': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Dirt': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Distressed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Gemstones': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Glitch': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Iso': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Marker Hatch': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Maze': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Microbe': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Mono One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Moonrocks': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Pixels': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Puddles': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Spray Paint': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Storm': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Vinyl': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Wet Paint': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ruda: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Rufina: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Ruge Boogie': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ruluko: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rum Raisin': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ruslan Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Russo One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ruthie: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ruwudu: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Rye: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'STIX Two Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Sacramento: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sahitya: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | ('devanagari' | 'latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Sail: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Saira: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Saira Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Saira Extra Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Saira Semi Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Saira Stencil One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Salsa: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sanchez: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Sancreek: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sansita: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 700 | 800 | 900 | (400 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 700 | 800 | 900 | (400 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 700 | 800 | 900 | (400 | 700 | 800 | 900)[]
    ital?: string | true | 400 | 700 | 800 | 900 | (400 | 700 | 800 | 900)[]
    italic?: string | true | 400 | 700 | 800 | 900 | (400 | 700 | 800 | 900)[]
    i?: string | true | 400 | 700 | 800 | 900 | (400 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 700 | 800 | 900 | (400 | 700 | 800 | 900)[],

  'Sansita Swashed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Sarabun: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Sarala: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Sarina: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sarpanch: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  'Sassy Frass': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Satisfy: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sawarabi Gothic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sawarabi Mincho': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Scada: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Scheherazade New': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Schibsted Grotesk': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Schoolbell: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Scope One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Seaweed Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Secular One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sedgwick Ave': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sedgwick Ave Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sen: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Send Flowers': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sevillana: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Seymour One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shadows Into Light': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shadows Into Light Two': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Shalimar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shantell Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | (300 | 400 | 500 | 600 | 700 | 800)[],

  Shanti: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Share: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Share Tech': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Share Tech Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shippori Antique': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shippori Antique B1': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shippori Mincho': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Shippori Mincho B1': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  Shizuru: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Shojumaru: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Short Stack': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Shrikhand: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Siemreap: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sigmar: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sigmar One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Signika: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Signika Negative': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Silkscreen: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Simonetta: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 900 | (400 | 900)[]
    normal?: true | 400 | 900 | (400 | 900)[]
    regular?: true | 400 | 900 | (400 | 900)[]
    ital?: true | 400 | 900 | (400 | 900)[]
    italic?: true | 400 | 900 | (400 | 900)[]
    i?: true | 400 | 900 | (400 | 900)[]
    text?: string
  } | true | 400 | 900 | (400 | 900)[],

  'Single Day': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | ('korean')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sintony: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Sirin Stencil': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Six Caps': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Skranji: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Slabo 13px': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Slabo 27px': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Slackey: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Slackside One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Smokum: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Smooch: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Smooch Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Smythe: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sniglet: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 800 | (400 | 800)[]
    normal?: true | 400 | 800 | (400 | 800)[]
    regular?: true | 400 | 800 | (400 | 800)[]
    text?: string
  } | true | 400 | 800 | (400 | 800)[],

  Snippet: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Snowburst One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sofadi One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sofia: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sofia Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Sofia Sans Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Sofia Sans Extra Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Sofia Sans Semi Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Solitreo: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Solway: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 300 | 400 | 500 | 700 | 800 | (300 | 400 | 500 | 700 | 800)[]
    normal?: string | true | 300 | 400 | 500 | 700 | 800 | (300 | 400 | 500 | 700 | 800)[]
    regular?: string | true | 300 | 400 | 500 | 700 | 800 | (300 | 400 | 500 | 700 | 800)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 700 | 800 | (300 | 400 | 500 | 700 | 800)[],

  'Sometype Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    ital?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    italic?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    i?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Song Myung': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sono: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Sonsie One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sora: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Sorts Mill Goudy': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Source Code Pro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Source Sans 3': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Source Serif 4': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Space Grotesk': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Space Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Special Elite': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Spectral: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Spectral SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Spicy Rice': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Spinnaker: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Spirax: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Splash: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Spline Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Spline Sans Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Squada One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Square Peg': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sree Krushnadevaraya': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sriracha: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Srisakdi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Staatliches: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Stalemate: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Stalinist One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Stardos Stencil': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Stick: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Stick No Bills': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Stint Ultra Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Stint Ultra Expanded': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Stoke: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 300 | 400 | (300 | 400)[]
    normal?: true | 300 | 400 | (300 | 400)[]
    regular?: true | 300 | 400 | (300 | 400)[]
    text?: string
  } | true | 300 | 400 | (300 | 400)[],

  Strait: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Style Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Stylish: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sue Ellen Francisco': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Suez One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sulphur Point': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Sumana: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Sunflower: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | 300 | 500 | 700 | (300 | 500 | 700)[]
    normal?: string | 300 | 500 | 700 | (300 | 500 | 700)[]
    regular?: string | 300 | 500 | 700 | (300 | 500 | 700)[]
    text?: string
  } | string | 300 | 500 | 700 | (300 | 500 | 700)[],

  Sunshiney: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Supermercado One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sura: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Suranna: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Suravaram: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Suwannaphum: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[],

  'Swanky and Moo Moo': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Syncopate: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Syne: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | 'latin-ext' | ('greek' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Syne Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Syne Tactile': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tai Heritage Pro': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-viet' | 'vietnamese' | ('latin' | 'latin-ext' | 'tai-viet' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Tajawal: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 700 | 800 | 900)[],

  Tangerine: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Tapestry: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Taprom: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Tauri: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Taviraj: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Teko: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Tektur: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Telex: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tenali Ramakrishna': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tenor Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Text Me One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Texturina: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Thasadith: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'The Girl Next Door': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'The Nautigal': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Tienne: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    normal?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    regular?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 700 | 900 | (400 | 700 | 900)[],

  Tillana: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Tilt Neon': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tilt Prism': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tilt Warp': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Timmana: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Tinos: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Tiro Bangla': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Tiro Devanagari Hindi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Tiro Devanagari Marathi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Tiro Devanagari Sanskrit': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Tiro Gurmukhi': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Tiro Kannada': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Tiro Tamil': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Tiro Telugu': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Titan One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Titillium Web': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 600 | 700 | 900 | (200 | 300 | 400 | 600 | 700 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 600 | 700 | 900 | (200 | 300 | 400 | 600 | 700 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 600 | 700 | 900 | (200 | 300 | 400 | 600 | 700 | 900)[]
    ital?: string | true | 200 | 300 | 400 | 600 | 700 | (200 | 300 | 400 | 600 | 700)[]
    italic?: string | true | 200 | 300 | 400 | 600 | 700 | (200 | 300 | 400 | 600 | 700)[]
    i?: string | true | 200 | 300 | 400 | 600 | 700 | (200 | 300 | 400 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 600 | 700 | 900 | (200 | 300 | 400 | 600 | 700 | 900)[],

  Tomorrow: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Tourney: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Trade Winds': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Train One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Trirong: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Trispace: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Trocchi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Trochut: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Truculenta: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Trykker: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tsukimi Rounded': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Tulpen One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Turret Road': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | (200 | 300 | 400 | 500 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | (200 | 300 | 400 | 500 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | (200 | 300 | 400 | 500 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 700 | 800 | (200 | 300 | 400 | 500 | 700 | 800)[],

  'Twinkle Star': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ubuntu: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    i?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[],

  'Ubuntu Condensed': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ubuntu Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Uchen: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'tibetan' | ('latin' | 'tibetan')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ultra: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Unbounded: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Uncial Antiqua': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Underdog: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Unica One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  UnifrakturCook: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: 700
    normal?: 700
    regular?: 700
    text?: string
  },

  UnifrakturMaguntia: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Unkempt: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Unlock: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Unna: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Updock: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Urbanist: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  VT323: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Vampiro One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Varela: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Varela Round': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Varta: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Vast Shadow': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Vazirmatn: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Vesper Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | 900 | (400 | 500 | 700 | 900)[]
    normal?: string | true | 400 | 500 | 700 | 900 | (400 | 500 | 700 | 900)[]
    regular?: string | true | 400 | 500 | 700 | 900 | (400 | 500 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 700 | 900 | (400 | 500 | 700 | 900)[],

  'Viaoda Libre': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Vibes: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Vibur: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Victor Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  Vidaloka: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Viga: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Vina Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Voces: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Volkhov: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    ital?: true | 400 | 700 | (400 | 700)[]
    italic?: true | 400 | 700 | (400 | 700)[]
    i?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Vollkorn: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  'Vollkorn SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 600 | 700 | 900 | (400 | 600 | 700 | 900)[]
    normal?: string | true | 400 | 600 | 700 | 900 | (400 | 600 | 700 | 900)[]
    regular?: string | true | 400 | 600 | 700 | 900 | (400 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 600 | 700 | 900 | (400 | 600 | 700 | 900)[],

  Voltaire: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Vujahday Script': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Waiting for the Sunrise': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Wallpoet: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Walter Turncoat': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Warnes: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Water Brush': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Waterfall: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Wavefont: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Wellfleet: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Wendy One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Whisper: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  WindSong: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 500 | (400 | 500)[]
    normal?: true | 400 | 500 | (400 | 500)[]
    regular?: true | 400 | 500 | (400 | 500)[]
    text?: string
  } | true | 400 | 500 | (400 | 500)[],

  'Wire One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Wix Madefor Display': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Wix Madefor Text': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    ital?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    italic?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    i?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Work Sans': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Xanh Mono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  Yaldevi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Yanone Kaffeesatz': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  Yantramanav: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[],

  'Yatra One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Yellowtail: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yeon Sung': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yeseva One': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Yesteryear: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Yomogi: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Young Serif': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Yrsa: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Ysabeau: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Ysabeau Infant': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Ysabeau Office': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    ital?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    italic?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    i?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Ysabeau SC': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Yuji Boku': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yuji Hentaigana Akari': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yuji Hentaigana Akebono': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yuji Mai': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yuji Syuku': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yusei Magic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'ZCOOL KuaiLe': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'ZCOOL QingKe HuangYou': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'ZCOOL XiaoWei': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zen Antique': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zen Antique Soft': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zen Dots': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zen Kaku Gothic Antique': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[],

  'Zen Kaku Gothic New': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[],

  'Zen Kurenaido': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zen Loop': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  } | true | 400,

  'Zen Maru Gothic': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[],

  'Zen Old Mincho': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 900 | (400 | 500 | 600 | 700 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 900 | (400 | 500 | 600 | 700 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 900 | (400 | 500 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 900 | (400 | 500 | 600 | 700 | 900)[],

  'Zen Tokyo Zoo': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Zeyada: {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zhi Mang Xing': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zilla Slab': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    ital?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    italic?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    i?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Zilla Slab Highlight': {
    [key: string]: undefined | (string | number) | (string | number)[] | FontStyle
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],
}
