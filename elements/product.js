import { BaseElement } from './index';

export class ProductComponent extends BaseElement {
    async getProductAddToCartButton() {
        return this.find('//button');
    }
}
