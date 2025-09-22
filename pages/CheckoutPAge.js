export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.locator("//button[@data-test='checkout']");
    this.firstName = page.locator("//input[contains(@placeholder,'First')]"); // xpath contains method
    this.lastName = page.locator("input[name*='last']"); // css contains selector
    this.postalCode = page.locator("(//div)[23]"); // xpath index/position
  }
}
