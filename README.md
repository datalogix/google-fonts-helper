# google-fonts-helper

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [Google Fonts Helper](https://developers.google.com/fonts)

[📖 **Release Notes**](./CHANGELOG.md)

## Install

Install using npm or yarn:

```bash
npm install google-fonts-helper
# or
yarn add google-fonts-helper
```

Import into your Node.js project:

```js
const { GoogleFontsHelper } = require('google-fonts-helper')
// or
import { GoogleFontsHelper } from 'google-fonts-helper'
```

## Usage

```ts
const googleFontsHelper = new GoogleFontsHelper({ families: { Roboto: true } })
googleFontsHelper.constructURL() // https://fonts.googleapis.com/css2?family=Roboto

await GoogleFontsHelper.download('https://fonts.googleapis.com/css2?family=Roboto', {
  base64: false,
  overwriting: false,
  outputDir: './',
  stylePath: 'fonts.css',
  fontsDir: 'fonts',
  fontsPath: './fonts'
})
```

## GoogleFontsHelper class

### `constructor(fonts: GoogleFonts = {})`
### `constructURL(): string`
### `merge(...values: Array<GoogleFonts | GoogleFontsHelper>): void`
### `isValidURL(url: string): boolean`
### `parse(url: string): GoogleFontsHelper`
### `download(url: string, option?: DownloadOptions): Promise<void>`

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
