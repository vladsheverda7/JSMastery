export class BaseElement {
    locator;

    constructor(locator) {
        this.locator = locator;
    }

    getLocator() {
        return this.locator;
    }

    async getAllElements() {
        return await this.getLocator().all();
    }

    async click() {
        await this.getLocator().click();
    }

    async fill(text) {
        await this.getLocator().fill(text);
    }

    async selectOption(option) {
        await this.getLocator().selectOption({ value: option });
    }

    async checkIsVisible() {
        return this.getLocator().isVisible();
    }

    async checkIsEnabled() {
        return this.getLocator().isEnabled();
    }
}
