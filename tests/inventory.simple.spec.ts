import { test, expect } from '@playwright/test';

test('Simple inventory test - add items to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('.inventory_item:first-child .btn_inventory');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await page.click('.inventory_item:nth-child(2) .btn_inventory');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
});

// TODO: Complete this test case
// Hints:
// 1. First login to the application (similar to first test)
// 2. Get details of first item using page.locator()
//    - Title selector: '.inventory_item:first-child .inventory_item_name'
//    - Price selector: '.inventory_item:first-child .inventory_item_price'
//    - Description selector: '.inventory_item:first-child .inventory_item_desc'
// 3. Verify each detail:
//    - Title should exist (toBeTruthy())
//    - Price should contain '$' (toContain('$'))
//    - Description should exist (toBeTruthy())
test('Simple inventory test - check item details', async ({ page }) => {
  // Your code here
});

// TODO: Complete this test case
// Hints:
// 1. First login to the application (similar to first test)
// 2. Use page.selectOption() to sort items by price low to high
//    - Selector: '.product_sort_container'
//    - Value: 'lohi' (low to high)
// 3. Get prices of first two items using page.locator()
//    - Price selector: '.inventory_item_price'
//    - First item: '.inventory_item:first-child'
//    - Second item: '.inventory_item:nth-child(2)'
// 4. Compare the prices to verify sorting
test('Simple inventory test - sort items', async ({ page }) => {
  // Your code here
});