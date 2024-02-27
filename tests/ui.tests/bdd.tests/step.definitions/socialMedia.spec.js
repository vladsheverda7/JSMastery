const { When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const MainPage = require('../../../../pages/main.page');
const { getPage, getContext } = require('./hooks');

let page;
let context;

Before(async () => {
    page = getPage();
    context = getContext();
});

When(/^the user clicks social (.*)$/, async socialMedia => {
    const mainPage = new MainPage(page);
    const socialMediaIcon = await mainPage.getFooter.getSocialMedia(socialMedia);
    await socialMediaIcon.click();
});

Then(/^corresponding social media (.*) is opened$/, async link => {
    const pagePromise = context.waitForEvent('page');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    await expect(await newPage).toHaveURL(link);
});
