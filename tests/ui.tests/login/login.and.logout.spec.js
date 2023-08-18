import { test, expect } from '@playwright/test';

import { LoginPage } from '../../../pages/login.page.js';
import { SideBarComponent } from '../../../components/sidebar.component.js';
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

        expect(inventoryPage.checkInventoryContentIsEnabled).toBeTruthy();
    });

    test('should logout', async ({ page }) => {
        const sideBarComponent = new SideBarComponent(page);

        await loginPage.login(validUsername, validPassword);
        await sideBarComponent.burgerMenuButton.click();
        await sideBarComponent.logoutButton.click();

        expect(loginPage.checkLoginFormContainerIsVisible()).toBeTruthy();
    });

    test('should not login with incorrect credentials', async () => {
        await loginPage.login(invalidUsername, invalidPassword);

        expect(loginPage.checkLoginErrorMessageIsVisible()).toBeTruthy();
    });
});
