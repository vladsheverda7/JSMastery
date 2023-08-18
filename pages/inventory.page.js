import { BasePage } from './base.page';

import { BaseElement } from '../elements/baseElement.js';

export class InventoryPage extends BasePage {
    #inventoryItemBlock;

    constructor(page) {
        super(page);
        // this.#inventoryItemBlock = itemAttribute => this.#page.locator(`//div[@class="inventory_item_${itemAttribute}"]`).all();
    }

    get getInventoryContent() {
        return new BaseElement(this.page.locator('.inventory_container'));
    }

    get getSortButton() {
        return new BaseElement(this.page.locator('//select[@data-test="product_sort_container"]'));
    }

    getItemListBySpecificAttribute(itemAttribute) {
        return new BaseElement(this.page.locator(`//div[@class="inventory_item_${itemAttribute}"]`).all());
    }

    async checkInventoryContentIsEnabled() {
        await this.getInventoryContent.checkIsEnabled();
    }

    async sortItemsBy(option) {
        await this.getSortButton.selectOption(option);
    }

    // async isItemsSortedBy(attribute){
    //     const itemList = this.getItemListBySpecificAttribute(attribute);
    //     const isSorted
    // }
}
