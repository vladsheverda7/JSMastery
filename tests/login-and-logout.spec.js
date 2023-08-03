const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login.page");
const { SideBar } = require("../components/sidebar.component");
const { Inventory } = require("../pages/inventory.page");

test.describe("Test login/logout functionality", () => {
  let loginPage;
  let sideBar;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    loginPage = new LoginPage(page);
  });

  test("should login with correct credentials", async ({ page }) => {
    await loginPage.Login("standard_user", "secret_sauce");
    inventoryPage = new Inventory(page);

    await expect(inventoryPage.inventoryContent).toBeEnabled();
  });

  test("should logout", async ({ page }) => {
    await loginPage.Login("standard_user", "secret_sauce");
    sideBar = new SideBar(page);

    await sideBar.ClickBurgerMenuBtn();
    await sideBar.ClickLogoutBtn();

    await expect(loginPage.loginContainer).toBeVisible();
  });

  test("should not login with incorrect credentials", async () => {
    loginPage.Login("test", "12345678");

    await expect(loginPage.errorMessage).toBeVisible();
  });
});
