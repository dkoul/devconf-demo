import { test } from '@playwright/test';
import { LoginPageAbstracted } from '../pages/LoginPageAbstracted';

test('High abstraction login test', async ({ page }) => {
  const loginPageAbstracted = new LoginPageAbstracted(page);
  await loginPageAbstracted.login('standard_user', 'secret_sauce');
  await loginPageAbstracted.verifySuccessfulLogin();
});

// TODO: Add another test that sends a wrong password and asserts the presence of error button located by css ‘button.error-button’
test('Login with wrong password shows error', async ({ page }) => {
});

