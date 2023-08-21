import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/login.page.js';
import { baseUrl } from '../../constants/urls.constants.js';
import { socialMediaArray } from '../../constants/socialMedia.constants.js';
import { validUsername, validPassword } from '../../constants/credentials.constants.js';
import { MainPage } from '../../pages/main.page.js';

for (const socialMedia of socialMediaArray) {
    test(`should open ${socialMedia.name} ${socialMedia.url}`, async ({ page, context }) => {
        const loginPage = new LoginPage(page);
        const mainPage = new MainPage(page);

        await page.goto(baseUrl);
        await loginPage.login(validUsername, validPassword);

        const socialMediaIcon = await mainPage.getFooter.getSocialMedia(socialMedia.name);
        await socialMediaIcon.click();

        const pagePromise = context.waitForEvent('page');
        const newPage = await pagePromise;
        await newPage.waitForLoadState();

        await expect(newPage).toHaveURL(socialMedia.url);
    });
}
