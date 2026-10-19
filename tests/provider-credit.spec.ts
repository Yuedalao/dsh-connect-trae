import { describe, expect, it } from 'vitest'
import { providerDisplayNameWithCredit } from '../src/provider-credit.ts'

describe('providerDisplayNameWithCredit', () => {
  it('keeps the base heading when the balance is unavailable', () => {
    expect(providerDisplayNameWithCredit('Trae', undefined)).toBe('Trae')
  })

  it('appends an exact remaining balance', () => {
    expect(providerDisplayNameWithCredit('Trae', 2050.25)).toBe('Trae · 2,050.25')
  })

  it('preserves zero as a real balance', () => {
    expect(providerDisplayNameWithCredit('Trae', 0)).toBe('Trae · 0')
  })
})
