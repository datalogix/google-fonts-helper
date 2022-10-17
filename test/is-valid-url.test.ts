import { describe, test, expect } from 'vitest'
import { isValidURL } from '../src'

describe('validates url', () => {
  test('valid', () => {
    expect(isValidURL('https://fonts.googleapis.com/css?family=Roboto')).toBe(true)
    expect(isValidURL('https://fonts.googleapis.com/css2?family=Roboto')).toBe(true)
  })

  test('invalid', () => {
    expect(isValidURL('https://font.googleapis.com/css?family=Roboto')).toBe(false)
    expect(isValidURL('https://fonts.google.com/css2?family=Roboto')).toBe(false)
  })
})
