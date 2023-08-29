import { test, expect } from '../../fixtures/page.fixtures.js';

import { socialMediaArray, userCredential } from '../../constants/index.js';

for (const socialMedia of socialMediaArray) {
    test(`should open ${socialMedia.name} ${socialMedia.url}`, async ({ loginPage, mainPage, context }) => {
        await loginPage.login(userCredential.validUsername, userCredential.validPassword);

        const socialMediaIcon = await mainPage.getFooter.getSocialMedia(socialMedia.name);
        await socialMediaIcon.click();

        const pagePromise = context.waitForEvent('page');
        const newPage = await pagePromise;
        await newPage.waitForLoadState();

        await expect(newPage).toHaveURL(socialMedia.url);
    });
}
