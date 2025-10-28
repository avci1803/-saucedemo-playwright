import { expect } from "@playwright/test";

export default class BasePage {
  constructor(page) {
    this.page = page;
  }
  async navigate(url) {
    await this.page.goto(url);
  }
  // Locator objesi bekliyor
  async click(locator) {
    await locator.click();
  }

  // Locator objesi bekler ve doldurur
  async fill(locator, text) {
    await locator.fill(text);
  }

  async verifyTitle(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  /* async verifyTextOnPage(text) {
    const locator = this.page.getByText(text, { exact: true });
    await expect(locator).toBeVisible();
  }
    */
  async verifyTextOnPage(text) {
    const locator = this.page.getByText(text);
    expect(locator).toBeVisible();
  }
}
