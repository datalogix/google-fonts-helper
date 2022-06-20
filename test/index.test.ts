import { join } from 'path'
import { describe, test, expect } from 'vitest'
import del from 'del'
import { temporaryDirectory } from 'tempy'
import { pathExistsSync } from 'fs-extra'
import { constructURL, merge, parse, download } from '../src'

describe('Google Fonts Helper', () => {
  test('constructURL', () => {
    // v2
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

    // v1
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

  test('constructURL invalid', () => {
    expect(constructURL()).toBe(false)
    expect(constructURL({})).toBe(false)
    expect(constructURL({ families: {} })).toBe(false)
    expect(constructURL({ display: 'swap' })).toBe(false)
    expect(constructURL({ subsets: 'foo' })).toBe(false)
    expect(constructURL({ subsets: ['foo', 'bar'] })).toBe(false)
  })

  test('merge', () => {
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

  test('merge mutiple', () => {
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

  test('parse', () => {
    // v2
    expect(parse('https://fonts.googleapis.com/css2?family=Roboto')).toStrictEqual({
      families: {
        Roboto: true
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

    // v1
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

  test('parse invalid', () => {
    expect(parse('https://fonts.googleapis.com/css2?family=')).toStrictEqual({})
    expect(parse('https://foo.bar')).toStrictEqual({})
    expect(parse('https://fonts.googleapis.com/css')).toStrictEqual({})
  })

  test('download', async () => {
    const outputDir = temporaryDirectory()
    const stylePath = 'font.css'
    const fontsDir = 'fonts'

    await download('https://fonts.googleapis.com/css2?family=Roboto&family=Lato:wght@100;400&family=Raleway:ital,wght@0,100;0,400;1,400', {
      outputDir,
      stylePath,
      fontsDir
    }).execute()

    expect(pathExistsSync(join(outputDir, stylePath))).toBe(true)
    expect(pathExistsSync(join(outputDir, fontsDir))).toBe(true)

    await del(outputDir, { force: true })
  }, 60000)

  test('download base64', async () => {
    const outputDir = temporaryDirectory()
    const stylePath = 'font.css'
    const fontsDir = 'fonts'

    await download('https://fonts.googleapis.com/css2?family=Roboto', {
      base64: true,
      outputDir,
      stylePath,
      fontsDir
    }).execute()

    expect(pathExistsSync(join(outputDir, stylePath))).toBe(true)
    expect(pathExistsSync(join(outputDir, fontsDir))).toBe(false)

    await del(outputDir, { force: true })
  }, 60000)

  test('download invalid', async () => {
    await expect(download('https://foo.bar').execute()).rejects.toEqual(new Error('Invalid Google Fonts URL'))
  })
})
