import { BaseElement } from '../elements/baseElement';

export class SideBarComponent extends BaseElement {
    async getLogoutButton() {
        return this.find('//a[@id="logout_sidebar_link"]');
    }
}
