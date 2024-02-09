const BaseElement = require('./base.element');

class SideBarComponent extends BaseElement {
    async getLogoutButton() {
        return this.find('//a[@id="logout_sidebar_link"]');
    }
}

module.exports = SideBarComponent;
