import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig(
  { ignores: ['dist/**'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  stylistic.configs.recommended,
  stylistic.configs.customize({
    braceStyle: '1tbs',
  }),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
)
