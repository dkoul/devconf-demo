import { Page } from '@playwright/test';

export class LoginPageChaining {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://www.saucedemo.com');
    return this;
  }

  async enterUsername(username: string) {
    await this.page.fill('#user-name', username);
    return this;
  }

  async enterPassword(password: string) {
    await this.page.fill('#password', password);
    return this;
  }

  async clickLogin() {
    await this.page.click('#login-button');
    return this;
  }
}
