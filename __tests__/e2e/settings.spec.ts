// src/__tests__/e2e/settings.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Settings', () => {
  test('should redirect to sign in when not authenticated', async ({ page }) => {
    await page.goto('/settings')
    await expect(page).toHaveURL(/\/auth\/signin/)
  })
})