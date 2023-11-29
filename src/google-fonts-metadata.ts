export type GoogleFontsDisplay = 'auto' | 'block' | 'swap' | 'fallback' | 'optional'

export type GoogleFontsSubset = 'latin' | 'latin-ext' | 'adlam' | 'vietnamese' | 'sinhala' | 'ethiopic' | 'cyrillic' | 'cyrillic-ext' | 'greek' | 'tifinagh' | 'kannada' | 'telugu' | 'devanagari' | 'hebrew' | 'greek-ext' | 'arabic' | 'bengali' | 'oriya' | 'gujarati' | 'gurmukhi' | 'malayalam' | 'tamil' | 'khmer' | 'thai' | 'japanese' | 'korean' | 'math' | 'symbols' | 'new-tai-lue' | 'cherokee' | 'armenian' | 'tibetan' | 'kayah-li' | 'lisu' | 'chinese-simplified' | 'lepcha' | 'gunjala-gondi' | 'emoji' | 'music' | 'anatolian-hieroglyphs' | 'avestan' | 'balinese' | 'bamum' | 'bassa-vah' | 'batak' | 'bhaiksuki' | 'brahmi' | 'buginese' | 'buhid' | 'canadian-aboriginal' | 'carian' | 'caucasian-albanian' | 'chakma' | 'cham' | 'chorasmian' | 'coptic' | 'cuneiform' | 'cypriot' | 'cypro-minoan' | 'deseret' | 'duployan' | 'egyptian-hieroglyphs' | 'elbasan' | 'elymaic' | 'georgian' | 'glagolitic' | 'gothic' | 'grantha' | 'chinese-hongkong' | 'hanifi-rohingya' | 'hanunoo' | 'hatran' | 'imperial-aramaic' | 'indic-siyaq-numbers' | 'inscriptional-pahlavi' | 'inscriptional-parthian' | 'javanese' | 'kaithi' | 'kawi' | 'kharoshthi' | 'khojki' | 'khudawadi' | 'lao' | 'limbu' | 'linear-a' | 'linear-b' | 'lycian' | 'lydian' | 'mahajani' | 'mandaic' | 'manichaean' | 'marchen' | 'masaram-gondi' | 'mayan-numerals' | 'medefaidrin' | 'meetei-mayek' | 'mende-kikakui' | 'meroitic' | 'meroitic-cursive' | 'meroitic-hieroglyphs' | 'miao' | 'modi' | 'mongolian' | 'mro' | 'multani' | 'myanmar' | 'nko' | 'nabataean' | 'nag-mundari' | 'nandinagari' | 'newa' | 'nushu' | 'ogham' | 'ol-chiki' | 'old-hungarian' | 'old-italic' | 'old-north-arabian' | 'old-permic' | 'old-persian' | 'old-sogdian' | 'old-south-arabian' | 'old-turkic' | 'osage' | 'osmanya' | 'pahawh-hmong' | 'palmyrene' | 'pau-cin-hau' | 'phags-pa' | 'phoenician' | 'psalter-pahlavi' | 'rejang' | 'runic' | 'samaritan' | 'saurashtra' | 'sharada' | 'shavian' | 'siddham' | 'signwriting' | 'sogdian' | 'sora-sompeng' | 'soyombo' | 'sundanese' | 'syloti-nagri' | 'braille' | 'syriac' | 'chinese-traditional' | 'tagalog' | 'tagbanwa' | 'tai-le' | 'tai-tham' | 'tai-viet' | 'takri' | 'tamil-supplement' | 'tangsa' | 'thaana' | 'tirhuta' | 'ugaritic' | 'vai' | 'vithkuqi' | 'wancho' | 'warang-citi' | 'yi' | 'zanabazar-square' | 'ahom' | 'dogra' | 'khitan-small-script' | 'makasar' | 'nyiakeng-puachue-hmong' | 'old-uyghur' | 'ottoman-siyaq-numbers' | 'tangut' | 'toto' | 'yezidi'

export type GoogleFontsWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type GoogleFontsMetadata = {
  ABeeZee: {
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
    display?: GoogleFontsDisplay
    subsets?: 'adlam' | 'latin' | 'latin-ext' | ('adlam' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'AR One Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Abel: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Abhaya Libre': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  Aboreto: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Abril Fatface': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Abyssinica SIL': {
    display?: GoogleFontsDisplay
    subsets?: 'ethiopic' | 'latin' | 'latin-ext' | ('ethiopic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Aclonica: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Acme: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Actor: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Adamina: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Advent Pro': {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Agdasima: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Aguafina Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Akatab: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tifinagh' | ('latin' | 'latin-ext' | 'tifinagh')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  'Akaya Kanadaka': {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Akaya Telivigala': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Akronim: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Akshar: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Aladin: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alata: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alatsi: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Albert Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alef: {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | ('hebrew' | 'latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Alegreya: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alexandria: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Alfa Slab One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alice: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alike: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Alike Angular': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alkalami: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Alkatra: {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'devanagari' | 'latin' | 'latin-ext' | 'oriya' | ('bengali' | 'devanagari' | 'latin' | 'latin-ext' | 'oriya')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Allan: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Allerta: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Allerta Stencil': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Allison: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Allura: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Almarai: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | ('arabic')[]
    wght?: string | true | 300 | 400 | 700 | 800 | (300 | 400 | 700 | 800)[]
    normal?: string | true | 300 | 400 | 700 | 800 | (300 | 400 | 700 | 800)[]
    regular?: string | true | 300 | 400 | 700 | 800 | (300 | 400 | 700 | 800)[]
    text?: string
  } | string | true | 300 | 400 | 700 | 800 | (300 | 400 | 700 | 800)[],

  Almendra: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Almendra SC': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Alumni Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Amaranth: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Amethysta: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Amiko: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    normal?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    regular?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 600 | 700 | (400 | 600 | 700)[],

  Amiri: {
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
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Amita: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Anaheim: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Andada Pro': {
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
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Devanagari': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Gujarati': {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Gurmukhi': {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Kannada': {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Latin': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Malayalam': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Odia': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | ('latin' | 'latin-ext' | 'oriya')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Tamil': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Anek Telugu': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Angkor: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Annie Use Your Telescope': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Anonymous Pro': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Antic Didone': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Antic Slab': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Anton: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Antonio: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  Anuphan: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  Anybody: {
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
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Arapey: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Arbutus Slab': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Architects Daughter': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Archivo: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Archivo Narrow': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Aref Ruqaa': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Aref Ruqaa Ink': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Arima: {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'malayalam' | 'tamil' | 'vietnamese' | ('greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'malayalam' | 'tamil' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  Arimo: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Armata: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Arsenal: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Arvo: {
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
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Asap: {
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
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Asset: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Assistant: {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Astloch: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Asul: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Athiti: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Atkinson Hyperlegible': {
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
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Atomic Age': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Aubrey: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Audiowide: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Autour One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Average: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Average Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Averia Gruesa Libre': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Averia Libre': {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'BIZ UDMincho': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'BIZ UDPGothic': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'BIZ UDPMincho': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Babylonica: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bacasime Antique': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bad Script': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | ('cyrillic' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bagel Fat One': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bahiana: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bahianita: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bai Jamjuree': {
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
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ballet: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Baloo 2': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | 'vietnamese' | ('devanagari' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Bhai 2': {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'vietnamese' | ('gujarati' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Bhaijaan 2': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Bhaina 2': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | 'vietnamese' | ('latin' | 'latin-ext' | 'oriya' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Chettan 2': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | 'vietnamese' | ('latin' | 'latin-ext' | 'malayalam' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Da 2': {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | 'vietnamese' | ('bengali' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Paaji 2': {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese' | ('gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Tamma 2': {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | 'vietnamese' | ('kannada' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Tammudu 2': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | 'vietnamese' | ('latin' | 'latin-ext' | 'telugu' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Baloo Thambi 2': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | 'vietnamese' | ('latin' | 'latin-ext' | 'tamil' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Balsamiq Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bangers: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Barlow: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Barrio: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Basic: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Baskervville: {
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
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[],

  Baumans: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bayon: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Be Vietnam Pro': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bebas Neue': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Belanosima: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    normal?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    regular?: string | true | 400 | 600 | 700 | (400 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 600 | 700 | (400 | 600 | 700)[],

  Belgrano: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bellefair: {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Belleza: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bellota: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Benne: {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bentham: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Berkshire Swash': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Besley: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bevan: {
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
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Big Shoulders Display': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Big Shoulders Inline Display': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Big Shoulders Inline Text': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Big Shoulders Stencil Display': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Big Shoulders Stencil Text': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Big Shoulders Text': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Bigelow Rules': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bigshot One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Bilbo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bilbo Swash Caps': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  BioRhyme: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'BioRhyme Expanded': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 700 | 800 | (200 | 300 | 400 | 700 | 800)[],

  Birthstone: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Birthstone Bounce': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 500 | (400 | 500)[]
    normal?: true | 400 | 500 | (400 | 500)[]
    regular?: true | 400 | 500 | (400 | 500)[]
    text?: string
  } | true | 400 | 500 | (400 | 500)[],

  Biryani: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[],

  Bitter: {
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
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Black Han Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Black Ops One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Blaka: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Blaka Hollow': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Blaka Ink': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Blinker: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 600 | 700 | 800 | 900)[],

  'Bodoni Moda': {
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
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bona Nova': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bonheur Royale': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Boogaloo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Borel: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese' | ('latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bowlby One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bowlby One SC': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Braah One': {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese' | ('gurmukhi' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Brawler: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Bree Serif': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bricolage Grotesque': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Bruno Ace': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bruno Ace SC': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Brygada 1918': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bubbler One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Buda: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: 300
    normal?: 300
    regular?: 300
    text?: string
  },

  Buenard: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Bungee: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bungee Hairline': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bungee Inline': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bungee Outline': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bungee Shade': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Bungee Spice': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Butcherman: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Butterfly Kids': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cabin: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Cabin Sketch': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Caesar Dressing': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cagliostro: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cairo: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Cairo Play': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Caladea: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Calligraffitti: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cambay: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Candal: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cantarell: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cantora One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Caprasimo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Capriola: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Caramel: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Carattere: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cardo: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Carrois Gothic': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Carrois Gothic SC': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Carter One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Castoro: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Catamaran: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Caudex: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Caveat Brush': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cedarville Cursive': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ceviche One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Chakra Petch': {
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
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Changa One': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Charis SIL': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Charmonman: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Chathura: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 800 | (100 | 300 | 400 | 700 | 800)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 800 | (100 | 300 | 400 | 700 | 800)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 800 | (100 | 300 | 400 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 800 | (100 | 300 | 400 | 700 | 800)[],

  'Chau Philomene One': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Chelsea Market': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Chenla: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cherish: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cherry Bomb One': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cherry Cream Soda': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cherry Swash': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Chewy: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Chicle: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Chilanka: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Chivo: {
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
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Chonburi: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cinzel: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  'Cinzel Decorative': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    normal?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    regular?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 700 | 900 | (400 | 700 | 900)[],

  'Clicker Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Climate Crisis': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Coda: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 800 | (400 | 800)[]
    normal?: true | 400 | 800 | (400 | 800)[]
    regular?: true | 400 | 800 | (400 | 800)[]
    text?: string
  } | true | 400 | 800 | (400 | 800)[],

  Codystar: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 300 | 400 | (300 | 400)[]
    normal?: true | 300 | 400 | (300 | 400)[]
    regular?: true | 300 | 400 | (300 | 400)[]
    text?: string
  } | true | 300 | 400 | (300 | 400)[],

  Coiny: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | 'vietnamese' | ('latin' | 'latin-ext' | 'tamil' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Combo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Comfortaa: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Comforter: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Comforter Brush': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Comic Neue': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Comme: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Commissioner: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Concert One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Condiment: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Content: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Contrail One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Convergence: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cookie: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Copse: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Corben: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Corinthia: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Cormorant: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Cormorant Unicase': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Cormorant Upright': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Courgette: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Courier Prime': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 900 | (400 | 900)[]
    normal?: true | 400 | 900 | (400 | 900)[]
    regular?: true | 400 | 900 | (400 | 900)[]
    text?: string
  } | true | 400 | 900 | (400 | 900)[],

  'Covered By Your Grace': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Crafty Girls': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Creepster: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Crete Round': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Crushed: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cuprum: {
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
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Cutive: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Cutive Mono': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'DM Mono': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Dancing Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Dangrek: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Darker Grotesque': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Darumadrop One': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'David Libre': {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  'Dawning of a New Day': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Days One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dekko: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Dela Gothic One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Delicious Handrawn': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Delius: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Delius Swash Caps': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Delius Unicase': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Della Respira': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Denk One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Devonshire: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dhurjati: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Didact Gothic': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Diphylleia: {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Diplomata: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Diplomata SC': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Do Hyeon': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dokdo: {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Domine: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Donegal One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dongle: {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Doppio One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dorsa: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Dosis: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  DotGothic16: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Dr Sugiyama': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Duru Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  DynaPuff: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Dynalight: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'EB Garamond': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'East Sea Dokdo': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Eater: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Economica: {
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
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('devanagari' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Edu NSW ACT Foundation': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Edu QLD Beginner': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Edu SA Beginner': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Edu TAS Beginner': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Edu VIC WA NT Beginner': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'El Messiri': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'cyrillic' | 'latin' | 'latin-ext' | ('arabic' | 'cyrillic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Electrolize: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Elsie: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 900 | (400 | 900)[]
    normal?: true | 400 | 900 | (400 | 900)[]
    regular?: true | 400 | 900 | (400 | 900)[]
    text?: string
  } | true | 400 | 900 | (400 | 900)[],

  'Elsie Swash Caps': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 900 | (400 | 900)[]
    normal?: true | 400 | 900 | (400 | 900)[]
    regular?: true | 400 | 900 | (400 | 900)[]
    text?: string
  } | true | 400 | 900 | (400 | 900)[],

  'Emblema One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Emilys Candy': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Encode Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Encode Sans Condensed': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Encode Sans Expanded': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Encode Sans SC': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Encode Sans Semi Condensed': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Encode Sans Semi Expanded': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Engagement: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Englebert: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Enriqueta: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Ephesis: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Epilogue: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Esteban: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Estonia: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Euphoria Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ewert: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Exo: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cherokee' | 'latin' | 'latin-ext' | 'vietnamese' | ('cherokee' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fahkwang: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 700 | (300 | 400 | 500 | 700)[],

  Farsan: {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'vietnamese' | ('gujarati' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fascinate: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fascinate Inline': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Faster One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fasthand: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fauna One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Faustina: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Federo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Felipa: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fenix: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Festive: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Figtree: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Finlandica: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Fira Mono': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  'Fira Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fjord One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Flamenco: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 300 | 400 | (300 | 400)[]
    normal?: true | 300 | 400 | (300 | 400)[]
    regular?: true | 300 | 400 | (300 | 400)[]
    text?: string
  } | true | 300 | 400 | (300 | 400)[],

  Flavors: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fleur De Leah': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Flow Block': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Flow Circular': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Flow Rounded': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Foldit: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Fondamento: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Forum: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fragment Mono': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Frank Ruhl Libre': {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Fraunces: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fredericka the Great': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fredoka: {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Freehand: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fresca: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Frijole: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fruktur: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Fuggles: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Fuzzy Bubbles': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'GFS Didot': {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | ('greek')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'GFS Neohellenic': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Gabriela: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gaegu: {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Gafata: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gajraj One': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Galada: {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | ('bengali' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Galdeano: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Galindo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gamja Flower': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gantari: {
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
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gayathri: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'malayalam' | ('latin' | 'malayalam')[]
    wght?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    normal?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    regular?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    text?: string
  } | string | true | 100 | 400 | 700 | (100 | 400 | 700)[],

  Gelasio: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Genos: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Georama: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Geostar Fill': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Germania One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gideon Roman': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gidugu: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gilda Display': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Girassol: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Give You Glory': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Glass Antiqua': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Glegoo: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Gloock: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gloria Hallelujah': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Glory: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Goblin One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gochi Hand': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Goldman: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Golos Text': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Gorditas: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Gothic A1': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Gotu: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | 'vietnamese' | ('devanagari' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Goudy Bookletter 1911': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gowun Batang': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Gowun Dodum': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Graduate: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Grand Hotel': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Grandiflora One': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Grandstander: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Gravitas One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Great Vibes': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Grechen Fuemen': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Grenze: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Grey Qo': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Griffy: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gruppo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gudea: {
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
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gulzar: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gupter: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  Gurajada: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Gwendolyn: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Habibi: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hachi Maru Pop': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Hahmlet: {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Halant: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Hammersmith One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Hanalei: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hanalei Fill': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Handjet: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'armenian' | 'cyrillic' | 'cyrillic-ext' | 'greek' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'armenian' | 'cyrillic' | 'cyrillic-ext' | 'greek' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Handlee: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hanken Grotesk': {
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
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[],

  'Happy Monkey': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Harmattan: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Headland One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hedvig Letters Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | ('latin' | 'latin-ext' | 'math' | 'symbols')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hedvig Letters Serif': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | ('latin' | 'latin-ext' | 'math' | 'symbols')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Heebo: {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | ('hebrew' | 'latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Henny Penny': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hepta Slab': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Herr Von Muellerhoff': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hi Melody': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Hina Mincho': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Hind: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Hind Guntur': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Hind Madurai': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Hind Siliguri': {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Hind Vadodara': {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Holtwood One SC': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Homemade Apple': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Homenaje: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Hubballi: {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Hurricane: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'IBM Plex Mono': {
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
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('arabic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans Condensed': {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans Hebrew': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans JP': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans KR': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans Thai': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'thai')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Sans Thai Looped': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'thai' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'thai')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'IBM Plex Serif': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'IM Fell Double Pica': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'IM Fell English': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'IM Fell French Canon': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'IM Fell Great Primer': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ibarra Real Nova': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Iceland: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Imbue: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Imperial Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Imprima: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Inclusive Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Inder: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Indie Flower': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ingrid Darling': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Inika: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Inknut Antiqua': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Inria Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Instrument Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Inter Tight': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Island Moments': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Istok Web': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Italianno: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Itim: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Jacques Francois': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Jacques Francois Shadow': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Jaldi: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'JetBrains Mono': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Joan: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Jockey One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Jolly Lodger': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Jomhuria: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Jomolhari: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'tibetan' | ('latin' | 'tibetan')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Josefin Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Jua: {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Judson: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Julius Sans One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Junge: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Jura: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'kayah-li' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'kayah-li' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Just Another Hand': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Just Me Again Down Here': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  K2D: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kadwa: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | ('devanagari' | 'latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Kaisei Decol': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  'Kaisei HarunoUmi': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  'Kaisei Opti': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    normal?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    regular?: string | true | 400 | 500 | 700 | (400 | 500 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 700 | (400 | 500 | 700)[],

  'Kaisei Tokumin': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | 800 | (400 | 500 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 700 | 800 | (400 | 500 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 700 | 800 | (400 | 500 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 700 | 800 | (400 | 500 | 700 | 800)[],

  Kalam: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Kameron: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Kanit: {
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
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Karla: {
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
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Katibeh: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kaushan Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kavivanar: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kavoon: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kay Pho Du': {
    display?: GoogleFontsDisplay
    subsets?: 'kayah-li' | 'latin' | 'latin-ext' | ('kayah-li' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Kdam Thmor Pro': {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Keania One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kelly Slab': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kenia: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Khand: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Khmer: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Khula: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 600 | 700 | 800 | (300 | 400 | 600 | 700 | 800)[]
    normal?: string | true | 300 | 400 | 600 | 700 | 800 | (300 | 400 | 600 | 700 | 800)[]
    regular?: string | true | 300 | 400 | 600 | 700 | 800 | (300 | 400 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 300 | 400 | 600 | 700 | 800 | (300 | 400 | 600 | 700 | 800)[],

  Kings: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kirang Haerang': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kite One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kiwi Maru': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    normal?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    regular?: string | true | 300 | 400 | 500 | (300 | 400 | 500)[]
    text?: string
  } | string | true | 300 | 400 | 500 | (300 | 400 | 500)[],

  'Klee One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek-ext' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 600 | (400 | 600)[]
    normal?: true | 400 | 600 | (400 | 600)[]
    regular?: true | 400 | 600 | (400 | 600)[]
    text?: string
  } | true | 400 | 600 | (400 | 600)[],

  Knewave: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  KoHo: {
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
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[],

  'Kolker Brush': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Konkhmer Sleokchher': {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kosugi: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kosugi Maru': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kotta One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Koulen: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kranky: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Kreon: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Kristi: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Krona One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Krub: {
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
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kumar One Outline': {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Kumbh Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | ('latin' | 'latin-ext' | 'math')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Kurale: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'La Belle Aurore': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Labrada: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Laila: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Lakki Reddy': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lalezar: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lancelot: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Langar: {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lateef: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Lato: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'League Gothic': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'League Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'League Spartan': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Leckerli One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ledger: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lekton: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lemonada: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Lexend: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Deca': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Exa': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Giga': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Mega': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Peta': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Tera': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lexend Zetta': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Libre Barcode 128': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode 128 Text': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode 39': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode 39 Extended': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode 39 Extended Text': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode 39 Text': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Barcode EAN13 Text': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Baskerville': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Libre Caslon Text': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Life Savers': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    normal?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    regular?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 700 | 800 | (400 | 700 | 800)[],

  'Lilita One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Lily Script One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Limelight: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Linden Hill': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Lisu Bosa': {
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
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Livvic: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Lobster Two': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Londrina Shadow': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Londrina Sketch': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Londrina Solid': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 300 | 400 | 900 | (100 | 300 | 400 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 900 | (100 | 300 | 400 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 900 | (100 | 300 | 400 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 900 | (100 | 300 | 400 | 900)[],

  'Long Cang': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lora: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Love Ya Like A Sister': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Loved by the King': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Lovers Quarrel': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Luckiest Guy': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lugrasimo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lumanosimo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Lunasima: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Lusitana: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Lustria: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Luxurious Roman': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Luxurious Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'M PLUS 1': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'M PLUS 1 Code': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'M PLUS 1p': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[],

  'M PLUS 2': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'M PLUS Code Latin': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'M PLUS Rounded 1c': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'hebrew' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 500 | 700 | 800 | 900 | (100 | 300 | 400 | 500 | 700 | 800 | 900)[],

  'Ma Shan Zheng': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Macondo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Macondo Swash Caps': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mada: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Magra: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Maiden Orange': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Maitree: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Major Mono Display': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mako: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mali: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mandali: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Manjari: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    wght?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    normal?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    regular?: string | true | 100 | 400 | 700 | (100 | 400 | 700)[]
    text?: string
  } | string | true | 100 | 400 | 700 | (100 | 400 | 700)[],

  Manrope: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Mansalva: {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Manuale: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Marcellus SC': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Marck Script': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Margarine: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Marhey: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Markazi Text': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Marko One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Marmelad: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Martel: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[],

  'Martel Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 600 | 700 | 800 | 900)[],

  'Martian Mono': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Marvel: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Icons': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Icons Outlined': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Icons Round': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Icons Sharp': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Icons Two Tone': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Material Symbols Outlined': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'Material Symbols Rounded': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'Material Symbols Sharp': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'Maven Pro': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  McLaren: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mea Culpa': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Meddon: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  MedievalSharp: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Medula One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Meera Inimai': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'tamil' | ('latin' | 'tamil')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Megrim: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Meie Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Meow Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Merienda: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Merriweather: {
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
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Metal Mania': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Metamorphous: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Metrophobic: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Michroma: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Milonga: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Miltonian: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Miltonian Tattoo': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mina: {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Mingzat: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lepcha' | ('latin' | 'latin-ext' | 'lepcha')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Miniver: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Miriam Libre': {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Mirza: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Miss Fajardose': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mitr: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Mochiy Pop One': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mochiy Pop P One': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Modak: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Modern Antiqua': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mogra: {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mohave: {
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
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Molengo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Molle: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    ital?: true | 400
    italic?: true | 400
    i?: true | 400
    text?: string
  },

  Monda: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Monofett: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Monomaniac One': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Monoton: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Monsieur La Doulaise': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Montaga: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Montagu Slab': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  MonteCarlo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Montez: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Montserrat: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Moo Lah Lah': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mooli: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Moon Dance': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Moul: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Moulpali: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mountains of Christmas': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Mouse Memoirs': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mr Bedfort': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mr Dafoe': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mr De Haviland': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mrs Saint Delafield': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mrs Sheppards': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ms Madi': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mukta: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Mukta Mahee': {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Mukta Malar': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Mukta Vaani': {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Mulish: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  MuseoModerno: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Mynerve: {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Mystery Quest': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  NTR: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Nabla: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'math' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'math' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nanum Brush Script': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nanum Gothic': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    normal?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    regular?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 700 | 800 | (400 | 700 | 800)[],

  'Nanum Gothic Coding': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Nanum Myeongjo': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    normal?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    regular?: string | true | 400 | 700 | 800 | (400 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 700 | 800 | (400 | 700 | 800)[],

  'Nanum Pen Script': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Narnoor: {
    display?: GoogleFontsDisplay
    subsets?: 'gunjala-gondi' | 'latin' | 'latin-ext' | 'math' | 'symbols' | ('gunjala-gondi' | 'latin' | 'latin-ext' | 'math' | 'symbols')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  Neonderthaw: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nerko One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Neucha: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | ('cyrillic' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Neuton: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'New Tegomin': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'News Cycle': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Newsreader: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Niramit: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Nobile: {
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
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[],

  Norican: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Nosifer: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Notable: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nothing You Could Do': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noticia Text': {
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
    display?: GoogleFontsDisplay
    subsets?: 'emoji' | ('emoji')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Emoji': {
    display?: GoogleFontsDisplay
    subsets?: 'emoji' | ('emoji')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Noto Kufi Arabic': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | ('arabic')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Music': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'music' | ('latin' | 'latin-ext' | 'music')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Naskh Arabic': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Nastaliq Urdu': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Rashi Hebrew': {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'adlam' | 'latin' | 'latin-ext' | ('adlam' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Adlam Unjoined': {
    display?: GoogleFontsDisplay
    subsets?: 'adlam' | 'latin' | 'latin-ext' | ('adlam' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Anatolian Hieroglyphs': {
    display?: GoogleFontsDisplay
    subsets?: 'anatolian-hieroglyphs' | 'latin' | 'latin-ext' | ('anatolian-hieroglyphs' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Arabic': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | ('arabic')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Armenian': {
    display?: GoogleFontsDisplay
    subsets?: 'armenian' | 'latin' | 'latin-ext' | ('armenian' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Avestan': {
    display?: GoogleFontsDisplay
    subsets?: 'avestan' | 'latin' | 'latin-ext' | ('avestan' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Balinese': {
    display?: GoogleFontsDisplay
    subsets?: 'balinese' | 'latin' | 'latin-ext' | ('balinese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Bamum': {
    display?: GoogleFontsDisplay
    subsets?: 'bamum' | 'latin' | 'latin-ext' | ('bamum' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Bassa Vah': {
    display?: GoogleFontsDisplay
    subsets?: 'bassa-vah' | 'latin' | 'latin-ext' | ('bassa-vah' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Batak': {
    display?: GoogleFontsDisplay
    subsets?: 'batak' | 'latin' | 'latin-ext' | ('batak' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Bengali': {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Bhaiksuki': {
    display?: GoogleFontsDisplay
    subsets?: 'bhaiksuki' | 'latin' | 'latin-ext' | ('bhaiksuki' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Brahmi': {
    display?: GoogleFontsDisplay
    subsets?: 'brahmi' | 'latin' | 'latin-ext' | ('brahmi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Buginese': {
    display?: GoogleFontsDisplay
    subsets?: 'buginese' | 'latin' | 'latin-ext' | ('buginese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Buhid': {
    display?: GoogleFontsDisplay
    subsets?: 'buhid' | 'latin' | 'latin-ext' | ('buhid' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Canadian Aboriginal': {
    display?: GoogleFontsDisplay
    subsets?: 'canadian-aboriginal' | 'latin' | 'latin-ext' | ('canadian-aboriginal' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Carian': {
    display?: GoogleFontsDisplay
    subsets?: 'carian' | 'latin' | 'latin-ext' | ('carian' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Caucasian Albanian': {
    display?: GoogleFontsDisplay
    subsets?: 'caucasian-albanian' | 'latin' | 'latin-ext' | ('caucasian-albanian' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Chakma': {
    display?: GoogleFontsDisplay
    subsets?: 'chakma' | 'latin' | 'latin-ext' | ('chakma' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Cham': {
    display?: GoogleFontsDisplay
    subsets?: 'cham' | 'latin' | 'latin-ext' | ('cham' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Cherokee': {
    display?: GoogleFontsDisplay
    subsets?: 'cherokee' | 'latin' | 'latin-ext' | ('cherokee' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Chorasmian': {
    display?: GoogleFontsDisplay
    subsets?: 'chorasmian' | 'latin' | 'latin-ext' | ('chorasmian' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Coptic': {
    display?: GoogleFontsDisplay
    subsets?: 'coptic' | 'latin' | 'latin-ext' | ('coptic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Cuneiform': {
    display?: GoogleFontsDisplay
    subsets?: 'cuneiform' | 'latin' | 'latin-ext' | ('cuneiform' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Cypriot': {
    display?: GoogleFontsDisplay
    subsets?: 'cypriot' | 'latin' | 'latin-ext' | ('cypriot' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Cypro Minoan': {
    display?: GoogleFontsDisplay
    subsets?: 'cypro-minoan' | 'latin' | 'latin-ext' | ('cypro-minoan' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Deseret': {
    display?: GoogleFontsDisplay
    subsets?: 'deseret' | 'latin' | 'latin-ext' | ('deseret' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Devanagari': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Display': {
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
    display?: GoogleFontsDisplay
    subsets?: 'duployan' | 'latin' | 'latin-ext' | ('duployan' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Noto Sans Egyptian Hieroglyphs': {
    display?: GoogleFontsDisplay
    subsets?: 'egyptian-hieroglyphs' | 'latin' | 'latin-ext' | ('egyptian-hieroglyphs' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Elbasan': {
    display?: GoogleFontsDisplay
    subsets?: 'elbasan' | 'latin' | 'latin-ext' | ('elbasan' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Elymaic': {
    display?: GoogleFontsDisplay
    subsets?: 'elymaic' | 'latin' | 'latin-ext' | ('elymaic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Ethiopic': {
    display?: GoogleFontsDisplay
    subsets?: 'ethiopic' | 'latin' | 'latin-ext' | ('ethiopic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Georgian': {
    display?: GoogleFontsDisplay
    subsets?: 'georgian' | 'latin' | 'latin-ext' | ('georgian' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Glagolitic': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'glagolitic' | 'latin' | 'latin-ext' | ('cyrillic-ext' | 'glagolitic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Gothic': {
    display?: GoogleFontsDisplay
    subsets?: 'gothic' | 'latin' | 'latin-ext' | ('gothic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Grantha': {
    display?: GoogleFontsDisplay
    subsets?: 'grantha' | 'latin' | 'latin-ext' | ('grantha' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Gujarati': {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols' | ('gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Gunjala Gondi': {
    display?: GoogleFontsDisplay
    subsets?: 'gunjala-gondi' | 'latin' | 'latin-ext' | ('gunjala-gondi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Gurmukhi': {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans HK': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Hanifi Rohingya': {
    display?: GoogleFontsDisplay
    subsets?: 'hanifi-rohingya' | 'latin' | 'latin-ext' | ('hanifi-rohingya' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Hanunoo': {
    display?: GoogleFontsDisplay
    subsets?: 'hanunoo' | 'latin' | 'latin-ext' | ('hanunoo' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Hatran': {
    display?: GoogleFontsDisplay
    subsets?: 'hatran' | 'latin' | 'latin-ext' | ('hatran' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Hebrew': {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Imperial Aramaic': {
    display?: GoogleFontsDisplay
    subsets?: 'imperial-aramaic' | 'latin' | 'latin-ext' | ('imperial-aramaic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Indic Siyaq Numbers': {
    display?: GoogleFontsDisplay
    subsets?: 'indic-siyaq-numbers' | 'latin' | 'latin-ext' | ('indic-siyaq-numbers' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Inscriptional Pahlavi': {
    display?: GoogleFontsDisplay
    subsets?: 'inscriptional-pahlavi' | 'latin' | 'latin-ext' | ('inscriptional-pahlavi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Inscriptional Parthian': {
    display?: GoogleFontsDisplay
    subsets?: 'inscriptional-parthian' | 'latin' | 'latin-ext' | ('inscriptional-parthian' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans JP': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Javanese': {
    display?: GoogleFontsDisplay
    subsets?: 'javanese' | 'latin' | 'latin-ext' | ('javanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans KR': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'korean' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'korean' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Kaithi': {
    display?: GoogleFontsDisplay
    subsets?: 'kaithi' | 'latin' | 'latin-ext' | ('kaithi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Kannada': {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Kawi': {
    display?: GoogleFontsDisplay
    subsets?: 'kawi' | 'latin' | 'latin-ext' | ('kawi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Kayah Li': {
    display?: GoogleFontsDisplay
    subsets?: 'kayah-li' | 'latin' | 'latin-ext' | ('kayah-li' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Kharoshthi': {
    display?: GoogleFontsDisplay
    subsets?: 'kharoshthi' | 'latin' | 'latin-ext' | ('kharoshthi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Khmer': {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Khojki': {
    display?: GoogleFontsDisplay
    subsets?: 'khojki' | 'latin' | 'latin-ext' | ('khojki' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Khudawadi': {
    display?: GoogleFontsDisplay
    subsets?: 'khudawadi' | 'latin' | 'latin-ext' | ('khudawadi' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Lao': {
    display?: GoogleFontsDisplay
    subsets?: 'lao' | 'latin' | 'latin-ext' | ('lao' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Lao Looped': {
    display?: GoogleFontsDisplay
    subsets?: 'lao' | 'latin' | 'latin-ext' | ('lao' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Lepcha': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lepcha' | ('latin' | 'latin-ext' | 'lepcha')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Limbu': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'limbu' | ('latin' | 'latin-ext' | 'limbu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Linear A': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'linear-a' | ('latin' | 'latin-ext' | 'linear-a')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Linear B': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'linear-b' | ('latin' | 'latin-ext' | 'linear-b')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Lisu': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lisu' | ('latin' | 'latin-ext' | 'lisu')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Lycian': {
    display?: GoogleFontsDisplay
    subsets?: 'lycian' | ('lycian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Lydian': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'lydian' | ('latin' | 'latin-ext' | 'lydian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Mahajani': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mahajani' | ('latin' | 'latin-ext' | 'mahajani')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Malayalam': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Mandaic': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mandaic' | ('latin' | 'latin-ext' | 'mandaic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Manichaean': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'manichaean' | ('latin' | 'latin-ext' | 'manichaean')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Marchen': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'marchen' | ('latin' | 'latin-ext' | 'marchen')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Masaram Gondi': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'masaram-gondi' | ('latin' | 'latin-ext' | 'masaram-gondi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Math': {
    display?: GoogleFontsDisplay
    subsets?: 'math' | ('math')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Mayan Numerals': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mayan-numerals' | ('latin' | 'latin-ext' | 'mayan-numerals')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Medefaidrin': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'medefaidrin' | ('latin' | 'latin-ext' | 'medefaidrin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Meetei Mayek': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'meetei-mayek' | ('latin' | 'latin-ext' | 'meetei-mayek')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Mende Kikakui': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mende-kikakui' | ('latin' | 'latin-ext' | 'mende-kikakui')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Meroitic': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'meroitic' | 'meroitic-cursive' | 'meroitic-hieroglyphs' | ('latin' | 'latin-ext' | 'meroitic' | 'meroitic-cursive' | 'meroitic-hieroglyphs')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Miao': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'miao' | ('latin' | 'latin-ext' | 'miao')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Modi': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'modi' | ('latin' | 'latin-ext' | 'modi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Mongolian': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mongolian' | ('latin' | 'latin-ext' | 'mongolian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Mono': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Mro': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'mro' | ('latin' | 'latin-ext' | 'mro')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Multani': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'multani' | ('latin' | 'latin-ext' | 'multani')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Myanmar': {
    display?: GoogleFontsDisplay
    subsets?: 'myanmar' | ('myanmar')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans NKo': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nko' | ('latin' | 'latin-ext' | 'nko')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans NKo Unjoined': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nko' | ('latin' | 'latin-ext' | 'nko')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Nabataean': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nabataean' | ('latin' | 'latin-ext' | 'nabataean')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Nag Mundari': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nag-mundari' | ('latin' | 'latin-ext' | 'nag-mundari')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Nandinagari': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nandinagari' | ('latin' | 'latin-ext' | 'nandinagari')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans New Tai Lue': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'new-tai-lue' | ('latin' | 'latin-ext' | 'new-tai-lue')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Newa': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'newa' | ('latin' | 'latin-ext' | 'newa')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Nushu': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nushu' | ('latin' | 'latin-ext' | 'nushu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Ogham': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ogham' | ('latin' | 'latin-ext' | 'ogham')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Ol Chiki': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ol-chiki' | ('latin' | 'latin-ext' | 'ol-chiki')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Old Hungarian': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-hungarian' | ('latin' | 'latin-ext' | 'old-hungarian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old Italic': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-italic' | ('latin' | 'latin-ext' | 'old-italic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old North Arabian': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-north-arabian' | ('latin' | 'latin-ext' | 'old-north-arabian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old Permic': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'old-permic' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'old-permic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old Persian': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-persian' | ('latin' | 'latin-ext' | 'old-persian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old Sogdian': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-sogdian' | ('latin' | 'latin-ext' | 'old-sogdian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old South Arabian': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-south-arabian' | ('latin' | 'latin-ext' | 'old-south-arabian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Old Turkic': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-turkic' | ('latin' | 'latin-ext' | 'old-turkic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Oriya': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | ('latin' | 'latin-ext' | 'oriya')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Osage': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'osage' | ('latin' | 'latin-ext' | 'osage')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Osmanya': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'osmanya' | ('latin' | 'latin-ext' | 'osmanya')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Pahawh Hmong': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'pahawh-hmong' | ('latin' | 'latin-ext' | 'pahawh-hmong')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Palmyrene': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'palmyrene' | ('latin' | 'latin-ext' | 'palmyrene')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Pau Cin Hau': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'pau-cin-hau' | ('latin' | 'latin-ext' | 'pau-cin-hau')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Phags Pa': {
    display?: GoogleFontsDisplay
    subsets?: 'phags-pa' | ('phags-pa')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Phoenician': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'phoenician' | ('latin' | 'latin-ext' | 'phoenician')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Psalter Pahlavi': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'psalter-pahlavi' | ('latin' | 'latin-ext' | 'psalter-pahlavi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Rejang': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'rejang' | ('latin' | 'latin-ext' | 'rejang')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Runic': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'runic' | ('latin' | 'latin-ext' | 'runic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans SC': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-simplified' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Samaritan': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'samaritan' | ('latin' | 'latin-ext' | 'samaritan')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Saurashtra': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'saurashtra' | ('latin' | 'latin-ext' | 'saurashtra')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Sharada': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sharada' | ('latin' | 'latin-ext' | 'sharada')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Shavian': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'shavian' | ('latin' | 'latin-ext' | 'shavian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Siddham': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'siddham' | ('latin' | 'latin-ext' | 'siddham')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans SignWriting': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'signwriting' | ('latin' | 'latin-ext' | 'signwriting')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Sinhala': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Sogdian': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sogdian' | ('latin' | 'latin-ext' | 'sogdian')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Sora Sompeng': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sora-sompeng' | ('latin' | 'latin-ext' | 'sora-sompeng')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Soyombo': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'soyombo' | ('latin' | 'latin-ext' | 'soyombo')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Sundanese': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sundanese' | ('latin' | 'latin-ext' | 'sundanese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Syloti Nagri': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'syloti-nagri' | ('latin' | 'latin-ext' | 'syloti-nagri')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Symbols': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'symbols' | ('latin' | 'latin-ext' | 'symbols')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Symbols 2': {
    display?: GoogleFontsDisplay
    subsets?: 'braille' | 'latin' | 'latin-ext' | 'math' | 'mayan-numerals' | 'symbols' | ('braille' | 'latin' | 'latin-ext' | 'math' | 'mayan-numerals' | 'symbols')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Syriac': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'syriac' | ('latin' | 'latin-ext' | 'syriac')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Syriac Eastern': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'syriac' | ('latin' | 'latin-ext' | 'syriac')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans TC': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-traditional' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-traditional' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Tagalog': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tagalog' | ('latin' | 'latin-ext' | 'tagalog')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tagbanwa': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tagbanwa' | ('latin' | 'latin-ext' | 'tagbanwa')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tai Le': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-le' | ('latin' | 'latin-ext' | 'tai-le')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tai Tham': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-tham' | ('latin' | 'latin-ext' | 'tai-tham')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Tai Viet': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-viet' | ('latin' | 'latin-ext' | 'tai-viet')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Takri': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'takri' | ('latin' | 'latin-ext' | 'takri')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tamil': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Tamil Supplement': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil-supplement' | ('latin' | 'latin-ext' | 'tamil-supplement')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tangsa': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tangsa' | ('latin' | 'latin-ext' | 'tangsa')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Telugu': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Thaana': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thaana' | ('latin' | 'latin-ext' | 'thaana')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Thai': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | ('latin' | 'latin-ext' | 'thai')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Thai Looped': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | ('latin' | 'latin-ext' | 'thai')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Sans Tifinagh': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tifinagh' | ('latin' | 'latin-ext' | 'tifinagh')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Tirhuta': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tirhuta' | ('latin' | 'latin-ext' | 'tirhuta')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Ugaritic': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ugaritic' | ('latin' | 'latin-ext' | 'ugaritic')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Vai': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vai' | ('latin' | 'latin-ext' | 'vai')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Vithkuqi': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vithkuqi' | ('latin' | 'latin-ext' | 'vithkuqi')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Sans Wancho': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'wancho' | ('latin' | 'latin-ext' | 'wancho')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Warang Citi': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'warang-citi' | ('latin' | 'latin-ext' | 'warang-citi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Yi': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'yi' | ('latin' | 'latin-ext' | 'yi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Sans Zanabazar Square': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'zanabazar-square' | ('latin' | 'latin-ext' | 'zanabazar-square')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif': {
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
    display?: GoogleFontsDisplay
    subsets?: 'ahom' | 'latin' | 'latin-ext' | ('ahom' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Armenian': {
    display?: GoogleFontsDisplay
    subsets?: 'armenian' | 'latin' | 'latin-ext' | ('armenian' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Balinese': {
    display?: GoogleFontsDisplay
    subsets?: 'balinese' | 'latin' | 'latin-ext' | ('balinese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Bengali': {
    display?: GoogleFontsDisplay
    subsets?: 'bengali' | 'latin' | 'latin-ext' | ('bengali' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Devanagari': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Display': {
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
    display?: GoogleFontsDisplay
    subsets?: 'dogra' | 'latin' | 'latin-ext' | ('dogra' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Ethiopic': {
    display?: GoogleFontsDisplay
    subsets?: 'ethiopic' | 'latin' | 'latin-ext' | ('ethiopic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Georgian': {
    display?: GoogleFontsDisplay
    subsets?: 'georgian' | 'latin' | 'latin-ext' | ('georgian' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Grantha': {
    display?: GoogleFontsDisplay
    subsets?: 'grantha' | 'latin' | 'latin-ext' | ('grantha' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Gujarati': {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols' | ('gujarati' | 'latin' | 'latin-ext' | 'math' | 'symbols')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Gurmukhi': {
    display?: GoogleFontsDisplay
    subsets?: 'gurmukhi' | 'latin' | 'latin-ext' | ('gurmukhi' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif HK': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('chinese-hongkong' | 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Hebrew': {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif JP': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[],

  'Noto Serif KR': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[],

  'Noto Serif Kannada': {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Khitan Small Script': {
    display?: GoogleFontsDisplay
    subsets?: 'khitan-small-script' | 'latin' | 'latin-ext' | ('khitan-small-script' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Khmer': {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | 'latin-ext' | ('khmer' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Khojki': {
    display?: GoogleFontsDisplay
    subsets?: 'khojki' | 'latin' | 'latin-ext' | ('khojki' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Serif Lao': {
    display?: GoogleFontsDisplay
    subsets?: 'lao' | 'latin' | 'latin-ext' | ('lao' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Makasar': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'makasar' | ('latin' | 'latin-ext' | 'makasar')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Malayalam': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'malayalam' | ('latin' | 'latin-ext' | 'malayalam')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Myanmar': {
    display?: GoogleFontsDisplay
    subsets?: 'myanmar' | ('myanmar')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif NP Hmong': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'nyiakeng-puachue-hmong' | ('latin' | 'nyiakeng-puachue-hmong')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Serif Old Uyghur': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'old-uyghur' | ('latin' | 'latin-ext' | 'old-uyghur')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Oriya': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'oriya' | ('latin' | 'latin-ext' | 'oriya')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Serif Ottoman Siyaq': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'ottoman-siyaq-numbers' | ('latin' | 'latin-ext' | 'ottoman-siyaq-numbers')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif SC': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[],

  'Noto Serif Sinhala': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif TC': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-traditional' | 'latin' | ('chinese-traditional' | 'latin')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 900)[],

  'Noto Serif Tamil': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tangut' | ('latin' | 'latin-ext' | 'tangut')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Noto Serif Telugu': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'telugu' | ('latin' | 'latin-ext' | 'telugu')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Thai': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | ('latin' | 'latin-ext' | 'thai')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Tibetan': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tibetan' | ('latin' | 'latin-ext' | 'tibetan')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Noto Serif Toto': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'toto' | ('latin' | 'latin-ext' | 'toto')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Serif Vithkuqi': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vithkuqi' | ('latin' | 'latin-ext' | 'vithkuqi')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Serif Yezidi': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'yezidi' | ('latin' | 'latin-ext' | 'yezidi')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Noto Traditional Nushu': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'nushu' | ('latin' | 'latin-ext' | 'nushu')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Nova Cut': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Flat': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Mono': {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | ('greek' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Oval': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Round': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Slim': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Nova Square': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Numans: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Nunito: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'yi' | ('latin' | 'latin-ext' | 'yi')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Odibee Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Odor Mean Chey': {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Offside: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Oi: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'tamil' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'tamil' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Old Standard TT': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ole: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Oleo Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Oleo Script Swash Caps': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Onest: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Oooh Baby': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Open Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Orbit: {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | 'latin-ext' | ('korean' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Orbitron: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Oregano: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Orienta: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Original Surfer': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Oswald: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  Outfit: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Over the Rainbow': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Overlock: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Overpass: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Ovo: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Oxanium: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Oxygen: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Oxygen Mono': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'PT Mono': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'PT Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'PT Sans Narrow': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'PT Serif': {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Padauk: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'myanmar' | ('latin' | 'latin-ext' | 'myanmar')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Padyakke Expanded One': {
    display?: GoogleFontsDisplay
    subsets?: 'kannada' | 'latin' | 'latin-ext' | ('kannada' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Palanquin: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | (100 | 200 | 300 | 400 | 500 | 600 | 700)[],

  'Palanquin Dark': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Palette Mosaic': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Pangolin: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Paprika: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Parisienne: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Passero One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Passion One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    normal?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    regular?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 700 | 900 | (400 | 700 | 900)[],

  'Passions Conflict': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pathway Extreme': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Patrick Hand': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Patrick Hand SC': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Pattaya: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Patua One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Pavanam: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tamil' | ('latin' | 'latin-ext' | 'tamil')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Paytone One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Peddana: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Peralta: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Permanent Marker': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Petemoss: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Petit Formal Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Petrona: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Piazzolla: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pinyon Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pirata One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pixelify Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Plaster: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Play: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Playball: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Playfair: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese' | ('latin' | 'latin-ext' | 'math' | 'symbols' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Plus Jakarta Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Poiret One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Poller One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Poltawski Nowy': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pontano Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Poor Story': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Poppins: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Port Lligat Slab': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Potta One': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Pragati Narrow': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Praise: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Prata: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Preahvihear: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Press Start 2P': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Pridi: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Princess Sofia': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Prociono: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Prompt: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Proza Libre': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Puritan: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Qahiri: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Quando: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Quantico: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Quattrocento Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Quicksand: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Quintessential: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Qwigley: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Qwitcher Grypen': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  REM: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Radio Canada': {
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
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Rakkas: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Raleway: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ramabhadra: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ramaraja: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Rambla: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rampart One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ranchers: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Rancho: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ranga: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Rasa: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ravi Prakash': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Readex Pro': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  Recursive: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Red Hat Display': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Redacted: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Redacted Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Redressed: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Reem Kufi': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Reem Kufi Fun': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Reem Kufi Ink': {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | 'vietnamese' | ('arabic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Reenie Beanie': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Reggae One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Revalia: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rhodium Libre': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ribeye: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ribeye Marrow': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Righteous: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Risque: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Road Rage': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Roboto: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Roboto Mono': {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Rochester: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rock 3D': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rock Salt': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'RocknRoll One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Rokkitt: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ropa Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Rowdies: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  'Rozha One': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Rubik: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Beastly': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Bubbles': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Burned': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Dirt': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Distressed': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Gemstones': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Glitch': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Iso': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Marker Hatch': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Maze': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Microbe': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Mono One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Moonrocks': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Pixels': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Puddles': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Spray Paint': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Storm': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Vinyl': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rubik Wet Paint': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ruda: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Rufina: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Ruge Boogie': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ruluko: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Rum Raisin': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ruslan Display': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Russo One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ruthie: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ruwudu: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  Rye: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'STIX Two Text': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sahitya: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | ('devanagari' | 'latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Sail: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Saira: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Saira Extra Condensed': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Saira Semi Condensed': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Saira Stencil One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Salsa: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sanchez: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sansita: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Sarabun: {
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
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Sarina: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sarpanch: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  'Sassy Frass': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Satisfy: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sawarabi Gothic': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sawarabi Mincho': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Scada: {
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
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    normal?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    regular?: string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | (400 | 500 | 600 | 700)[],

  'Schibsted Grotesk': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Scope One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Seaweed Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Secular One': {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sedgwick Ave': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sedgwick Ave Display': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sen: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Send Flowers': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sevillana: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Seymour One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shadows Into Light': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shadows Into Light Two': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Shalimar: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shantell Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Share: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Share Tech Mono': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shippori Antique': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shippori Antique B1': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Shippori Mincho': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Shippori Mincho B1': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  Shizuru: {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | ('japanese' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Shojumaru: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Short Stack': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Shrikhand: {
    display?: GoogleFontsDisplay
    subsets?: 'gujarati' | 'latin' | 'latin-ext' | ('gujarati' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Siemreap: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | ('khmer')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sigmar: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sigmar One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Signika: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Signika Negative': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Silkscreen: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Simonetta: {
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
    display?: GoogleFontsDisplay
    subsets?: 'korean' | ('korean')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sintony: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Sirin Stencil': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Six Caps': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Skranji: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  'Slabo 13px': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Slabo 27px': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Slackey: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Slackside One': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Smokum: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Smooch: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Smooch Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Smythe: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sniglet: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 800 | (400 | 800)[]
    normal?: true | 400 | 800 | (400 | 800)[]
    regular?: true | 400 | 800 | (400 | 800)[]
    text?: string
  } | true | 400 | 800 | (400 | 800)[],

  Snippet: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Snowburst One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sofadi One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sofia: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sofia Sans': {
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
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Solway: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 300 | 400 | 500 | 700 | 800 | (300 | 400 | 500 | 700 | 800)[]
    normal?: string | true | 300 | 400 | 500 | 700 | 800 | (300 | 400 | 500 | 700 | 800)[]
    regular?: string | true | 300 | 400 | 500 | 700 | 800 | (300 | 400 | 500 | 700 | 800)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 700 | 800 | (300 | 400 | 500 | 700 | 800)[],

  'Sometype Mono': {
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
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sono: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Sonsie One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sora: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Sorts Mill Goudy': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Space Mono': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Spectral: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Spinnaker: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Spirax: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Splash: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Spline Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Spline Sans Mono': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Square Peg': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sree Krushnadevaraya': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sriracha: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Srisakdi: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'thai' | 'vietnamese' | ('latin' | 'latin-ext' | 'thai' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Staatliches: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Stalemate: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Stalinist One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Stardos Stencil': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Stick: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Stick No Bills': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  'Stint Ultra Condensed': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Stint Ultra Expanded': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Stoke: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 300 | 400 | (300 | 400)[]
    normal?: true | 300 | 400 | (300 | 400)[]
    regular?: true | 300 | 400 | (300 | 400)[]
    text?: string
  } | true | 300 | 400 | (300 | 400)[],

  Strait: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Style Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Stylish: {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sue Ellen Francisco': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Suez One': {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | ('hebrew' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Sulphur Point': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    normal?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    regular?: string | true | 300 | 400 | 700 | (300 | 400 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 700 | (300 | 400 | 700)[],

  Sumana: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Sunflower: {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: string | 300 | 500 | 700 | (300 | 500 | 700)[]
    normal?: string | 300 | 500 | 700 | (300 | 500 | 700)[]
    regular?: string | 300 | 500 | 700 | (300 | 500 | 700)[]
    text?: string
  } | string | 300 | 500 | 700 | (300 | 500 | 700)[],

  Sunshiney: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Supermercado One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Sura: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Suranna: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Suravaram: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Suwannaphum: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 700 | 900 | (100 | 300 | 400 | 700 | 900)[],

  'Swanky and Moo Moo': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Syncopate: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Syne: {
    display?: GoogleFontsDisplay
    subsets?: 'greek' | 'latin' | 'latin-ext' | ('greek' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Syne Mono': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Syne Tactile': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tai Heritage Pro': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'tai-viet' | 'vietnamese' | ('latin' | 'latin-ext' | 'tai-viet' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Tajawal: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 700 | 800 | 900)[],

  Tangerine: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Tapestry: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Taprom: {
    display?: GoogleFontsDisplay
    subsets?: 'khmer' | 'latin' | ('khmer' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Tauri: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Taviraj: {
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
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  Tektur: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | 900 | (400 | 500 | 600 | 700 | 800 | 900)[],

  Telex: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tenali Ramakrishna': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tenor Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Text Me One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Texturina: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'The Nautigal': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Tienne: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    normal?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    regular?: string | true | 400 | 700 | 900 | (400 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 700 | 900 | (400 | 700 | 900)[],

  Tillana: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Tilt Neon': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tilt Prism': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tilt Warp': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Timmana: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'telugu' | ('latin' | 'telugu')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Tinos: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Titillium Web': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Train One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Trirong: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800)[],

  Trocchi: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Trochut: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Trykker: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Tsukimi Rounded': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Tulpen One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Turret Road': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | (200 | 300 | 400 | 500 | 700 | 800)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | (200 | 300 | 400 | 500 | 700 | 800)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 700 | 800 | (200 | 300 | 400 | 500 | 700 | 800)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 700 | 800 | (200 | 300 | 400 | 500 | 700 | 800)[],

  'Twinkle Star': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ubuntu: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Ubuntu Mono': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'tibetan' | ('latin' | 'tibetan')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Ultra: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Unbounded: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Uncial Antiqua': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Underdog: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | ('cyrillic' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Unica One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  UnifrakturCook: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: 700
    normal?: 700
    regular?: 700
    text?: string
  },

  UnifrakturMaguntia: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Unkempt: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],

  Unlock: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Unna: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Urbanist: {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Vampiro One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Varela: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Varela Round': {
    display?: GoogleFontsDisplay
    subsets?: 'hebrew' | 'latin' | 'latin-ext' | 'vietnamese' | ('hebrew' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Varta: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 600 | 700 | (300 | 400 | 500 | 600 | 700)[],

  'Vast Shadow': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Vazirmatn: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | 'latin-ext' | ('arabic' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Vesper Libre': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 700 | 900 | (400 | 500 | 700 | 900)[]
    normal?: string | true | 400 | 500 | 700 | 900 | (400 | 500 | 700 | 900)[]
    regular?: string | true | 400 | 500 | 700 | 900 | (400 | 500 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 700 | 900 | (400 | 500 | 700 | 900)[],

  'Viaoda Libre': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Vibes: {
    display?: GoogleFontsDisplay
    subsets?: 'arabic' | 'latin' | ('arabic' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Vibur: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Victor Mono': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Viga: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Vina Sans': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Voces: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Volkhov: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 600 | 700 | 900 | (400 | 600 | 700 | 900)[]
    normal?: string | true | 400 | 600 | 700 | 900 | (400 | 600 | 700 | 900)[]
    regular?: string | true | 400 | 600 | 700 | 900 | (400 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 600 | 700 | 900 | (400 | 600 | 700 | 900)[],

  Voltaire: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Vujahday Script': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Waiting for the Sunrise': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Wallpoet: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Walter Turncoat': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Warnes: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Water Brush': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Waterfall: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Wavefont: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  Wellfleet: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Wendy One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Whisper: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  WindSong: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'vietnamese' | ('latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400 | 500 | (400 | 500)[]
    normal?: true | 400 | 500 | (400 | 500)[]
    regular?: true | 400 | 500 | (400 | 500)[]
    text?: string
  } | true | 400 | 500 | (400 | 500)[],

  'Wire One': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Wix Madefor Display': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 800 | (400 | 500 | 600 | 700 | 800)[],

  'Wix Madefor Text': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | 'sinhala' | ('latin' | 'latin-ext' | 'sinhala')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  'Yanone Kaffeesatz': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    normal?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    regular?: string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[]
    text?: string
  } | string | true | 200 | 300 | 400 | 500 | 600 | 700 | (200 | 300 | 400 | 500 | 600 | 700)[],

  Yantramanav: {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    normal?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    regular?: string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[]
    text?: string
  } | string | true | 100 | 300 | 400 | 500 | 700 | 900 | (100 | 300 | 400 | 500 | 700 | 900)[],

  'Yatra One': {
    display?: GoogleFontsDisplay
    subsets?: 'devanagari' | 'latin' | 'latin-ext' | ('devanagari' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Yellowtail: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yeon Sung': {
    display?: GoogleFontsDisplay
    subsets?: 'korean' | 'latin' | ('korean' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yeseva One': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Yesteryear: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Yomogi: {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Young Serif': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Yrsa: {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese' | ('cyrillic' | 'cyrillic-ext' | 'greek' | 'latin' | 'latin-ext' | 'vietnamese')[]
    wght?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    normal?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    regular?: string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[]
    text?: string
  } | string | true | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[],

  'Yuji Boku': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yuji Hentaigana Akari': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yuji Hentaigana Akebono': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yuji Mai': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yuji Syuku': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Yusei Magic': {
    display?: GoogleFontsDisplay
    subsets?: 'japanese' | 'latin' | 'latin-ext' | ('japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'ZCOOL KuaiLe': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'ZCOOL QingKe HuangYou': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'ZCOOL XiaoWei': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zen Antique': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zen Antique Soft': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zen Dots': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zen Kaku Gothic Antique': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[],

  'Zen Kaku Gothic New': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[],

  'Zen Kurenaido': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zen Loop': {
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
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    normal?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    regular?: string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[]
    text?: string
  } | string | true | 300 | 400 | 500 | 700 | 900 | (300 | 400 | 500 | 700 | 900)[],

  'Zen Old Mincho': {
    display?: GoogleFontsDisplay
    subsets?: 'cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext' | ('cyrillic' | 'greek' | 'japanese' | 'latin' | 'latin-ext')[]
    wght?: string | true | 400 | 500 | 600 | 700 | 900 | (400 | 500 | 600 | 700 | 900)[]
    normal?: string | true | 400 | 500 | 600 | 700 | 900 | (400 | 500 | 600 | 700 | 900)[]
    regular?: string | true | 400 | 500 | 600 | 700 | 900 | (400 | 500 | 600 | 700 | 900)[]
    text?: string
  } | string | true | 400 | 500 | 600 | 700 | 900 | (400 | 500 | 600 | 700 | 900)[],

  'Zen Tokyo Zoo': {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  Zeyada: {
    display?: GoogleFontsDisplay
    subsets?: 'latin' | ('latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zhi Mang Xing': {
    display?: GoogleFontsDisplay
    subsets?: 'chinese-simplified' | 'latin' | ('chinese-simplified' | 'latin')[]
    wght?: true | 400
    normal?: true | 400
    regular?: true | 400
    text?: string
  } | true | 400,

  'Zilla Slab': {
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
    display?: GoogleFontsDisplay
    subsets?: 'latin' | 'latin-ext' | ('latin' | 'latin-ext')[]
    wght?: true | 400 | 700 | (400 | 700)[]
    normal?: true | 400 | 700 | (400 | 700)[]
    regular?: true | 400 | 700 | (400 | 700)[]
    text?: string
  } | true | 400 | 700 | (400 | 700)[],
}
