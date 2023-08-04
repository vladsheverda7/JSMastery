const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login.page");
const { InventoryPage } = require("../pages/inventory.page");
const { CartIconComponent } = require("../components/cart.component");
const { CartPage } = require("../pages/cart.page");
const { CheckoutPage } = require("../pages/checkout.page");

test.describe("Test purchase", () => {
  let loginPage;
  let inventoryPage;
  let cartIconComponent;
  let cartPage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    loginPage = new LoginPage(page);
    await loginPage.Login("standard_user", "secret_sauce");
  });

  test("should make purchase", async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    await inventoryPage.clickAddProductToCartBtn(1);
    cartIconComponent = new CartIconComponent(page);
    await cartIconComponent.clickCartIcon();
    cartPage = new CartPage(page);
    await cartPage.clickCheckoutBtn();
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.executeFirstChecoutStep("test", "test", "0000");
    await checkoutPage.executeSecondChecoutStep();
    expect(await checkoutPage.getCheckoutCompleteMsg()).toBeTruthy();
  });
});
