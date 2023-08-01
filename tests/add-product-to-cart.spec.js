const { test, expect } = require("@playwright/test");

test.describe("Test login page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("should login with correct credentials", async ({ page }) => {
    await page.locator('//input[@id="user-name"]').fill("standard_user");
    await page.locator('//input[@id="password"]').fill("secret_sauce");
    await page.locator('//input[@id="login-button"]').click();

    const inventory_container = page
      .locator('//div[@class="inventory_item"]')
      .first();

    await expect(inventory_container).toBeEnabled();
  });

  test("should not login with incorrect credentials", async ({ page }) => {
    await page.locator('//input[@id="user-name"]').fill("test");
    await page.locator('//input[@id="password"]').fill("12345678");
    await page.locator('//input[@id="login-button"]').click();

    const errorMessage = page.locator(
      "//div[@class='error-message-container error']"
    );

    await expect(errorMessage).toBeVisible();
  });
});

test.describe("Make purchase", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('//input[@id="user-name"]').fill("standard_user");
    await page.locator('//input[@id="password"]').fill("secret_sauce");
    await page.locator('//input[@id="login-button"]').click();
  });

  test("should make a purchase", async ({ page }) => {
    await page.locator('//div[@class="inventory_item"]').first().isVisible();
    await AddItemToCart(page, 1);
    await page.locator('//a[@class="shopping_cart_link"]').click();
    await page.locator('//button[@id="checkout"]').click();
    await page.locator('//input[@id="first-name"]').fill('test');
    await page.locator('//input[@id="last-name"]').fill('test');
    await page.locator('//input[@id="postal-code"]').fill('0000');
    await page.locator('//input[@type="submit"]').click();
    await page.locator('//button[@id="finish"]').click();

    const successMessage = page.locator('//h2[@class="complete-header"]');
    await expect(successMessage).toBeVisible();
  });
});

test.describe("Verify social media", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("https://www.saucedemo.com/");
      await page.locator('//input[@id="user-name"]').fill("standard_user");
      await page.locator('//input[@id="password"]').fill("secret_sauce");
      await page.locator('//input[@id="login-button"]').click();
    });
  
    test("should open Twitter", async ({ page }) => {
        await page.locator('//li[@class="social_twitter"]').click();
        await expect(page).toHaveURL('https://twitter.com/saucelabs');
    });

    test("should open Facebook", async ({ page }) => {
        await page.locator('//li[@class="social_facebook"]').click();
        await expect(page).toHaveURL('https://www.facebook.com/saucelabs');
    });

    test("should open LinkedIn", async ({ page }) => {
        await page.locator('//li[@class="social_linkedin"]').click();
        await expect(page).toHaveURL('https://www.linkedin.com/company/sauce-labs/');
    });
  });


async function AddItemToCart(page, index) {
  const itemLocator = await page.locator(
    `//div[@class="inventory_item"][${index}]`
  );

  await itemLocator.click();
}
