export class FooterComponent {
  #page;
  #twitterIcon;
  #facebookIcon;
  #linkedInIcon;

  constructor(page) {
    this.#page = page;
    this.#twitterIcon = this.#page.locator('//li[@class="social_twitter"]');
    this.#facebookIcon = this.#page.locator('//li[@class="social_facebook"]');
    this.#linkedInIcon = this.#page.locator('//li[@class="social_linkedin"]');
  }

  async clickTwitterIcon() {
    await this.#twitterIcon.click();
  }

  async clickFacebookIcon() {
    await this.#facebookIcon.click();
  }

  async clickLinkedInIcon() {
    await this.#linkedInIcon.click();
  }
}
