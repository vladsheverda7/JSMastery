export class CheckoutPage {
    #page;
    #firstNameInputField;
    #lastNameInputField;
    #zipCodeInputField;
    checkoutCompleteHeader;
    continueButton;
    finishButton;

    constructor(page) {
        this.#page = page;
        this.#firstNameInputField = this.#page.locator('//input[@id="first-name"]');
        this.#lastNameInputField = this.#page.locator('//input[@id="last-name"]');
        this.#zipCodeInputField = this.#page.locator('//input[@id="postal-code"]');
        this.continueButton = this.#page.locator('//input[@type="submit"]');
        this.finishButton = this.#page.locator('//button[@id="finish"]');
        this.checkoutCompleteHeader = this.#page.locator('//h2[@class="complete-header"]');
    }

    async #fillUserInformation(firstName, lastName, zipCode) {
        await this.#firstNameInputField.fill(firstName);
        await this.#lastNameInputField.fill(lastName);
        await this.#zipCodeInputField.fill(zipCode);
    }

    async executeFirstCheckoutStep(firstName, lastName, zipCode) {
        await this.#fillUserInformation(firstName, lastName, zipCode);
        await this.continueButton.click();
    }
}
