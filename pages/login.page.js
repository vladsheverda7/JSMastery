import { BasePage } from './base.page.js';
import { BaseElement } from '../elements/base.element.js';

export class LoginPage extends BasePage {
    #url;
    constructor(page, url) {
        super(page);
        this.#url = url;
    }

    get getLoginInput() {
        return new BaseElement(this.page.locator('//input[@id="user-name"]'));
    }

    get getPasswordInput() {
        return new BaseElement(this.page.locator('//input[@id="password"]'));
    }

    get getLoginButton() {
        return new BaseElement(this.page.locator('//input[@id="login-button"]'));
    }

    get getLoginFormContainer() {
        return new BaseElement(this.page.locator('//div[@class="login_wrapper-inner"]'));
    }

    get getLoginErrorMessage() {
        return new BaseElement(this.page.locator("//h3[@data-test='error']"));
    }

    async login(userName, password) {
        await this.getLoginInput.fill(userName);
        await this.getPasswordInput.fill(password);
        await this.getLoginButton.click();
    }

    async navigate() {
        await this.page.goto(this.#url);
    }
}
