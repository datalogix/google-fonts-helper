# google-fonts-helper

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [Google Fonts Helper](https://developers.google.com/fonts)

[📖 **Release Notes**](./CHANGELOG.md)

## Install

Install using npm, yarn or pnpm:

```bash
npm install google-fonts-helper
# or
yarn add google-fonts-helper
# or
pnpm add google-fonts-helper
```

Import into your Node.js project:

```js
const { constructURL, merge, isValidURL, parse, download } = require('google-fonts-helper')
// or
import { constructURL, merge, isValidURL, parse, download } from 'google-fonts-helper'
```

## Usage

### `constructURL(): string`

```ts
constructURL({ families: { Roboto: true } }) // https://fonts.googleapis.com/css2?family=Roboto
constructURL({ families: { Roboto: true, Lato: true } }) // https://fonts.googleapis.com/css2?family=Roboto&family=Lato
```

### `merge(...fonts: GoogleFonts[]): GoogleFonts`

```ts
merge({ families: { Roboto: true } }, { families: { Lato: true } })  // { families: { Roboto: true, Lato: true } }
merge({ families: { Roboto: true } }, { families: { Roboto: [300, 400] } })  // { families: { Roboto: [300, 400] } }
```

### `isValidURL(url: string): boolean`

```ts
isValidURL('https://fonts.googleapis.com/css2?family=Roboto') // true
isValidURL('https://foo.bar') // false
```

### `parse(url: string): GoogleFonts`

```ts
parse('https://fonts.googleapis.com/css2?family=Roboto') // { families: { Roboto: true } }
parse('https://fonts.googleapis.com/css2?family=Roboto&family=Lato') // { families: { Roboto: true, Lato: true } }
parse('https://foo.bar') // {}
```

### `download(url: string, option?: DownloadOptions): Promise<void>`

```ts
const downloader = download('https://fonts.googleapis.com/css2?family=Roboto', {
  base64: false,
  overwriting: false,
  outputDir: './',
  stylePath: 'fonts.css',
  fontsDir: 'fonts',
  fontsPath: './fonts'
})

downloader.hook('download-font:before', (font: FontInputOutput) {
  console.log(font)
})

downloader.hook('download-font:done', (font: FontInputOutput) {
  console.log(font)
})

await downloader.execute()
```

## License

[MIT License](./LICENSE)

Copyright (c) Ricardo Gobbo de Souza

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/google-fonts-helper/latest.svg
[npm-version-href]: https://npmjs.com/package/google-fonts-helper

[npm-downloads-src]: https://img.shields.io/npm/dt/google-fonts-helper.svg
[npm-downloads-href]: https://npmjs.com/package/google-fonts-helper

[github-actions-ci-src]: https://github.com/ricardogobbosouza/google-fonts-helper/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/ricardogobbosouza/google-fonts-helper/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/ricardogobbosouza/google-fonts-helper.svg
[codecov-href]: https://codecov.io/gh/ricardogobbosouza/google-fonts-helper

[license-src]: https://img.shields.io/npm/l/google-fonts-helper.svg
[license-href]: https://npmjs.com/package/google-fonts-helper
