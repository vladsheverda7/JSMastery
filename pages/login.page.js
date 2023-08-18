import { BasePage } from './base.page.js';

import { BaseElement } from '../elements/baseElement.js';

export class LoginPage extends BasePage {
    loginFormContainer;
    loginErrorMessage;

    constructor(page) {
        super(page);
        // this.loginFormContainer = this.#page.locator(".login_wrapper-inner");
        // this.loginErrorMessage = this.#page.locator("//h3[@data-test='error']");
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

    async login(userName, password) {
        const userNameInput = this.getLoginInput;
        const passwordInput = this.getPasswordInput;
        const loginButton = this.getLoginButton;

        await userNameInput.fill(userName);
        await passwordInput.fill(password);
        await loginButton.click();
    }
}
