import { test, expect } from '../../fixture/fixtures.js';

import { userCredential } from '../../constants/credentials.constants.js';

test('should sort items by price from low to high', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(userCredential.validUsername, userCredential.validPassword);
    await inventoryPage.getSortButton.selectOption('lohi');

    const isArraySorter = inventoryPage.checkItemsIsSortedBy('price');

    expect(isArraySorter).toBeTruthy();
});
