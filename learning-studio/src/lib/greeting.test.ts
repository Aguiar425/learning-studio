import { describe, expect, it } from 'vitest'
import { greeting } from './greeting'

describe('greeting', () => {
  it('greets a normal name', () => {
    expect(greeting('Miguel')).toBe('Hello, Miguel!')
  })

  it('falls back to "empty" for an empty name', () => {
    expect(greeting('')).toBe('Hello, empty!')
  })

  it('trims extra spaces around the name', () => {
    expect(greeting('   Miguel   ')).toBe('Hello, Miguel!')
  })
})
