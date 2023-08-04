export class ProductComponent {
  constructor(page) {
    this.page = page;
  }

  async getProduct(index) {
    return await this.page.locator(
        `//div[@class="inventory_item"][${index}]//button`
    );
  }

  async addProductToCart(index) {
    const product = await this.getProduct(index);
    await product.click();
  }
}
