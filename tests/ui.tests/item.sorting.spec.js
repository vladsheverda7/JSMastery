const { test, expect } = require('../../fixtures/page.fixtures.js');

const { userCredential } = require('../../constants/index.js');

test('should sort items by price from low to high', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(userCredential.validUsername, userCredential.validPassword);
    await inventoryPage.getSortButton.selectOption('lohi');

    const isArraySorter = inventoryPage.checkItemsIsSortedBy('price');

    expect(isArraySorter).toBeTruthy();
});
