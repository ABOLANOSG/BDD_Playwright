class ResultSearchPage {
    constructor(page) {
        this.page = page;
        this.resultCity = page.locator(".header-loc");
    }

    async getResulText() {
        return await this.resultCity.textContent();
    }

    async backToHome() {
        await this.page.goBack();
    }
};

module.exports = {ResultSearchPage};