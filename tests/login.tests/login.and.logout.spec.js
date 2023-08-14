const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../pages/login.page.js");
const { SideBarComponent } = require("../../components/sidebar.component.js");
const { InventoryPage } = require("../../pages/inventory.page.js");

import { baseUrl } from "../../constants/urls.constants.js";

import {
  validUsername,
  validPassword,
  invalidUsername,
  invalidPassword,
} from "../../constants/credentials.constants.js";

test.describe("Test login/logout functionality", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await page.goto(baseUrl);
  });

  test("should login with correct credentials", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await loginPage.login(validUsername, validPassword);

    await expect(await inventoryPage.getInventoryContent()).toBeEnabled();
  });

  test("should logout", async ({ page }) => {
    const sideBarComponent = new SideBarComponent(page);

    await loginPage.login(validUsername, validPassword);
    await sideBarComponent.burgerMenuButton.click();
    await sideBarComponent.logoutButton.click();

    await expect(loginPage.loginFormContainer).toBeVisible();
  });

  test("should not login with incorrect credentials", async () => {
    await loginPage.login(invalidUsername, invalidPassword);

    await expect(loginPage.loginErrorMessage).toBeVisible();
  });
});
