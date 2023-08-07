const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login.page");
const { SideBar } = require("../components/sidebar.component");
const { Inventory } = require("../pages/inventory.page");

const config = require('config');
const baseUrl = config.get('baseUrl');
const validUsername = config.get('validUsername');
const validPassword = config.get('validPassword');
const invalidUsername = config.get('invalidUsername');
const invalidPassword = config.get('123456');

test.describe("Test login/logout functionality", () => {
  let loginPage;
  let sideBar;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    loginPage = new LoginPage(page);
  });

  test("should login with correct credentials", async ({ page }) => {
    await loginPage.Login(validUsername, validPassword);
    inventoryPage = new Inventory(page);

    await expect(inventoryPage.inventoryContent).toBeEnabled();
  });

  test("should logout", async ({ page }) => {
    await loginPage.Login(validUsername, validPassword);
    sideBar = new SideBar(page);

    await sideBar.ClickBurgerMenuBtn();
    await sideBar.ClickLogoutBtn();

    await expect(loginPage.loginContainer).toBeVisible();
  });

  test("should not login with incorrect credentials", async () => {
    loginPage.Login(invalidUsername, invalidPassword);

    await expect(loginPage.errorMessage).toBeVisible();
  });
});
