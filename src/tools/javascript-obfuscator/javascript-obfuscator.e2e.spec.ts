import { test, expect } from '@playwright/test';

test.describe('Tool - JavascriptObfuscator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/javascript-obfuscator');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('JavascriptObfuscator - IT Tools');
  });

  test('', async ({ page }) => {

  });
});
