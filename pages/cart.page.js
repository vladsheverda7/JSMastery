const BaseElement = require('../elements/base.element');
const BasePage = require('../pages/base.page');

class CartPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get getCheckoutButton() {
        return new BaseElement(this.page.locator('//button[@id="checkout"]'));
    }
}

module.exports = CartPage;
