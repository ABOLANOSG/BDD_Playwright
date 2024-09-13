// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  /*  */
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName : 'chromium',
    viewport: { width: 1000, height: 600},
    headless : false
  },
  /*projects: [
    {
      name: 'chromium',
      use: {
        browserName : 'chromium',
        viewport: { width: 1300, height: 1000},
        headless : false
      }
    }
  ]*/

});
