const { ProductComponent } = require("../components/product.component");

export class InventoryPage {
  constructor(page) {
    this.page = page;
  }

  async clickAddProductToCartBtn(index) {
    let product = new ProductComponent(this.page);
    await product.addProductToCart(index);
  }
}
