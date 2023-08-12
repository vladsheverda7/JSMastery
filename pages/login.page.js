export class LoginPage {
  #page;
  #userNameInputField;
  #passwordInputField;
  #loginButton;
  loginFormContainer;
  loginErrorMessage;

  constructor(page) {
    this.#page = page;
    this.#userNameInputField = this.#page.locator('//input[@id="user-name"]');
    this.#passwordInputField = this.#page.locator('//input[@id="password"]');
    this.#loginButton = this.#page.locator('//input[@id="login-button"]');
    this.loginFormContainer = this.#page.locator(".login_wrapper-inner");
    this.loginErrorMessage = this.#page.locator("//h3[@data-test='error']");
  }

  async login(userName, password) {
    await this.#userNameInputField.fill(userName);
    await this.#passwordInputField.fill(password);
    await this.#loginButton.click();
  }
}
