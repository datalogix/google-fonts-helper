import { describe, test, expect } from 'vitest'
import { constructURL } from '../src'

describe('constructURL', () => {
  test('single family', () => {
    expect(constructURL({
      families: { Roboto: true }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto')
  })

  test('multiple families', () => {
    expect(constructURL({
      families: {
        'Droid+Serif': true,
        'Open Sans': true,
        'Roboto%2BMono': true
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Droid+Serif&family=Open+Sans&family=Roboto+Mono')
  })

  test('single style', () => {
    expect(constructURL({
      families: {
        Roboto: {
          italic: true
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto:ital@1')

    expect(constructURL({
      families: {
        Roboto: {
          ital: [400]
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto:ital@1')

    expect(constructURL({
      families: {
        Roboto: {
          ital: [400, 700]
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,400;1,700')

    expect(constructURL({
      families: {
        Roboto: {
          wght: [700, 400, 300]
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700')
  })

  test('mutiple families and styles', () => {
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

  test('multiple styles', () => {
    expect(constructURL({
      families: {
        Roboto: [100, 300, 400]
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400')
    expect(constructURL({
      families: {
        Roboto: {
          wght: [300, 400, 700],
          ital: [400]
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400')
  })

  test('axis', () => {
    expect(constructURL({
      families: {
        'Crimson Pro': '200..400'
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200..400')

    expect(constructURL({
      families: {
        'Crimson Pro': {
          wght: '200..400'
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200..400')

    expect(constructURL({
      families: {
        'Crimson Pro': {
          italic: '200..400'
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@1,200..400')

    expect(constructURL({
      families: {
        'Crimson Pro': {
          wght: '200..900',
          italic: '200..700'
        }
      }
    })).toEqual('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..700')
  })

  test('text', () => {
    expect(constructURL({
      families: { Roboto: true },
      text: 'Foo Bar'
    })).toEqual('https://fonts.googleapis.com/css2?family=Roboto&text=Foo+Bar')
  })

  test('invalid', () => {
    expect(constructURL()).toBe(false)
    expect(constructURL({})).toBe(false)
    expect(constructURL({ families: {} })).toBe(false)
    expect(constructURL({ display: 'swap' })).toBe(false)
    // @ts-ignore
    expect(constructURL({ subsets: 'foo' })).toBe(false)
    // @ts-ignore
    expect(constructURL({ subsets: ['foo', 'bar'] })).toBe(false)
  })
})
