import { BaseElement } from '../elements/baseElement';

export class SideBarComponent extends BaseElement {
    async getLogoutButton() {
        return this.find('#logout_sidebar_link');
    }
}
