export class CartIconComponent {
  #page;
  #cartIcon;
  constructor(page) {
    this.#page = page;
    this.#cartIcon = this.#page.locator('//a[@class="shopping_cart_link"]');
  }

  async clickCartIcon() {
    await this.#cartIcon.click();
  }
}
