import { join } from 'path'
import del from 'del'
import tempy from 'tempy'
import GoogleFontsHelper from '../src'
import { pathExistsSync } from 'fs-extra'

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
          wght: [300, 400, 700],
          ital: [400]
        }
      }
    }).constructURL()).toEqual('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400')

    expect(new GoogleFontsHelper({
      families: { Roboto: true }
    }).constructURL()).toEqual('https://fonts.googleapis.com/css2?family=Roboto')

    expect(new GoogleFontsHelper({
      families: { Roboto: true, Lato: false },
      display: 'swap',
      subsets: 'cyrillic'
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=cyrillic')

    expect(new GoogleFontsHelper({
      families: { Roboto: true, Lato: [100] },
      subsets: ['foo', 'bar']
    }).constructURL()).toEqual('https://fonts.googleapis.com/css?family=Roboto&family=Lato:wght@100&subset=foo,bar')

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
  })

  test('constructURL invalid', () => {
    expect(new GoogleFontsHelper().constructURL()).toBe(false)
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

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css?family=Roboto&family=Lato:&display=swap&subset=cyrillic').getFonts()).toStrictEqual({
      families: {
        Roboto: true
      },
      display: 'swap',
      subsets: ['cyrillic']
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
  })

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
  })

  test('download invalid', async () => {
    await expect(GoogleFontsHelper.download('https://foo.bar')).rejects.toEqual(new Error('Invalid Google Fonts URL'))
  })
})
