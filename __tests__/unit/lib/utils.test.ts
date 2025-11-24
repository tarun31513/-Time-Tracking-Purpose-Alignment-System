// src/__tests__/unit/lib/utils.test.ts
import { describe, it, expect } from '@jest/globals'
import { formatDuration, parseDuration } from '@/lib/utils'

describe('Utils', () => {
  describe('formatDuration', () => {
    it('should format minutes only', () => {
      expect(formatDuration(30)).toBe('30m')
    })

    it('should format hours only', () => {
      expect(formatDuration(120)).toBe('2h')
    })

    it('should format hours and minutes', () => {
      expect(formatDuration(90)).toBe('1h 30m')
    })
  })

  describe('parseDuration', () => {
    it('should parse hours and minutes', () => {
      expect(parseDuration('1h 30m')).toBe(90)
    })

    it('should parse hours only', () => {
      expect(parseDuration('2h')).toBe(120)
    })

    it('should parse minutes only', () => {
      expect(parseDuration('45m')).toBe(45)
    })
  })
})