import BasePage from "./BasePage.js";
export default class LoginPage extends BasePage {
  constructor(page) {
    super(page); // BasePage'in constructor'ını çağırır
    this.page = page;
    this.userNameInput = this.page.locator("#user-name");
    this.passwordInput = this.page.locator("#password");
    this.loginButton = this.page.locator("#login-button");
    this.errorMessage = this.page.locator('[data-test="error"]');
  }

  async goToLoginPage() {
    await this.navigate("https://www.saucedemo.com/");
  }

  async login(userName, password) {
    await this.fill(this.userNameInput, userName);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}
