export class CartIconComponent {
  #page;
  cartIconLink;
  
  constructor(page) {
    this.#page = page;
    this.cartIconLink = this.#page.locator('//a[@class="shopping_cart_link"]');
  }
}
