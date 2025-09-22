export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCart_Bike = page.locator(
      "button[id='add-to-cart-sauce-labs-bike-light']"
    );
    this.addToCart_Backpack = page.locator(
      "button#add-to-cart-sauce-labs-backpack"
    );
    this.cartIcon = page.locator("a[data-test='shopping-cart-link']");
  }
  async addItemToCart() {
    await this.addToCart_Bike.click();
    await this.addToCart_Backpack.click();
  }

  async goTochart() {
    await this.cartIcon.click();
  }
}
