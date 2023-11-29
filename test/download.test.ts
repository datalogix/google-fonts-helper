import { join } from 'node:path'
import { existsSync, readFileSync, rmSync } from 'node:fs'
import { temporaryDirectory } from 'tempy'
import { describe, test, expect } from 'vitest'
import { constructURL, merge, download, type GoogleFonts } from '../src'

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

  test('force overwriting when a different url', async () => {
    const outputDir = temporaryDirectory()
    const stylePath = 'font.css'
    const fontsDir = 'fonts'
    const config: GoogleFonts = {
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
    const config: GoogleFonts = {
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
