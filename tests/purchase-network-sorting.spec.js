const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login.page");
const { InventoryPage } = require("../pages/inventory.page");
const { CartIconComponent } = require("../components/cart.component");
const { CartPage } = require("../pages/cart.page");
const { CheckoutPage } = require("../pages/checkout.page");
const { FooterComponent } = require("../components/footer.component");
const { Constants } = require("../helpers/constants.js");

import { isSortedAscending } from "../helpers/checkArrisSorted.js";

const config = require('config');
const baseUrl = config.get('baseUrl');
const validUsername = config.get('validUsername');
const validPassword = config.get('validPassword');

test.describe("Test purchase", () => {
  let loginPage;
  let inventoryPage;
  let cartIconComponent;
  let cartPage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    loginPage = new LoginPage(page);
    await loginPage.login(validUsername, validPassword);
  });

  test("should make purchase", async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    await inventoryPage.clickAddProductToCartBtn(1);
    cartIconComponent = new CartIconComponent(page);
    await cartIconComponent.clickCartIcon();
    cartPage = new CartPage(page);
    await cartPage.clickCheckoutBtn();
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.executeFirstCheckoutStep("test", "test", "0000");
    await checkoutPage.executeSecondChecoutStep();
    expect(await checkoutPage.getCheckoutCompleteMsg()).toBeTruthy();
  });
});

test.describe("Test Social Media", () => {
  let loginPage;
  let footerComponent;

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    loginPage = new LoginPage(page);
    await loginPage.login(validUsername, validPassword);
  });

  test("should open twitter page", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");
    footerComponent = new FooterComponent(page);
    await footerComponent.clickTwitterIcon();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(Constants.TWITTER_URL);
  });

  test("should open facebook page", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");
    footerComponent = new FooterComponent(page);
    await footerComponent.clickFacebookIcon();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(Constants.FACEBOOK_URL);
  });

  test("should open linkedIn page", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");
    footerComponent = new FooterComponent(page);
    await footerComponent.clickLinkedInIcon();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(Constants.LINKEDIN_URL);
  });
});

test.describe("Test sorting", () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    loginPage = new LoginPage(page);
    await loginPage.login(validUsername, validPassword);
  });

  test("should sort items by price from low to higt", async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    await inventoryPage.setItemSorting("lohi");

    expect(
      isSortedAscending(
        await inventoryPage.getItemListBySpecificAttribute("price")
      )
    ).toBeTruthy();
  });
});
