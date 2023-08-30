import { test, expect } from '../../fixtures/page.fixtures.js';

import { socialMediaObject, userCredential } from '../../constants/index.js';

for (const [socialMedia, value] of Object.entries(socialMediaObject)) {
    test(`should open ${socialMedia} with ${value.url} url`, async ({ loginPage, mainPage, context }) => {
        await loginPage.login(userCredential.validUsername, userCredential.validPassword);

        const socialMediaIcon = await mainPage.getFooter.getSocialMedia(value.name);
        await socialMediaIcon.click();

        const pagePromise = context.waitForEvent('page');
        const newPage = await pagePromise;
        await newPage.waitForLoadState();

        await expect(newPage).toHaveURL(value.url);
    });
}
