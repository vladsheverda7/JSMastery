import { test, expect } from '../../../fixtures/page.fixtures.js';

import { userCredential } from '../../../constants/index.js';

test.describe('login/logout functionality', () => {
    test('should login with correct credentials', async ({ loginPage, inventoryPage }) => {
        await loginPage.login(userCredential.validUsername, userCredential.validPassword);

        expect(inventoryPage.getInventoryContent.checkIsEnabled()).toBeTruthy();
    });

    test('should logout', async ({ loginPage, mainPage }) => {
        await loginPage.login(userCredential.validUsername, userCredential.validPassword);

        const burgerMenuButton = await mainPage.getHeader.getBurgerMenuButton();
        await burgerMenuButton.click();

        const logoutButton = await mainPage.getSideBar.getLogoutButton();
        await logoutButton.click();

        expect(loginPage.getLoginFormContainer.checkIsVisible()).toBeTruthy();
    });

    test('should not login with incorrect credentials', async ({ loginPage }) => {
        await loginPage.login(userCredential.invalidUsername, userCredential.invalidPassword);

        expect(loginPage.getLoginErrorMessage.checkIsVisible()).toBeTruthy();
    });
});
