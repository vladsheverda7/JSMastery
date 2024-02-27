const BaseElement = require('./base.element');

class HeaderComponent extends BaseElement {
    async getBurgerMenuButton() {
        return this.find('//button[@id="react-burger-menu-btn"]');
    }

    async getCheckoutIconLink() {
        return this.find('//a[@class="shopping_cart_link"]');
    }
}

module.exports = HeaderComponent;
