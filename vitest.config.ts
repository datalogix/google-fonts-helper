import { defineConfig, coverageConfigDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      include: ['src/**'],
      exclude: [
        'src/google-fonts-metadata.ts',
        ...coverageConfigDefaults.exclude
      ]
    }
  }
})
