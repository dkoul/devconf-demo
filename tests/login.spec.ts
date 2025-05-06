import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Low abstraction login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLogin();
});
