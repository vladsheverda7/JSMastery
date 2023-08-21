import { BaseElement } from '../elements/baseElement';

export class ProductComponent extends BaseElement {
    async getProductAddToCartButton() {
        return this.find('//button');
    }
}
