import { test, expect } from "@playwright/test";
import LoginPage from "../Pages/LoginPage.js";
import testUsers from "./data/users.json";

test.describe("Login Test - Positive and Negative Scnerio", () => {
  test("Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    const valid_user = testUsers.validUser;
    await loginPage.login(valid_user.username, valid_user.password);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("login fails with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    const lockedOutUser = testUsers.lockedOutUser;
    await loginPage.login(lockedOutUser.username, lockedOutUser.password);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
