import { BasePage } from './base.page.js';
import { BaseElement } from '../elements/baseElement.js';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
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
        return new BaseElement(this.page.locator('.login_wrapper-inner'));
    }

    get getLoginErrorMessage() {
        return new BaseElement(this.page.locator("//h3[@data-test='error']"));
    }

    async login(userName, password) {
        await this.getLoginInput.fill(userName);
        await this.getPasswordInput.fill(password);
        await this.getLoginButton.click();
    }
}
