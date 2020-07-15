import GoogleFontsHelper from '../src'

describe('Google Fonts Helper', () => {
  test('getFonts', () => {
    const googleFontsHelper = new GoogleFontsHelper({
      families: {
        Roboto: true
      }
    })

    expect(googleFontsHelper.getFonts()).toStrictEqual({
      families: {
        Roboto: true
      }
    })
  })

  test('constructURL', () => {
    const googleFontsHelper = new GoogleFontsHelper({
      families: {
        Roboto: true
      }
    })

    expect(googleFontsHelper.constructURL()).toEqual(
      'https://fonts.googleapis.com/css2?family=Roboto'
    )
  })

  test('constructURL full', () => {
    const googleFontsHelper = new GoogleFontsHelper({
      families: {
        Roboto: true
      },
      display: 'swap',
      subsets: 'cyrillic'
    })

    expect(googleFontsHelper.constructURL()).toEqual(
      'https://fonts.googleapis.com/css2?family=Roboto&display=swap&subset=cyrillic'
    )
  })

  test('invalid constructURL', () => {
    expect(new GoogleFontsHelper().constructURL()).toBe(false)
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

    expect(googleFontsHelper.constructURL()).toEqual(
      'https://fonts.googleapis.com/css2?family=Roboto&family=Lato:wght@100;400'
    )
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
          wght: [400],
          ital: [100, 400]
        }
      }
    })

    expect(googleFontsHelper.constructURL()).toEqual(
      'https://fonts.googleapis.com/css2?family=Roboto&family=Lato:wght@100;400&family=Raleway:wght,ital@0,400;1,100;1,400'
    )

    expect(googleFontsHelper.getFonts()).toStrictEqual({
      families: {
        Roboto: true,
        Lato: [100, 400],
        Raleway: {
          wght: [400],
          ital: [100, 400]
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

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=Roboto&display=swap').getFonts()).toStrictEqual({
      families: {
        Roboto: true
      },
      display: 'swap'
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=Roboto&display=swap&subset=cyrillic').getFonts()).toStrictEqual({
      families: {
        Roboto: true
      },
      display: 'swap',
      subsets: ['cyrillic']
    })

    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css2?family=Roboto&display=xxx&subset=foo,bar').getFonts()).toStrictEqual({
      families: {
        Roboto: true
      },
      subsets: ['foo', 'bar']
    })
  })

  test('invalid parse', () => {
    expect(GoogleFontsHelper.parse('https://foo.bar')).toStrictEqual(new GoogleFontsHelper())
    expect(GoogleFontsHelper.parse('https://fonts.googleapis.com/css')).toStrictEqual(new GoogleFontsHelper())
  })
})
