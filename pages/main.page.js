import { BasePage } from './base.page';
import { FooterComponent } from '../elements/footer.js';
import { SideBarComponent } from '../elements/sidebar.js';
import { HeaderComponent } from '../elements/header.js';

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
