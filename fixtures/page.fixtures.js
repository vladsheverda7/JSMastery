import { test as base } from '@playwright/test';

import { LoginPage, InventoryPage, MainPage, CartPage, CheckoutPage } from '../pages/index';
import { loginUrl } from '../constants/index';

export const test = base.extend({
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

exports.expect = base.expect;
