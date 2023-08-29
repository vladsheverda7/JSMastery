import { BasePage } from '../pages/index';
import { FooterComponent, SideBarComponent, HeaderComponent } from '../elements/index';

export class MainPage extends BasePage {
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
