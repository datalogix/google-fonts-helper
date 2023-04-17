import { describe, test, expect } from 'vitest'
import { parse } from '../src'

describe('parse', () => {
  test('v2', () => {
    expect(parse('https://fonts.googleapis.com/css2?family=Roboto')).toStrictEqual({
      families: {
        Roboto: true
      }
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono')).toStrictEqual({
      families: {
        Roboto: true,
        'Roboto Mono': true
      }
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400')).toStrictEqual({
      families: {
        Roboto: {
          wght: [300, 400, 700],
          ital: [400]
        }
      }
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,400')).toStrictEqual({
      families: {
        Roboto: {
          wght: true,
          ital: [400]
        }
      }
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Roboto:ital@1')).toStrictEqual({
      families: {
        Roboto: {
          ital: true
        }
      }
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200..900')).toStrictEqual({
      families: {
        'Crimson Pro': {
          wght: '200..900'
        }
      }
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@1,200..900')).toStrictEqual({
      families: {
        'Crimson Pro': {
          wght: true,
          ital: '200..900'
        }
      }
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..700')).toStrictEqual({
      families: {
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700'
        }
      }
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Roboto&display=swap')).toStrictEqual({
      families: {
        Roboto: true
      },
      display: 'swap'
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Roboto:100')).toStrictEqual({
      families: {
        Roboto: {
          wght: [100]
        }
      }
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Roboto:100,300')).toStrictEqual({
      families: {
        Roboto: {
          wght: [100, 300]
        }
      }
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Roboto&text=Foo%20Bar')).toStrictEqual({
      families: {
        Roboto: true
      },
      text: 'Foo Bar'
    })

    expect(parse('https://fonts.googleapis.com/css2?family=Roboto&family=Lato:wght@100;400&family=Raleway:ital,wght@0,400;1,100;1,400')).toStrictEqual({
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

  test('v1', () => {
    expect(parse('https://fonts.googleapis.com/css?family=Roboto&family=Lato:&display=swap&subset=cyrillic')).toStrictEqual({
      families: {
        Roboto: true
      },
      display: 'swap',
      subsets: ['cyrillic']
    })

    expect(parse('https://fonts.googleapis.com/css?family=Cantarell:italic|Droid+Serif:bold')).toStrictEqual({
      families: {
        Cantarell: {
          ital: true
        },
        'Droid Serif': {
          wght: 700
        }
      }
    })

    expect(parse('https://fonts.googleapis.com/css?family=Droid+Serif:wght,italic')).toStrictEqual({
      families: {
        'Droid Serif': {
          wght: true,
          ital: true
        }
      }
    })

    expect(parse('https://fonts.googleapis.com/css?family=Cantarell|Droid+Serif')).toStrictEqual({
      families: {
        Cantarell: true,
        'Droid Serif': true
      }
    })

    expect(parse('https://fonts.googleapis.com/css?family=Droid+Serif')).toStrictEqual({
      families: {
        'Droid Serif': true
      }
    })

    expect(parse('https://fonts.googleapis.com/css?family=Droid+Serif:bolditalic')).toStrictEqual({
      families: {
        'Droid Serif': {
          ital: 700
        }
      }
    })
  })

  test('invalid', () => {
    expect(parse('https://fonts.googleapis.com/css2?family=')).toStrictEqual({})
    expect(parse('https://foo.bar')).toStrictEqual({})
    expect(parse('https://fonts.googleapis.com/css')).toStrictEqual({})
  })
})
