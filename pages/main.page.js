const BasePage = require('../pages/base.page');
const FooterComponent = require('../elements/footer');
const HeaderComponent = require('../elements/header');
const SideBarComponent = require('../elements/sidebar');

class MainPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get getFooter() {
        return new FooterComponent(this.page.locator('//footer[@class="footer"]'));
    }

    get getHeader() {
        return new HeaderComponent(this.page.locator('//div[@id="header_container"]'));
    }

    get getSideBar() {
        return new SideBarComponent(this.page.locator('//div[@class="bm-menu-wrap"]'));
    }
}

module.exports = MainPage;
