export class CartPage {
  #page;
  #checkoutBtn;
  constructor(page) {
    this.#page = page;
    this.#checkoutBtn = this.#page.locator('//button[@id="checkout"]');
  }

  async clickCheckoutBtn() {
    await this.#checkoutBtn.click();
  }
}
