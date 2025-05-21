import { test, expect } from '@playwright/test';
import { LoginPageChaining } from '../pages/LoginPageChaining';

test('Chaining login test', async ({ page }) => {
  const loginPage = new LoginPageChaining(page);
  await loginPage
  .open()
  .then(p => p.enterUsername('standard_user'))
    .then(p => p.enterPassword('secret_sauce'))
    .then(p => p.clickLogin());
  await expect(page.locator('.inventory_list')).toBeVisible();
});

