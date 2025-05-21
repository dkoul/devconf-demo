import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Low abstraction login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLogin();
  await expect(page).toHaveURL(/.*\/inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});

// TODO: Add another test that sends a wrong password and asserts the presence of error button located by css ‘button.error-button’
test('Login with wrong password shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('wrong_password');
  await loginPage.clickLogin();
  await page.locator('button.error-button').waitFor();
});
