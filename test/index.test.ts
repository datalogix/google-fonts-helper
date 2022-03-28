import { join } from 'path'
import { describe, test, expect } from 'vitest'
import del from 'del'
import tempy from 'tempy'
import { pathExistsSync } from 'fs-extra'
import { GoogleFontsHelper } from '../src'

describe('Google Fonts Helper', () => {
  test('getFonts', () => {
    const googleFontsHelper = new GoogleFontsHelper({
      families: { Roboto: true }
    })

    expect(googleFontsHelper.getFonts()).toStrictEqual({
      families: { Roboto: true }
    })
  })

  test('constructURL', () => {
    // v2
    expect(new GoogleFontsHelper({
      families: {
        Roboto: [100, 200, 300, 400]
      }
    }).constructURL()).toEqual('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400')

    expect(new GoogleFontsHelper({
      families: {
        Roboto: {
          ital: [400]
        }
      }
    }).constructURL()).toEqual('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,400')

    expect(new GoogleFontsHelper({
      families: {
        Roboto: {
          wght: [600, 700, 800, 400]
        }
      }
    }).constructURL()).toEqual('https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700;800')

    expect(new GoogleFontsHelper({
      families: {
        Roboto: {
          wght: [400, 600, 700, 800]
        }
      }
    }).constructURL()).toEqual('https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700;800')

    expect(new GoogleFontsHelper({
      families: {
        Roboto: {
          wght: [300, 400, 700],
          ital: [400]
        }
      }
    }).constructURL()).toEqual('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400')

    expect(new GoogleFontsHelper({
      families: { Roboto: true }
    }).constructURL()).toEqual('https://fonts.googleapis.com/css2?family=Roboto')

    expect(new GoogleFontsHelper({
      families: { Roboto: true },
      text: 'Foo Bar'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css2?family=Roboto&text=Foo+Bar')

    expect(new GoogleFontsHelper({
      families: {
        '': true,
        Roboto: true,
        Lato: {
          wght: 100
        },
        Raleway: {
          wght: [400],
          ital: [100, 400]
        }
      }
    }).constructURL()).toEqual('https://fonts.googleapis.com/css2?family=Roboto&family=Lato:wght@100&family=Raleway:ital,wght@0,400;1,100;1,400')

    // v1
    expect(new GoogleFontsHelper({
      families: { Roboto: true },
      display: 'swap',
      subsets: 'cyrillic'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=cyrillic')

    expect(new GoogleFontsHelper({
      families: { Roboto: true, Lato: [100] },
      subsets: ['foo', 'bar']
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Roboto|Lato&subset=foo,bar')

    expect(new GoogleFontsHelper({
      families: {
        Roboto: true
      },
      display: 'swap',
      subsets: 'cyrillic'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=cyrillic')

    expect(new GoogleFontsHelper({
      families: {
        Cantarell: {
          ital: true
        },
        'Droid Serif': {
          wght: [700]
        }
      },
      subsets: 'cyrillic'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Cantarell:ital|Droid+Serif:bold&subset=cyrillic')

    expect(new GoogleFontsHelper({
      families: {
        Cantarell: {
          ital: [700]
        },
        'Droid Serif': {
          wght: [700]
        }
      },
      subsets: 'cyrillic'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Cantarell:bolditalic|Droid+Serif:bold&subset=cyrillic')

    expect(new GoogleFontsHelper({
      families: {
        'Droid Serif': {
          wght: true,
          ital: 100
        }
      },
      subsets: 'cyrillic'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Droid+Serif:wght,ital&subset=cyrillic')

    expect(new GoogleFontsHelper({
      families: {
        'Droid Serif': {
          ital: 700,
          wght: true
        }
      },
      subsets: 'cyrillic'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Droid+Serif:wght,bolditalic&subset=cyrillic')

    expect(new GoogleFontsHelper({
      families: {
        'Droid Serif': {
          ital: false,
          wght: true
        }
      },
      subsets: 'cyrillic'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Droid+Serif&subset=cyrillic')

    expect(new GoogleFontsHelper({
      families: {
        Cantarell: true,
        'Droid Serif': 400
      },
      subsets: 'cyrillic'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Cantarell|Droid+Serif&subset=cyrillic')

    expect(new GoogleFontsHelper({
      families: {
        'Droid Serif': {
          ital: [400, 600, 700, 800]
        },
        Roboto: {
          wght: [400, 600, 700, 800]
        }
      },
      subsets: 'cyrillic'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Droid+Serif:ital,bolditalic|Roboto:wght,bold&subset=cyrillic')

    expect(new GoogleFontsHelper({
      families: {
        '': true,
        Roboto: 700
      },
      subsets: 'cyrillic'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Roboto:bold&subset=cyrillic')
  })

  test('constructURL invalid', () => {
    expect(new GoogleFontsHelper().constructURL()).toBe(false)
    expect(new GoogleFontsHelper({ families: {} }).constructURL()).toBe(false)
    expect(new GoogleFontsHelper({ display: 'swap' }).constructURL()).toBe(false)
    expect(new GoogleFontsHelper({ subsets: 'foo' }).constructURL()).toBe(false)
    expect(new GoogleFontsHelper({ subsets: ['foo', 'bar'] }).constructURL()).toBe(false)
  })

  test('merge', () => {
    const googleFontsHelper = new GoogleFontsHelper({
      families: {
        Roboto: true
      }
    })

    googleFontsHelper.merge({
      families: {
        Lato: [100, 400]
      }
    })

    expect(googleFontsHelper.getFonts()).toStrictEqual({
      families: {
        Roboto: true,
        Lato: [100, 400]
      }
    })
  })

  test('merge mutiple', () => {
    const googleFontsHelper = new GoogleFontsHelper({
      families: {
        Roboto: true
      }
    })

    googleFontsHelper.merge(new GoogleFontsHelper({
      families: {
        Lato: [100, 400]
      }
    }), {
      families: {
        Raleway: {
          ital: [100, 400],
          wght: [400]
        }
      }
    })

    expect(googleFontsHelper.getFonts()).toStrictEqual({
      families: {
        Roboto: true,
        Lato: [100, 400],
        Raleway: {
          ital: [100, 400],
          wght: [400]
        }
      }
    })
  })

  test('parse', () => {
    // v2
    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=Roboto').getFonts()).toStrictEqual({
      families: {
        Roboto: true
      }
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400').getFonts()).toStrictEqual({
      families: {
        Roboto: {
          wght: [300, 400, 700],
          ital: [400]
        }
      }
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,400').getFonts()).toStrictEqual({
      families: {
        Roboto: {
          wght: true,
          ital: [400]
        }
      }
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=Roboto&display=swap').getFonts()).toStrictEqual({
      families: {
        Roboto: true
      },
      display: 'swap'
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=Roboto:100').getFonts()).toStrictEqual({
      families: {
        Roboto: {
          wght: [100]
        }
      }
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=Roboto:100,300').getFonts()).toStrictEqual({
      families: {
        Roboto: {
          wght: [100, 300]
        }
      }
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=Roboto&text=Foo%20Bar').getFonts()).toStrictEqual({
      families: {
        Roboto: true
      },
      text: 'Foo Bar'
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=Roboto&family=Lato:wght@100;400&family=Raleway:ital,wght@0,400;1,100;1,400').getFonts()).toStrictEqual({
      families: {
        Roboto: true,
        Lato: {
          wght: [100, 400]
        },
        Raleway: {
          wght: [400],
          ital: [100, 400]
        }
      }
    })

    // v1
    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css?family=Roboto&family=Lato:&display=swap&subset=cyrillic').getFonts()).toStrictEqual({
      families: {
        Roboto: true
      },
      display: 'swap',
      subsets: ['cyrillic']
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css?family=Cantarell:italic|Droid+Serif:bold').getFonts()).toStrictEqual({
      families: {
        Cantarell: {
          ital: true
        },
        'Droid Serif': {
          wght: 700
        }
      }
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css?family=Droid+Serif:wght,italic').getFonts()).toStrictEqual({
      families: {
        'Droid Serif': {
          wght: true,
          ital: true
        }
      }
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css?family=Cantarell|Droid+Serif').getFonts()).toStrictEqual({
      families: {
        Cantarell: true,
        'Droid Serif': true
      }
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css?family=Droid+Serif').getFonts()).toStrictEqual({
      families: {
        'Droid Serif': true
      }
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css?family=Droid+Serif:bolditalic').getFonts()).toStrictEqual({
      families: {
        'Droid Serif': {
          ital: 700
        }
      }
    })
  })

  test('parse invalid', () => {
    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=')).toStrictEqual(new GoogleFontsHelper())
    expect(GoogleFontsHelper.parse('https://foo.bar')).toStrictEqual(new GoogleFontsHelper())
    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css')).toStrictEqual(new GoogleFontsHelper())
  })

  test('download', async () => {
    const outputDir = tempy.directory()
    const stylePath = 'font.css'
    const fontsDir = 'fonts'

    await GoogleFontsHelper.download('https://fonts.googleapis.com/css2?family=Roboto&family=Lato:wght@100;400&family=Raleway:ital,wght@0,100;0,400;1,400', {
      outputDir,
      stylePath,
      fontsDir
    })

    expect(pathExistsSync(join(outputDir, stylePath))).toBe(true)
    expect(pathExistsSync(join(outputDir, fontsDir))).toBe(true)

    await del(outputDir, { force: true })
  }, 60000)

  test('download base64', async () => {
    const outputDir = tempy.directory()
    const stylePath = 'font.css'
    const fontsDir = 'fonts'

    await GoogleFontsHelper.download('https://fonts.googleapis.com/css2?family=Roboto', {
      base64: true,
      outputDir,
      stylePath,
      fontsDir
    })

    expect(pathExistsSync(join(outputDir, stylePath))).toBe(true)
    expect(pathExistsSync(join(outputDir, fontsDir))).toBe(false)

    await del(outputDir, { force: true })
  }, 60000)

  test('download invalid', async () => {
    await expect(GoogleFontsHelper.download('https://foo.bar')).rejects.toEqual(new Error('Invalid Google Fonts URL'))
  })
})
