export class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator('//input[@id="user-name"]');
    this.password = page.locator('//input[@id="password"]');
    this.loginButton = page.locator('//input[@id="login-button"]');
    this.errorMessage = page.locator(
      "//div[@class='error-message-container error']"
    );
    this.loginContainer = page.locator('.login_wrapper-inner');
  }

  async Login(user, password) {
    await this.userName.fill(user);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
