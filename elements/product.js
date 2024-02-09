const BaseElement = require('./base.element');

class ProductComponent extends BaseElement {
    async getProductAddToCartButton() {
        return this.find('//button');
    }
}

module.exports = ProductComponent;
