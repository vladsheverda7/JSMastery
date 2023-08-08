const { ProductComponent } = require("../components/product.component");

export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryContent = page.locator(".inventory_container");
    this.sortBtn = page.locator(
      '//select[@data-test="product_sort_container"]'
    );

    this.inventoryItemLocator = (itemAttribute) =>
      this.page.$$(`//div[@class="inventory_item_${itemAttribute}"]`);
  }

  async clickAddProductToCartBtn(index) {
    let product = new ProductComponent(this.page);
    await product.addProductToCart(index);
  }

  async getItemListBySpecificAttribute(itemAttribute) {
    return await this.inventoryItemLocator(itemAttribute);
  }

  async setItemSorting(sortingType) {
    await this.sortBtn.selectOption({ value: sortingType });
  }

  async getInventoryContent() {
    return await this.inventoryContent;
  }
}
