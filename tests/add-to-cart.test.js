import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import InventoryPage from "../pages/InventoryPage.js";

test("should add item to cart and navigate to cart page", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addItemToCart();
  await inventoryPage.goTochart();
  await inventoryPage.verifyTitle("Swag Labs");
});
