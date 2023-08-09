export class SideBarComponent {
  #page;
  #burgerMenuBtn;
  #logoutBtn;
  constructor(page) {
    this.#page = page;
    this.#burgerMenuBtn = this.#page.locator("#react-burger-menu-btn");
    this.#logoutBtn = this.#page.locator("#logout_sidebar_link");
  }

  async ClickBurgerMenuBtn() {
    await this.#burgerMenuBtn.click();
  }

  async ClickLogoutBtn() {
    await this.#logoutBtn.click();
  }
}
