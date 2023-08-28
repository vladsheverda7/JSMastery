import { BasePage } from './base.page';
import { BaseElement } from '../elements/base.element.js';
import { ProductComponent } from '../elements/product.js';
import { isArraySortedAscending } from '../helpers/array.helpers.js';
import { BaseElements } from '../elements/elements.collection';

export class InventoryPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get getInventoryContent() {
        return new BaseElement(this.page.locator('//div[@class="inventory_container"]'));
    }

    get getSortButton() {
        return new BaseElement(this.page.locator('//select[@data-test="product_sort_container"]'));
    }

    getItemListBySpecificAttribute(itemAttribute) {
        return new BaseElements(this.page.locator(`//div[@class="inventory_item_${itemAttribute}"]`));
    }

    getProductContainer(productIndex) {
        return new ProductComponent(this.page.locator(`//div[@class="inventory_item"][${productIndex}]`));
    }

    async checkItemsIsSortedBy(attribute) {
        const itemsArray = await this.getItemListBySpecificAttribute(attribute).getElements();
        const isSorted = isArraySortedAscending(itemsArray);

        return isSorted;
    }
}
