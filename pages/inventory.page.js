export class Inventory {
    constructor(page){
        this.page = page;
        this.inventoryContent = page.locator('.inventory_container');
    }
}