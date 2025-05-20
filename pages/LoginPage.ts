import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async enterUsername(username: string) {
    await this.page.fill('#user-name', username);
  }

  async enterPassword(password: string) {
    await this.page.fill('#password', password);
  }

  async clickLogin() {
    await this.page.click('#login-button');
  }
}
