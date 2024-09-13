const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');

test('Login with POM', async ({page}) => {
    const email = 'mxmx@gmail.com';
    const password = 'A_12345678r';
const loginPage = new LoginPage(page);
await loginPage.goTo();
await expect(page).toHaveTitle("Let's Shop");

await loginPage.fillInputUser(email, password);

})