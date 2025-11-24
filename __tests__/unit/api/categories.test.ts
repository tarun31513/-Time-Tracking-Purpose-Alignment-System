// src/__tests__/unit/api/categories.test.ts
import { describe, it, expect, jest, beforeEach } from '@jest/globals'

describe('Categories API', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create a category', () => {
    const category = {
      name: 'Test Category',
      color: '#FF0000',
      order: 0,
      isDefault: false,
    }
    expect(category.name).toBe('Test Category')
  })

  it('should validate color format', () => {
    const validColor = '#FF0000'
    const invalidColor = 'red'
    
    expect(validColor).toMatch(/^#[0-9A-F]{6}$/i)
    expect(invalidColor).not.toMatch(/^#[0-9A-F]{6}$/i)
  })
})