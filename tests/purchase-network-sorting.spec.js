const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login.page");
const { InventoryPage } = require("../pages/inventory.page");
const { CartIconComponent } = require("../components/cart.component");
const { CartPage } = require("../pages/cart.page");
const { CheckoutPage } = require("../pages/checkout.page");
const { FooterComponent } = require("../components/footer.component");

import {
  twitterUrl,
  facebookUrl,
  linkedInUrl,
} from "../constants/socialMedia.constants.js";

import { baseUrl } from "../constants/urls.constants.js";

import {
  validUsername,
  validPassword,
} from "../constants/credentials.constants.js";

import { isArraySortedAscending } from "../helpers/arrayHelpers.js";

test.describe("Test purchase", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await page.goto(baseUrl);
    await loginPage.login(validUsername, validPassword);
  });

  test("should make purchase", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartIconComponent = new CartIconComponent(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.clickAddProductToCartBtn(1);
    await cartIconComponent.cartIconLink.click();
    await cartPage.checkoutButton.click();
    await checkoutPage.executeFirstCheckoutStep("test", "test", "0000");
    await checkoutPage.finishButton.click();

    await expect(checkoutPage.checkoutCompleteHeader).toBeVisible();
  });
});

test.describe("Test Social Media", () => {
  let loginPage;
  let footerComponent;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await page.goto(baseUrl);
    await loginPage.login(validUsername, validPassword);
  });

  test("should open twitter page", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");
    footerComponent = new FooterComponent(page);

    await footerComponent.twitterIconListItem.click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(twitterUrl);
  });

  test("should open facebook page", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");
    footerComponent = new FooterComponent(page);

    await footerComponent.facebookIconListItem.click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(facebookUrl);
  });

  test("should open linkedIn page", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");
    footerComponent = new FooterComponent(page);

    await footerComponent.linkedInIconListItem.click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(linkedInUrl);
  });
});

test.describe("Test sorting", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await page.goto(baseUrl);
    await loginPage.login(validUsername, validPassword);
  });

  test("should sort items by price from low to high", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.setItemSorting("lohi");

    expect(
      isArraySortedAscending(
        await inventoryPage.getItemListBySpecificAttribute("price")
      )
    ).toBeTruthy();
  });
});
