export class FooterComponent {
    #page;
    #socialMediaListItem;

    constructor(page) {
        this.#page = page;
        this.#socialMediaListItem = socialMediaName => this.#page.locator(`//li[@class="social_${socialMediaName}"]`);
    }

    async clickSocialMediaLink(socialMedia) {
        const socialMediaIcon = this.#socialMediaListItem(socialMedia);

        await socialMediaIcon.click();
    }
}
