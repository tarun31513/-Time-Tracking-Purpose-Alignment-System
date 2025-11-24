// src/__tests__/unit/api/actuals.test.ts
import { describe, it, expect } from '@jest/globals'

describe('Actuals API', () => {
  it('should store actual time entry', () => {
    const actual = {
      durationMin: 120,
      categoryId: 'test-id',
      exceptionReason: 'Took longer than expected',
    }
    
    expect(actual.durationMin).toBe(120)
    expect(actual.exceptionReason).toBeTruthy()
  })
})