const {  test, expect } = require('@playwright/test');
const { AccuHomePage } = require('../pageObjects/AccuHomePage');
const { ResultSearchPage } = require('../pageObjects/ResultSearchPage');
const { stringsData } = require('../testData/dataToInputs');

test('Interactions in Accuweather home page', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const accuHomePage = new AccuHomePage(page);
    const resultSearch= new ResultSearchPage(page);
    await accuHomePage.goTo();
    //assert page is open
    await expect(page, 'title does not match').toHaveTitle('Local, National, & Global Daily Weather Forecast | AccuWeather');

    await accuHomePage.clickPrivacyButton();

    await accuHomePage.fillInputSearch(stringsData.searchNewYork);
    await accuHomePage.selectFirstOption();
    
    const resultText = await resultSearch.getResulText();
    console.log(resultText);
    await expect(resultText, 'The result founded does not match').toContain(stringsData.expectedH1);
    await resultSearch.backToHome();
})