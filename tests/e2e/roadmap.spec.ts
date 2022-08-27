import {test, expect} from "@playwright/test"

test("homepage has link to maker page", async ({page}) => {
    await page.goto("./")
    await expect(page).toHaveTitle("Roadmap")
    const makerLink = page.locator("text=Maker")
    await expect(makerLink).toHaveAttribute("href", "/maker")
    await makerLink.click()
    await expect(page).toHaveURL("/maker")
})