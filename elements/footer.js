import { BaseElement } from './index';

export class FooterComponent extends BaseElement {
    async getSocialMedia(socialMediaName) {
        return this.find(`//li[@class="social_${socialMediaName}"]`);
    }
}
