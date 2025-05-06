import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPageAbstracted';

test('High abstraction login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
});
