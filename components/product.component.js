export class ProductComponent {
  #page;
  #product;

  constructor(page) {
    this.#page = page;
    this.#product = (itemIndex) =>
      this.#page.locator(
        `//div[@class="inventory_item"][${itemIndex}]//button`
      );
  }

  async addProductToCart(itemIndex) {
    const productButton = this.#product(itemIndex);

    await productButton.click();
  }
}
