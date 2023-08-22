import { test, expect } from '../../fixture/fixtures.js';

import { socialMediaArray } from '../../constants/socialMedia.constants.js';
import { userCredential } from '../../constants/credentials.constants.js';

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
