const { BeforeAll, AfterAll, Given, When, Then } = require('@cucumber/cucumber');
const { expect, chromium } = require('@playwright/test');

const LoginPage = require('../../../../pages/login.page');
const InventoryPage = require('../../../../pages/inventory.page');
const { loginUrl } = require('../../../../constants/index');

let loginPage;
let browser;
let page;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
});

Given('the user is on Login Page', async () => {
    loginPage = new LoginPage(page, loginUrl);
    await loginPage.navigate();
});

When(/^the user logins with valid (.*) and (.*)$/, async (username, password) => {
    await loginPage.login(username, password);
});

Then('Inventory Page is opened', async () => {
    const inventoryPage = new InventoryPage(page);
    expect(await inventoryPage.getInventoryContent.checkIsEnabled()).toBeTruthy();
});

AfterAll(async () => {
    await browser.close();
});
