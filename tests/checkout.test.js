import { test, expect } from "@playwright/test";
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../Pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

test("Checkout successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login("standard_user", "secret_sauce");
  await inventoryPage.addItemToCart();
  await inventoryPage.goTochart();
  await checkoutPage.clickCheckoutBtn();
  await checkoutPage.verifyYourInformationPage();
  await checkoutPage.fillYourInformationAndContinue("Mehmet", "Avci", "65428");
  await checkoutPage.verifyTextOnPage("Checkout: Overview");
  await checkoutPage.clickFinishBtn();
  await checkoutPage.verifyOrderComplete();
});
