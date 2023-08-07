const { ProductComponent } = require("../components/product.component");

export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.sortBtn = page.locator(
      '//select[@data-test="product_sort_container"]'
    );
  }

  async clickAddProductToCartBtn(index) {
    let product = new ProductComponent(this.page);
    await product.addProductToCart(index);
  }

  async getItemListBySpecificAttribute(itemAttribute) {
    return await await this.page.$$(
      `//div[@class="inventory_item_${itemAttribute}"]`
    );
  }

  async setItemSorting(sortingType){
    await this.sortBtn.selectOption({ value: sortingType });
  }
}
