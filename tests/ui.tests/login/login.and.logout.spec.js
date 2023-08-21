import { test, expect } from '@playwright/test';

import { LoginPage } from '../../../pages/login.page.js';
import { MainPage } from '../../../pages/main.page.js';
import { InventoryPage } from '../../../pages/inventory.page.js';
import { baseUrl } from '../../../constants/urls.constants.js';
import { validUsername, validPassword, invalidUsername, invalidPassword } from '../../../constants/credentials.constants.js';

test.describe('login/logout functionality', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);

        await page.goto(baseUrl);
    });

    test('should login with correct credentials', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await loginPage.login(validUsername, validPassword);

        expect(inventoryPage.getInventoryContent.checkIsEnabled()).toBeTruthy();
    });

    test('should logout', async ({ page }) => {
        const mainPage = new MainPage(page);

        await loginPage.login(validUsername, validPassword);

        const burgerMenuButton = await mainPage.getHeader.getBurgerMenuButton();
        await burgerMenuButton.click();

        const logoutButton = await mainPage.getSideBar.getLogoutButton();
        await logoutButton.click();

        expect(loginPage.getLoginFormContainer.checkIsVisible()).toBeTruthy();
    });

    test('should not login with incorrect credentials', async () => {
        await loginPage.login(invalidUsername, invalidPassword);

        expect(loginPage.getLoginErrorMessage.checkIsVisible()).toBeTruthy();
    });
});
