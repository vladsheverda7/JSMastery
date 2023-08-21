import { BasePage } from './base.page';
import { BaseElement } from '../elements/baseElement.js';
import { ProductComponent } from '../components/product.component.js';
import { isArraySortedAscending } from '../helpers/array.helpers.js';

export class InventoryPage extends BasePage {
    constructor(page) {
        super(page);
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

    getProductContainer(productIndex) {
        return new ProductComponent(this.page.locator(`//div[@class="inventory_item"][${productIndex}]`));
    }

    async isItemsSortedBy(attribute) {
        const items = this.getItemListBySpecificAttribute(attribute);
        const itemsArray = Object.values(items);
        const isSorted = isArraySortedAscending(itemsArray);

        return isSorted;
    }
}
