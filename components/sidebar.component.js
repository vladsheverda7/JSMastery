export class SideBar {
  constructor(page) {
    this.page = page;
    this.burgerMenuBtn = page.locator("#react-burger-menu-btn");
    this.logoutBtn = page.locator("#logout_sidebar_link");
  }

  async ClickBurgerMenuBtn() {
    await this.burgerMenuBtn.click();
  }

  async ClickLogoutBtn() {
    await this.logoutBtn.click();
  }
}
