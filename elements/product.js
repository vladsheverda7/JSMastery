import { BaseElement } from './base.element';

export class ProductComponent extends BaseElement {
    async getProductAddToCartButton() {
        return this.find('//button');
    }
}
