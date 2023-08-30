import { test, expect } from '../../../fixtures/page.fixtures.js';

import { userCredential } from '../../../constants/index.js';

test('should make purchase', async ({ loginPage, mainPage, inventoryPage, cartPage, checkoutPage }) => {
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
