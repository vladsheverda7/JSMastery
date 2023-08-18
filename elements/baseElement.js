export class BaseElement {
    locator;

    constructor(locator) {
        this.locator = locator;
    }

    getLocator() {
        return this.locator;
    }

    async click() {
        await this.getLocator().click();
    }

    async fill(text) {
        await this.getLocator().fill(text);
    }
}
