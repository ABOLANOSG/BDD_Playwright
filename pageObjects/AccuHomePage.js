//www.accuweather.com/
class AccuHomePage {
    constructor(page) {
        this.page = page;
        this.policyButton = page.locator("//div[@class='banner-button policy-accept']");
        this.searchInput = page.locator("//input[@class = 'search-input']");
        this.firstOption = page.locator("(//*[@class='search-bar-result__name'])[1]");
        this.firstRecentLocation = page.locator("");
        this.currentLocationOption = page.locator("");
    }
    async goTo() {
        await this.page.goto("https://www.accuweather.com/");
    };

    async clickPrivacyButton() {
        await this.policyButton.click();
    };

    async fillInputSearch(text) {
        await this.searchInput.click();
        await this.searchInput.type(text);
    };

    async selectFirstOption() {
        await this.firstOption.click();
    }
}

module.exports = {AccuHomePage};