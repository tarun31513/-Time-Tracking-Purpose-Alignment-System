// src/__tests__/unit/api/plans.test.ts
import { describe, it, expect } from '@jest/globals'

describe('Plans API', () => {
  it('should calculate duration correctly', () => {
    const plan = {
      durationMin: 90,
    }
    
    const hours = Math.floor(plan.durationMin / 60)
    const minutes = plan.durationMin % 60
    
    expect(hours).toBe(1)
    expect(minutes).toBe(30)
  })
})