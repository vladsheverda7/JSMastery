import { BaseElement } from '../elements/base.element';

export class ProductComponent extends BaseElement {
    async getProductAddToCartButton() {
        return this.find('//button');
    }
}
