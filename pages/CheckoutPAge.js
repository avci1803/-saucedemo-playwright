import BasePage from "./BasePage";
import { expect } from "playwright/test";

export default class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);

    this.checkoutBtn = page.locator("//button[@data-test='checkout']");
    this.firstNameInput = page.locator(
      "//input[contains(@placeholder,'First')]"
    ); // xpath contains method
    this.lastNameInput = page.locator("input[name*='last']"); // css contains selector
    this.postalCodeInput = page.getByPlaceholder("Zip/Postal Code");
    this.continueBtn = this.page.getByRole("button", { name: "Continue" });
    this.checkoutYourInformationHeader = page.getByText(
      "Checkout: Your Information",
      { exact: true }
    );
    this.finishBtn = this.page.getByRole("button", { name: "Finish" });
    this.orderCompleteHeader = this.page.getByRole("heading", {
      name: "Thank you for your order!",
    });
  }

  async clickCheckoutBtn() {
    this.click(this.checkoutBtn);
  }

  async verifyYourInformationPage() {
    await this.verifyTextOnPage("Checkout: Your Information");
  }

  async fillYourInformationAndContinue(firstName, lastName, postalCode) {
    await this.fill(this.firstNameInput, firstName);
    await this.fill(this.lastNameInput, lastName);
    await this.fill(this.postalCodeInput, postalCode);
    await this.click(this.continueBtn);
  }
  async clickFinishBtn() {
    await this.click(this.finishBtn);
  }

  async verifyOrderComplete() {
    await expect(this.orderCompleteHeader).toBeVisible();
  }
}
