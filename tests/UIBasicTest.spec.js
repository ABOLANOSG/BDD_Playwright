const { test, expect } = require('@playwright/test');

test.only('Practice creating a user', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.locator('//button[@id="signup"]').click();
    await page.locator('//input[@id="firstName"]').fill('Andrea');
    await page.locator('//input[@id="lastName"]').fill('Ramos');
    await page.locator('//input[@id="email"]').fill('912267klklk@gmail.com');
    await page.locator('//input[@id="password"]').fill('randomString');
    await page.locator('//button[@id="submit"]').click();
    await expect(page, 'No se pudo crear usuario, verifica que ingresaste todos los datos o que no existe una cuenta con los mismos datos').toHaveTitle('My Contacts');
    //await expect(page, 'No se pudo acceder a la página, intenta crear un usuario').toHaveTitle('My Contacts');

});

test('Browser without context', async ({page}) => {
    await page.goto('https://www.google.com.mx/');
    console.log('this is page title', await page.title());
    await expect(page).toHaveTitle("Google");

})