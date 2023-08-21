import { BaseElement } from '../elements/baseElement';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get getCheckoutButton() {
        return new BaseElement(this.page.locator('//button[@id="checkout"]'));
    }
}
