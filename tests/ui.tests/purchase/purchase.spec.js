import { test, expect } from '@playwright/test';

import { LoginPage } from '../../../pages/login.page.js';
import { MainPage } from '../../../pages/main.page.js';
import { InventoryPage } from '../../../pages/inventory.page.js';
import { CartPage } from '../../../pages/cart.page.js';
import { CheckoutPage } from '../../../pages/checkout.page.js';
import { loginUrl } from '../../../constants/urls.constants.js';
import { userCredential } from '../../../constants/credentials.constants.js';

test('should make purchase', async ({ page }) => {
    const loginPage = new LoginPage(page, loginUrl);
    const mainPage = new MainPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login(userCredential.validUsername, userCredential.validPassword);

    const addProductToCartButton = await inventoryPage.getProductContainer(1).getProductAddToCartButton();
    await addProductToCartButton.click();

    const cartIconLink = await mainPage.getHeader.getCheckoutIconLink();
    await cartIconLink.click();

    await cartPage.getCheckoutButton.click();
    await checkoutPage.executeFirstCheckoutStep('test', 'test', '0000');
    await checkoutPage.getFinishButton.click();

    expect(checkoutPage.getCheckoutCompleteHeader.checkIsVisible()).toBeTruthy();
});
