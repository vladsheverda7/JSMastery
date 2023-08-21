import { BaseElement } from '../elements/baseElement';

export class FooterComponent extends BaseElement {
    async getSocialMedia(socialMediaName) {
        return this.find(`//li[@class="social_${socialMediaName}"]`);
    }
}
