export default class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async click(locator) {
    await this.page.click(locator);
  }

  async fill(text, locator) {
    await this.page.fill(text, locator);
  }
}
