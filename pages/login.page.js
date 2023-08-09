export class LoginPage {
  #page;
  #userName;
  #password;
  #loginButton;
  #errorMessage;
  #loginContainer;
  constructor(page) {
    this.#page = page;
    this.#userName = this.#page.locator('//input[@id="user-name"]');
    this.#password = this.#page.locator('//input[@id="password"]');
    this.#loginButton = this.#page.locator('//input[@id="login-button"]');
    this.#errorMessage = this.#page.locator("//h3[@data-test='error']");
    this.#loginContainer = this.#page.locator(".login_wrapper-inner");
  }

  async login(user, password) {
    await this.#userName.fill(user);
    await this.#password.fill(password);
    await this.#loginButton.click();
  }

  async checkLoginFormIsVisible() {
    return await this.#loginContainer.isVisible();
  }
  async checkErrorMessageIsVisible() {
    return await this.#errorMessage.isVisible();
  }
}
