import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/login.page.js';
import { InventoryPage } from '../../pages/inventory.page.js';
import { baseUrl } from '../../constants/urls.constants.js';
import { userCredential } from '../../constants/credentials.constants.js';

test('should sort items by price from low to high', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto(baseUrl);
    await loginPage.login(userCredential.validUsername, userCredential.validPassword);
    await inventoryPage.getSortButton.selectOption('lohi');

    const isArraySorter = inventoryPage.isItemsSortedBy('price');

    expect(isArraySorter).toBeTruthy();
});
