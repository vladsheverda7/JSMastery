import { BaseElement } from './base.element';

export class FooterComponent extends BaseElement {
    async getSocialMedia(socialMediaName) {
        return this.find(`//li[@class="social_${socialMediaName}"]`);
    }
}
