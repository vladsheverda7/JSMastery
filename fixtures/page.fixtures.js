const { test: base } = require('@playwright/test');

const LoginPage = require('../pages/login.page');
const InventoryPage = require('../pages/inventory.page');
const MainPage = require('../pages/main.page');
const CartPage = require('../pages/cart.page');
const CheckoutPage = require('../pages/checkout.page');
const { loginUrl } = require('../constants/index');

const test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page, loginUrl);
        await loginPage.navigate();
        await use(loginPage);
    },

    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },

    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
});

module.exports = { test, expect: base.expect };
