// src/__tests__/integration/api/weekly-summary.test.ts
import { describe, it, expect } from '@jest/globals'

describe('Weekly Summary API Integration', () => {
  it('should calculate weekly summary correctly', () => {
    const plans = [
      { durationMin: 60 },
      { durationMin: 90 },
    ]
    
    const actuals = [
      { durationMin: 55 },
      { durationMin: 95 },
    ]
    
    const totalPlanned = plans.reduce((sum, p) => sum + p.durationMin, 0)
    const totalActual = actuals.reduce((sum, a) => sum + a.durationMin, 0)
    const variance = totalActual - totalPlanned
    const adherenceRate = (totalActual / totalPlanned) * 100
    
    expect(totalPlanned).toBe(150)
    expect(totalActual).toBe(150)
    expect(variance).toBe(0)
    expect(adherenceRate).toBe(100)
  })
})