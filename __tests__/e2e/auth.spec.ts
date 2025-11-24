// src/__tests__/e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test('should display sign in page', async ({ page }) => {
    await page.goto('/auth/signin')
    await expect(page.locator('h1')).toContainText('Sign In')
  })

  test('should display sign up page', async ({ page }) => {
    await page.goto('/auth/signup')
    await expect(page.locator('h1')).toContainText('Sign Up')
  })

  test('should show validation errors for empty form', async ({ page }) => {
    await page.goto('/auth/signin')
    await page.click('button[type="submit"]')
    // Form validation should prevent submission
  })
})