import { BaseElement } from '../elements/base.element';
import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get getFirstNameInputField() {
        return new BaseElement(this.page.locator('//input[@id="first-name"]'));
    }

    get getLastNameInputField() {
        return new BaseElement(this.page.locator('//input[@id="last-name"]'));
    }

    get getZipCodeInputField() {
        return new BaseElement(this.page.locator('//input[@id="postal-code"]'));
    }

    get getContinueButton() {
        return new BaseElement(this.page.locator('//input[@type="submit"]'));
    }

    get getFinishButton() {
        return new BaseElement(this.page.locator('//button[@id="finish"]'));
    }

    get getCheckoutCompleteHeader() {
        return new BaseElement(this.page.locator('//h2[@class="complete-header"]'));
    }

    async #fillUserInformation(firstName, lastName, zipCode) {
        await this.getFirstNameInputField.fill(firstName);
        await this.getLastNameInputField.fill(lastName);
        await this.getZipCodeInputField.fill(zipCode);
    }

    async executeFirstCheckoutStep(firstName, lastName, zipCode) {
        await this.#fillUserInformation(firstName, lastName, zipCode);
        await this.getContinueButton.click();
    }
}
