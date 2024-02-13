const { BeforeAll, AfterAll, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const LoginPage = require('../../../../pages/login.page');
const InventoryPage = require('../../../../pages/inventory.page');
const { loginUrl } = require('../../../../constants/index');
const { launchBrowser } = require('../../../../helpers/launch.browser');

let loginPage;

const browserType = process.env.BROWSER;
const headless = process.env.HEADLESS === 'true';

BeforeAll(async () => {
    browser = await launchBrowser(browserType, headless);
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
