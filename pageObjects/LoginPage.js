class LoginPage {
    constructor(page) {
        this.page = page;
        this.signInButton = page.locator('//input[@id = "login"]');
        this.inputUser = page.locator("#userEmail");
        this.inputPassword = page.locator("#userPassword");
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async fillInputUser(text, pass) {
      await this.inputUser.type(text);
      await this.inputPassword.type(pass);
      await this.signInButton.click();
    }
}
module.exports = {LoginPage};