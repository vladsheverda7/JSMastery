import { BaseElement } from '../elements/index';
import { BasePage } from '../pages/index';

export class CartPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get getCheckoutButton() {
        return new BaseElement(this.page.locator('//button[@id="checkout"]'));
    }
}
