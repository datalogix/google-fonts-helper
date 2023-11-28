import { join } from 'node:path'
import { existsSync, readFileSync, rmSync } from 'node:fs'
import { temporaryDirectory } from 'tempy'
import { describe, test, expect } from 'vitest'
import { constructURL, merge, download } from '../src'

describe('download', () => {
  test('simple', async () => {
    const outputDir = temporaryDirectory()
    const stylePath = 'font.css'
    const fontsDir = 'fonts'

    await download('https://fonts.googleapis.com/css2?family=Roboto&family=Lato:wght@100;400&family=Raleway:ital,wght@0,100;0,400;1,400', {
      outputDir,
      stylePath,
      fontsDir
    }).execute()

    expect(existsSync(join(outputDir, stylePath))).toBe(true)
    expect(existsSync(join(outputDir, fontsDir))).toBe(true)

    rmSync(outputDir, { recursive: true, force: true })
  }, 60000)

  test('with a text', async () => {
    const outputDir = temporaryDirectory()
    const stylePath = 'font.css'
    const fontsDir = 'fonts'

    await download('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&text=example', {
      outputDir,
      stylePath,
      fontsDir
    }).execute()

    expect(existsSync(join(outputDir, stylePath))).toBe(true)
    expect(existsSync(join(outputDir, fontsDir))).toBe(true)

    rmSync(outputDir, { recursive: true, force: true })
  }, 60000)

  test('complex text', async () => {
    const outputDir = temporaryDirectory()
    const stylePath = 'font.css'
    const fontsDir = 'fonts'

    await download('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&text=A%C4%84BC%C4%86DE%C4%98FGHIJKL%C5%81MN%C5%83O%C3%93PRSTUWXYZ%C5%BB%C5%B9a%C4%85bc%C4%87de%C4%99fghijkl%C5%82mn%C5%84o%C3%B3prstuwxyz%C5%BC%C5%BA1234567890+`!@%23$%25^%26*()-=_%2B%5B%5D%7B%7D%5C|;\':%22,./%3C%3E?', {
      outputDir,
      stylePath,
      fontsDir
    }).execute()

    expect(existsSync(join(outputDir, stylePath))).toBe(true)
    expect(existsSync(join(outputDir, fontsDir))).toBe(true)

    rmSync(outputDir, { recursive: true, force: true })
  }, 60000)

  test('force overwriting when a different url', async () => {
    const outputDir = temporaryDirectory()
    const stylePath = 'font.css'
    const fontsDir = 'fonts'
    const config = {
      families: {
        Roboto: true
      }
    }

    let url = constructURL(config) || ''

    await download(url, { outputDir, stylePath, fontsDir }).execute()

    expect(existsSync(join(outputDir, stylePath))).toBe(true)
    expect(existsSync(join(outputDir, fontsDir))).toBe(true)
    expect(readFileSync(join(outputDir, stylePath), 'utf-8')).toContain(url)

    url = constructURL(merge(config, { families: { Lato: true } })) || ''

    await download(url, { outputDir, stylePath, fontsDir }).execute()

    expect(existsSync(join(outputDir, stylePath))).toBe(true)
    expect(existsSync(join(outputDir, fontsDir))).toBe(true)
    expect(readFileSync(join(outputDir, stylePath), 'utf-8')).toContain(url)

    rmSync(outputDir, { recursive: true, force: true })
  }, 60000)

  test('download only once', async () => {
    const outputDir = temporaryDirectory()
    const stylePath = 'font.css'
    const fontsDir = 'fonts'
    const config = {
      families: {
        Roboto: true
      }
    }

    const url = constructURL(config) || ''

    await download(url, { outputDir, stylePath, fontsDir }).execute()

    expect(existsSync(join(outputDir, stylePath))).toBe(true)
    expect(existsSync(join(outputDir, fontsDir))).toBe(true)
    expect(readFileSync(join(outputDir, stylePath), 'utf-8')).toContain(url)
    rmSync(join(outputDir, fontsDir), { recursive: true, force: true })

    await download(url, { outputDir, stylePath, fontsDir }).execute()

    expect(existsSync(join(outputDir, stylePath))).toBe(true)
    expect(existsSync(join(outputDir, fontsDir))).toBe(false)

    rmSync(outputDir, { recursive: true, force: true })
  }, 60000)

  test('base64', async () => {
    const outputDir = temporaryDirectory()
    const stylePath = 'font.css'
    const fontsDir = 'fonts'

    await download('https://fonts.googleapis.com/css2?family=Roboto', {
      base64: true,
      outputDir,
      stylePath,
      fontsDir
    }).execute()

    expect(existsSync(join(outputDir, stylePath))).toBe(true)
    expect(existsSync(join(outputDir, fontsDir))).toBe(false)

    rmSync(outputDir, { recursive: true, force: true })
  }, 60000)

  test('invalid', async () => {
    await expect(download('https://foo.bar').execute()).rejects.toEqual(new Error('Invalid Google Fonts URL'))
  })
})
