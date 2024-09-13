const {test, expect } = require('@playwright/test');

test('Practice Client side', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    //Login
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator("#userEmail").fill('mxmx@gmail.com');
    await page.locator("#userPassword").fill('A_12345678r');
    await page.locator('//input[@id = "login"]').click();
    await expect(page.locator('//*[@id="sidebar"]')).toBeEnabled();
    //not recomendable to use wait for load state it tends to flakiness instead use waitFor
    //await page.waitForLoadState('networkidle');
    //Obtain data from cards
    await page.locator('.card-body').first().waitFor();
    const titles = await page.locator('.card-body').allTextContents();
    console.log(titles);

});