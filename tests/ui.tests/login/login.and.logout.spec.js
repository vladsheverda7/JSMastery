import { test, expect } from '@playwright/test';

import { LoginPage } from '../../../pages/login.page.js';
import { MainPage } from '../../../pages/main.page.js';
import { InventoryPage } from '../../../pages/inventory.page.js';
import { loginUrl } from '../../../constants/urls.constants.js';
import { userCredential } from '../../../constants/credentials.constants.js';

test.describe('login/logout functionality', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page, loginUrl);

        await loginPage.navigate();
    });

    test('should login with correct credentials', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await loginPage.login(userCredential.validUsername, userCredential.validPassword);

        expect(inventoryPage.getInventoryContent.checkIsEnabled()).toBeTruthy();
    });

    test('should logout', async ({ page }) => {
        const mainPage = new MainPage(page);

        await loginPage.login(userCredential.validUsername, userCredential.validPassword);

        const burgerMenuButton = await mainPage.getHeader.getBurgerMenuButton();
        await burgerMenuButton.click();

        const logoutButton = await mainPage.getSideBar.getLogoutButton();
        await logoutButton.click();

        expect(loginPage.getLoginFormContainer.checkIsVisible()).toBeTruthy();
    });

    test('should not login with incorrect credentials', async () => {
        await loginPage.login(userCredential.invalidUsername, userCredential.invalidPassword);

        expect(loginPage.getLoginErrorMessage.checkIsVisible()).toBeTruthy();
    });
});
