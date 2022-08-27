import { test, expect } from '@playwright/test'

test('should navigate to the maker page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('./')
  // Find an element with the text 'Maker' and click on it
  await page.click('text=Maker')
  // The new url should be "/maker" (baseURL is used there)
  await expect(page).toHaveURL('./maker')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('Make Your Roadmap')
})