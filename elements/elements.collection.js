export class BaseElements {
    #locator;

    constructor(locator) {
        this.#locator = locator;
    }

    #getLocator() {
        return this.#locator;
    }

    async getElements() {
        const elements = [];

        await this.#getLocator().first().waitFor({ state: 'visible' });

        for (let i = 0; i < (await this.#getLocator().count()); i++) {
            const element = this.#getLocator().nth(i);
            elements.push(element);
        }

        return elements;
    }
}
