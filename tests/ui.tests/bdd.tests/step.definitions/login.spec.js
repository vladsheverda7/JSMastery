const { BeforeAll, AfterAll, Before, After, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const LoginPage = require('../../../../pages/login.page');
const InventoryPage = require('../../../../pages/inventory.page');
const { loginUrl } = require('../../../../constants/index');
const { launchBrowser, closeBrowser, getPage } = require('./hooks');

let loginPage;
let page;

BeforeAll(async () => {
    await launchBrowser();
    page = getPage();
});

Before(async () => {
    page = getPage();
});

Given('the user is on Login Page', async () => {
    loginPage = new LoginPage(page, loginUrl);
    await loginPage.navigate();
});

When(/^the user logins with valid (.*) and (.*)$/, async (username, password) => {
    await loginPage.login(username, password);
});

When(/^the user logins with invalid (.*) and (.*)$/, async (username, password) => {
    await loginPage.login(username, password);
});

Then('Inventory Page is opened', async () => {
    const inventoryPage = new InventoryPage(page);
    expect(await inventoryPage.getInventoryContent.checkIsEnabled()).toBeTruthy();
});

Then('Error message appears', async () => {
    expect(await loginPage.getLoginErrorMessage.checkIsVisible()).toBeTruthy();
});

AfterAll(async () => {
    await closeBrowser();
});
