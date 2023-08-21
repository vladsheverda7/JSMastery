import { BaseElement } from '../elements/baseElement';

export class HeaderComponent extends BaseElement {
    async getBurgerMenuButton() {
        return this.find('#react-burger-menu-btn');
    }

    async getCheckoutIconLink() {
        return this.find('//a[@class="shopping_cart_link"]');
    }
}
