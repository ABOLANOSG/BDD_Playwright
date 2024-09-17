const { Given, When, Then } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');
const { AccuHomePage } = require('../pageObjects/AccuHomePage');

Given(/^I am on the Main page$/, async () => {
    await expect(page, 'title does not match').toHaveTitle('Local, National, & Global Daily Weather Forecast | AccuWeather');

})
