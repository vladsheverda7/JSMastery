const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login.page");
const { SideBarComponent } = require("../components/sidebar.component");
const { InventoryPage } = require("../pages/inventory.page");

const config = require('config');
const baseUrl = config.get('baseUrl');
const validUsername = config.get('validUsername');
const validPassword = config.get('validPassword');
const invalidUsername = config.get('invalidUsername');
const invalidPassword = config.get('invalidPassword');

test.describe("Test login/logout functionality", () => {
  let loginPage;
  let sideBarComponent;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    loginPage = new LoginPage(page);
  });

  test("should login with correct credentials", async ({ page }) => {
    await loginPage.login(validUsername, validPassword);
    inventoryPage = new InventoryPage(page);

    await expect(await inventoryPage.getInventoryContent()).toBeEnabled();
  });

  test("should logout", async ({ page }) => {
    await loginPage.login(validUsername, validPassword);
    sideBarComponent = new SideBarComponent(page);

    await sideBarComponent.ClickBurgerMenuBtn();
    await sideBarComponent.ClickLogoutBtn();

    await expect(loginPage.loginContainer).toBeVisible();
  });

  test("should not login with incorrect credentials", async () => {
    loginPage.login(invalidUsername, invalidPassword);

    await expect(loginPage.errorMessage).toBeVisible();
  });
});
