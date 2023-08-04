export class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.locator('//button[@id="checkout"]');
  }

  async clickCheckoutBtn() {
    await this.checkoutBtn.click();
  }
}
