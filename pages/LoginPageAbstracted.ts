import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private selectors = {
    username: '#user-name',
    password: '#password',
    login: '#login-button',
  };

  async login(username: string, password: string) {
    await this.page.goto('https://www.saucedemo.com');
    await this.fillField(this.selectors, 'username', username);
    await this.fillField(this.selectors, 'password', password);
    await this.clickElement(this.selectors, 'login');
  }
}
