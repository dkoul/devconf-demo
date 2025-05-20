import { BasePage } from './BasePage';

export class LoginPageAbstracted extends BasePage {
  private readonly selectors = {
    username: '#user-name',
    password: '#password',
    login: '#login-button',
    inventoryList: '.inventory_list'
  };

  async login(username: string, password: string) {
    await this.page.goto('https://www.saucedemo.com');
    await this.fillField(this.selectors, 'username', username);
    await this.fillField(this.selectors, 'password', password);
    await this.clickElement(this.selectors, 'login');
  }

  async verifySuccessfulLogin() {
    await this.page.waitForURL(/.*\/inventory.html/);
    await this.page.waitForSelector(this.selectors.inventoryList);
  }
}
