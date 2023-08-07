export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('//input[@id="first-name"]');
    this.lastName = page.locator('//input[@id="last-name"]');
    this.zipCode = page.locator('//input[@id="postal-code"]');
    this.continueBtn = page.locator('//input[@type="submit"]');
    this.finishBtn = page.locator('//button[@id="finish"]');
    this.checkoutCompleteHeader = page.locator(
      '//h2[@class="complete-header"]'
    );
  }

  async fillUserInformation(firstName, lastName, zipCode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);
  }

  async clickContinueBtn() {
    await this.continueBtn.click();
  }

  async executeFirstCheckoutStep(firstName, lastName, zipCode) {
    await this.fillUserInformation(firstName, lastName, zipCode);
    await this.clickContinueBtn();
  }

  async executeSecondChecoutStep() {
    await this.finishBtn.click();
  }

  async getCheckoutCompleteMsg() {
    return await this.checkoutCompleteHeader.isVisible();
  }
}
