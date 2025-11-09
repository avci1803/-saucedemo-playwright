// playwright.config.js

const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  // Tüm testlerin çalışacağı dizin
  testDir: "./tests", //

  // Testlerin kaç kez tekrar deneneceği (Tekrarlanan hataları azaltmak için)
  retries: 1, // 0 yerine 1 veya 2 yapılması önerilir.

  // Testlerin paralel çalışma worker sayısı (genellikle CPU çekirdeği sayısıdır, 4 varsayılan)
  workers: process.env.CI ? 1 : undefined,

  // Testleri durdurmadan önce toplam süre (milisaniye)
  timeout: 30 * 1000,

  // Tek bir eylemin (click, fill vb.) ne kadar bekleneceği (milisaniye)
  use: {
    // Sayfalarda yönlendirme, tıklama, doldurma gibi işlemler için beklenilecek maksimum süre
    actionTimeout: 0, // 0 = default (genellikle 10000ms'dir, ancak burada varsayılanı kullanırız)

    // Genel olarak tüm sayfada beklenecek maksimum süre
    navigationTimeout: 30 * 1000,

    // baseURL kullanımı: Tüm go to() metotlarında tam URL girmek yerine bu kullanılır.
    baseURL: "https://www.saucedemo.com", //

    // Görünüm ayarları
    headless: true, //
    viewport: { width: 1280, height: 720 }, //

    // Hata durumunda alınacak materyaller
    screenshot: "only-on-failure", // "on" yerine sadece hata durumunda almak daha verimlidir.
    video: "retain-on-failure", //
  },

  // Tarayıcıları ve ayarları tanımlar
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },

    // İhtiyaca göre firefox ve webkit eklenebilir.
  ],

  // Raporlama ayarları
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]], //
});
