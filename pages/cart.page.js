export class CartPage {
  #page;
  checkoutButton;

  constructor(page) {
    this.#page = page;
    this.checkoutButton = this.#page.locator('//button[@id="checkout"]');
  }
}
