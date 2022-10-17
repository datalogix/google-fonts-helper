import { describe, test, expect } from 'vitest'
import { constructURL } from '../src'

describe('constructURL', () => {
  test('construct url v2', () => {
    expect(constructURL({
      families: {
        'Droid+Serif': true,
        'Open Sans': true,
        'Roboto%2BMono': true
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Droid+Serif&family=Open+Sans&family=Roboto+Mono')

    expect(constructURL({
      families: {
        Roboto: [100, 200, 300, 400]
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400')

    expect(constructURL({
      families: {
        Roboto: {
          ital: [400]
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,400')

    expect(constructURL({
      families: {
        Roboto: {
          wght: [600, 700, 800, 400]
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700;800')

    expect(constructURL({
      families: {
        Roboto: {
          wght: [400, 600, 700, 800]
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700;800')

    expect(constructURL({
      families: {
        Roboto: {
          wght: [300, 400, 700],
          ital: [400]
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400')

    expect(constructURL({
      families: { Roboto: true }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto')

    expect(constructURL({
      families: { Roboto: true },
      text: 'Foo Bar'
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto&text=Foo+Bar')

    expect(constructURL({
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
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto&family=Lato:wght@100&family=Raleway:ital,wght@0,400;1,100;1,400')

    expect(constructURL({
      families: {
        '': true,
        Roboto: true,
        Lato: {
          normal: 100
        },
        Raleway: {
          regular: [400],
          italic: [100, 400]
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto&family=Lato:wght@100&family=Raleway:ital,wght@0,400;1,100;1,400')
  })

  test('construct url v1', () => {
    expect(constructURL({
      families: { Roboto: true },
      display: 'swap',
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=cyrillic')

    expect(constructURL({
      families: { Roboto: true, Lato: [100] },
      subsets: ['foo', 'bar']
    })).toEqual('https://fonts.googleapis.com/css?family=Roboto|Lato&subset=foo,bar')

    expect(constructURL({
      families: {
        Roboto: true
      },
      display: 'swap',
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=cyrillic')

    expect(constructURL({
      families: {
        Cantarell: {
          ital: true
        },
        'Droid Serif': {
          wght: [700]
        }
      },
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Cantarell:ital|Droid+Serif:bold&subset=cyrillic')

    expect(constructURL({
      families: {
        Cantarell: {
          ital: [700]
        },
        'Droid Serif': {
          wght: [700]
        }
      },
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Cantarell:bolditalic|Droid+Serif:bold&subset=cyrillic')

    expect(constructURL({
      families: {
        'Droid Serif': {
          wght: true,
          ital: 100
        }
      },
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Droid+Serif:wght,ital&subset=cyrillic')

    expect(constructURL({
      families: {
        'Droid Serif': {
          ital: 700,
          wght: true
        }
      },
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Droid+Serif:wght,bolditalic&subset=cyrillic')

    expect(constructURL({
      families: {
        'Droid Serif': {
          ital: false,
          wght: true
        }
      },
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Droid+Serif&subset=cyrillic')

    expect(constructURL({
      families: {
        Cantarell: true,
        'Droid Serif': 400
      },
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Cantarell|Droid+Serif&subset=cyrillic')

    expect(constructURL({
      families: {
        'Droid Serif': {
          ital: [400, 600, 700, 800]
        },
        Roboto: {
          wght: [400, 600, 700, 800]
        }
      },
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Droid+Serif:ital,bolditalic|Roboto:wght,bold&subset=cyrillic')

    expect(constructURL({
      families: {
        'Droid Serif': {
          italic: [400, 600, 700, 800]
        },
        Roboto: {
          normal: [400, 600, 700, 800]
        }
      },
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Droid+Serif:ital,bolditalic|Roboto:wght,bold&subset=cyrillic')

    expect(constructURL({
      families: {
        'Droid Serif': {
          i: [400, 600, 700, 800]
        },
        Roboto: {
          regular: [400, 600, 700, 800]
        }
      },
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Droid+Serif:ital,bolditalic|Roboto:wght,bold&subset=cyrillic')

    expect(constructURL({
      families: {
        '': true,
        Roboto: 700
      },
      subsets: 'cyrillic'
    })).toEqual('https://fonts.googleapis.com/css?family=Roboto:bold&subset=cyrillic')
  })

  test('invalid', () => {
    expect(constructURL()).toBe(false)
    expect(constructURL({})).toBe(false)
    expect(constructURL({ families: {} })).toBe(false)
    expect(constructURL({ display: 'swap' })).toBe(false)
    expect(constructURL({ subsets: 'foo' })).toBe(false)
    expect(constructURL({ subsets: ['foo', 'bar'] })).toBe(false)
  })
})
