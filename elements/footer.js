const BaseElement = require('./base.element');

class FooterComponent extends BaseElement {
    async getSocialMedia(socialMediaName) {
        return this.find(`//li[@class="social_${socialMediaName}"]`);
    }
}

module.exports = FooterComponent;
