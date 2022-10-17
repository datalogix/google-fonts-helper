import { describe, test, expect } from 'vitest'
import { merge } from '../src'

describe('merge', () => {
  test('simple', () => {
    expect(merge({
      families: {
        Roboto: true
      }
    }, {
      families: {
        Lato: [100, 400]
      }
    })).toStrictEqual({
      families: {
        Roboto: true,
        Lato: [100, 400]
      }
    })

    expect(merge({
      families: {
        Roboto: true
      }
    }, {
      families: {
        Roboto: [100, 400]
      }
    })).toStrictEqual({
      families: {
        Roboto: [100, 400]
      }
    })
  })

  test('mutiple', () => {
    expect(merge({
      families: {
        Roboto: true
      }
    }, {
      families: {
        Lato: [100, 400]
      }
    }, {
      families: {
        Raleway: {
          ital: [100, 400],
          wght: [400]
        }
      }
    })).toStrictEqual({
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
})
