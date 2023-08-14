export class InventoryPage {
  #page;
  #inventoryContent;
  sortButton;
  #inventoryItemBlock;

  constructor(page) {
    this.#page = page;
    this.#inventoryContent = this.#page.locator(".inventory_container");
    this.sortButton = this.#page.locator(
      '//select[@data-test="product_sort_container"]'
    );
    this.#inventoryItemBlock = (itemAttribute) =>
      this.#page
        .locator(`//div[@class="inventory_item_${itemAttribute}"]`)
        .all();
  }

  async getItemListBySpecificAttribute(itemAttribute) {
    return this.#inventoryItemBlock(itemAttribute);
  }

  async getInventoryContent() {
    return this.#inventoryContent;
  }
}
