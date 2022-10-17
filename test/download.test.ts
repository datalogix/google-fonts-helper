import { join } from 'path'
import { describe, test, expect } from 'vitest'
import { deleteAsync } from 'del'
import { temporaryDirectory } from 'tempy'
import { pathExists, readFile } from 'fs-extra'
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

    expect(await pathExists(join(outputDir, stylePath))).toBe(true)
    expect(await pathExists(join(outputDir, fontsDir))).toBe(true)

    await deleteAsync(outputDir, { force: true })
  }, 60000)

  test('overwriting', async () => {
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

    expect(await pathExists(join(outputDir, stylePath))).toBe(true)
    expect(await pathExists(join(outputDir, fontsDir))).toBe(true)
    expect(await readFile(join(outputDir, stylePath), 'utf-8')).toContain(url)

    url = constructURL(merge(config, { families: { Lato: true } })) || ''

    await download(url, { outputDir, stylePath, fontsDir }).execute()

    expect(await pathExists(join(outputDir, stylePath))).toBe(true)
    expect(await pathExists(join(outputDir, fontsDir))).toBe(true)
    expect(await readFile(join(outputDir, stylePath), 'utf-8')).toContain(url)

    await deleteAsync(outputDir, { force: true })
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

    expect(await pathExists(join(outputDir, stylePath))).toBe(true)
    expect(await pathExists(join(outputDir, fontsDir))).toBe(false)

    await deleteAsync(outputDir, { force: true })
  }, 60000)

  test('invalid', async () => {
    await expect(download('https://foo.bar').execute()).rejects.toEqual(new Error('Invalid Google Fonts URL'))
  })
})
