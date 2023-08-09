export class CheckoutPage {
  #page;
  #firstName;
  #lastName;
  #zipCode;
  #continueBtn;
  #finishBtn;
  #checkoutCompleteHeader;
  constructor(page) {
    this.#page = page;
    this.#firstName = this.#page.locator('//input[@id="first-name"]');
    this.#lastName = this.#page.locator('//input[@id="last-name"]');
    this.#zipCode = this.#page.locator('//input[@id="postal-code"]');
    this.#continueBtn = this.#page.locator('//input[@type="submit"]');
    this.#finishBtn = this.#page.locator('//button[@id="finish"]');
    this.#checkoutCompleteHeader = this.#page.locator(
      '//h2[@class="complete-header"]'
    );
  }

  async #fillUserInformation(firstName, lastName, zipCode) {
    await this.#firstName.fill(firstName);
    await this.#lastName.fill(lastName);
    await this.#zipCode.fill(zipCode);
  }

  async #clickContinueBtn() {
    await this.#continueBtn.click();
  }

  async executeFirstCheckoutStep(firstName, lastName, zipCode) {
    await this.#fillUserInformation(firstName, lastName, zipCode);
    await this.#clickContinueBtn();
  }

  async executeSecondCheckoutStep() {
    await this.#finishBtn.click();
  }

  async checkCheckoutCompleteMsgIsVisible() {
    return await this.#checkoutCompleteHeader.isVisible();
  }
}
