const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login.page");
const { InventoryPage } = require("../pages/inventory.page");
const { CartIconComponent } = require("../components/cart.component");
const { CartPage } = require("../pages/cart.page");
const { CheckoutPage } = require("../pages/checkout.page");
const { FooterComponent } = require("../components/footer.component");

test.describe("Test purchase", () => {
  let loginPage;
  let inventoryPage;
  let cartIconComponent;
  let cartPage;
  let checkoutPage;
  let footerComponent;

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


test.describe("Test Social Media", () => {
    let loginPage;
    let footerComponent;

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
        loginPage = new LoginPage(page);
        await loginPage.Login("standard_user", "secret_sauce");
      });

      test("should open twitter page", async({page, context}) =>{
        const pagePromise = context.waitForEvent("page");
        footerComponent = new FooterComponent(page);
        await footerComponent.clickTwitterIcon();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL("https://twitter.com/saucelabs");
      })

      test("should open facebook page", async({page, context}) =>{
        const pagePromise = context.waitForEvent("page");
        footerComponent = new FooterComponent(page);
        await footerComponent.clickFacebookIcon();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL("https://www.facebook.com/saucelabs");
      })

      test("should open linkedIn page", async({page, context}) =>{
        const pagePromise = context.waitForEvent("page");
        footerComponent = new FooterComponent(page);
        await footerComponent.clickLinkedInIcon();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(
            "https://www.linkedin.com/company/sauce-labs/"
          );
      })
})