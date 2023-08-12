export class FooterComponent {
  #page;
  twitterIconListItem;
  facebookIconListItem;
  linkedInIconListItem;

  constructor(page) {
    this.#page = page;
    this.twitterIconListItem = this.#page.locator('//li[@class="social_twitter"]');
    this.facebookIconListItem = this.#page.locator('//li[@class="social_facebook"]');
    this.linkedInIconListItem = this.#page.locator('//li[@class="social_linkedin"]');
  }
}
