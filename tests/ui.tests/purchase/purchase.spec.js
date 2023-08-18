import { test, expect } from '@playwright/test';

import { LoginPage } from '../../../pages/login.page.js';
import { CartIconComponent } from '../../../components/cart.component.js';
import { CartPage } from '../../../pages/cart.page.js';
import { CheckoutPage } from '../../../pages/checkout.page.js';
import { ProductComponent } from '../../../components/product.component.js';
import { baseUrl } from '../../../constants/urls.constants.js';
import { validUsername, validPassword } from '../../../constants/credentials.constants.js';

test('should make purchase', async ({ page }) => {
    const loginPage = new LoginPage(page);

    const cartIconComponent = new CartIconComponent(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const productComponent = new ProductComponent(page);

    await page.goto(baseUrl);
    await loginPage.login(validUsername, validPassword);
    await productComponent.addProductToCart(1);
    await cartIconComponent.cartIconLink.click();
    await cartPage.checkoutButton.click();
    await checkoutPage.executeFirstCheckoutStep('test', 'test', '0000');
    await checkoutPage.finishButton.click();

    await expect(checkoutPage.checkoutCompleteHeader).toBeVisible();
});
