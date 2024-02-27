const { test, expect } = require('@playwright/test');

test.describe('Test login page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test('should login with correct credentials', async ({ page }) => {
        await page.locator('//input[@id="user-name"]').fill('standard_user');
        await page.locator('//input[@id="password"]').fill('secret_sauce');
        await page.locator('//input[@id="login-button"]').click();

        const inventory_container = page.locator('//div[@class="inventory_item"]').first();

        await expect(inventory_container).toBeEnabled();
    });

    test('should not login with incorrect credentials', async ({ page }) => {
        await page.locator('//input[@id="user-name"]').fill('test');
        await page.locator('//input[@id="password"]').fill('12345678');
        await page.locator('//input[@id="login-button"]').click();

        const errorMessage = page.locator("//div[@class='error-message-container error']");

        await expect(errorMessage).toBeVisible();
    });
});

test.describe('Make purchase', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('//input[@id="user-name"]').fill('standard_user');
        await page.locator('//input[@id="password"]').fill('secret_sauce');
        await page.locator('//input[@id="login-button"]').click();
    });

    test('should make a purchase', async ({ page }) => {
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

test.describe('Verify social media', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('//input[@id="user-name"]').fill('standard_user');
        await page.locator('//input[@id="password"]').fill('secret_sauce');
        await page.locator('//input[@id="login-button"]').click();
    });

    test('should open Twitter', async ({ page, context }) => {
        const pagePromise = context.waitForEvent('page');
        await page.locator('//li[@class="social_twitter"]').click();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://twitter.com/saucelabs');
    });

    test('should open Facebook', async ({ page, context }) => {
        const pagePromise = context.waitForEvent('page');
        await page.locator('//li[@class="social_facebook"]').click();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.facebook.com/saucelabs');
    });

    test('should open LinkedIn', async ({ page, context }) => {
        const pagePromise = context.waitForEvent('page');
        await page.locator('//li[@class="social_linkedin"]').click();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.linkedin.com/company/sauce-labs/');
    });
});

test.describe('Verify sorting by item price', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('//input[@id="user-name"]').fill('standard_user');
        await page.locator('//input[@id="password"]').fill('secret_sauce');
        await page.locator('//input[@id="login-button"]').click();
    });

    test('should sort products by price from low to high', async ({ page }) => {
        await page.locator('//select[@data-test="product_sort_container"]').selectOption({ value: 'lohi' });
        const itemPriceArray = await page.$$('//div[@class="inventory_item_price"]');

        expect(isSortedAscending(itemPriceArray)).toBeTruthy();
    });
});

async function AddItemToCart(page, index) {
    const itemLocator = await page.locator(`//div[@class="inventory_item"][${index}]//button`);

    await itemLocator.click();
}

function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
