// playwright.config.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: "on",
    video: "retain-on-failure",
    baseURL: "https://www.saucedemo.com",
  },
  testDir: "./tests",
  retries: 1,
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
});
