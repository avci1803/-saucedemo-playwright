import BasePage from "./BasePage.js";

export default class LoginPage extends BasePage {
  constructor(page) {
    super(page); // BasePage'in constructor'ını çağırır
    this.page = page;
    this.userNameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goTo() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(userName, password) {
    await this.userNameInput.fill(userName);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}
