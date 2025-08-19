const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../Pages/LoginPage.js");

test("Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("login fails with invalid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("wrong", "wrong");
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain("Username and password do not match");
});
