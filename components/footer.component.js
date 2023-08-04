export class FooterComponent {
    constructor(page){
        this.page = page;
        this.twitterIcon = page.locator('//li[@class="social_twitter"]');
        this.facebookIcon = page.locator('//li[@class="social_facebook"]');
        this.linkedInIcon = page.locator('//li[@class="social_linkedin"]');
    }

    async clickTwitterIcon(){
        await this.twitterIcon.click();
    }

    async clickFacebookIcon(){
        await this.facebookIcon.click();
    }

    async clickLinkedInIcon(){
        await this.linkedInIcon.click();
    }
}