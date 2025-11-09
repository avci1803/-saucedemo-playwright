import BasePage from "./BasePage.js";
import { expect } from "playwright/test";

export default class InventoryPage extends BasePage {
  constructor(page) {
    super(page); // BasePage'in constructor'ını çağırır
    this.page = page;
    this.addToCart_Bike = this.page.locator(
      "button[id='add-to-cart-sauce-labs-bike-light']"
    );
    this.addToCart_Backpack = this.page.locator(
      "button#add-to-cart-sauce-labs-backpack"
    );
    this.cartIcon = this.page.locator("a[data-test='shopping-cart-link']");
    this.headerTitleYourCart = this.page.getByText("Your Cart", {
      exact: true,
    });
  }
  async addItemToCart() {
    await this.click(this.addToCart_Bike);
    await this.click(this.addToCart_Backpack);
  }

  async goTochart() {
    await this.click(this.cartIcon);
  }
}
