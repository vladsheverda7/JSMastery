import { BaseElement } from './base.element';

export class SideBarComponent extends BaseElement {
    async getLogoutButton() {
        return this.find('//a[@id="logout_sidebar_link"]');
    }
}
