const { When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const { getPage } = require('./hooks');
const MainPage = require('../../../../pages/main.page');
const InventoryPage = require('../../../../pages/inventory.page');
const CartPage = require('../../../../pages/cart.page');
const CheckoutPage = require('../../../../pages/checkout.page');

let page;
let checkoutPage;

Before(async () => {
    page = getPage();
});

When(/^the user clicks the add product to cart button/, async () => {
    const inventoryPage = new InventoryPage(page);
    const addProductToCartButton = await inventoryPage.getProductContainer(1).getProductAddToCartButton();
    await addProductToCartButton.click();
});

When(/^the user clicks cart icon/, async () => {
    const mainPage = new MainPage(page);
    const cartIconLink = await mainPage.getHeader.getCheckoutIconLink();
    await cartIconLink.click();
});

When(/^the user clicks checkout button/, async () => {
    const cartPage = new CartPage(page);
    await cartPage.getCheckoutButton.click();
});

When(/^the user executed first checkout step/, async () => {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.executeFirstCheckoutStep('test', 'test', '0000');
});

When(/^the user clicks finish button/, async () => {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.getFinishButton.click();
});

Then(/^checkout is completed/, async () => {
    checkoutPage = new CheckoutPage(page);
    expect(await checkoutPage.getCheckoutCompleteHeader.checkIsVisible()).toBeTruthy();
});
