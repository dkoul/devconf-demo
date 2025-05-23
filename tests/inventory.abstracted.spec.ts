import { test, expect } from '@playwright/test';
import { LoginPageAbstracted } from '../pages/LoginPageAbstracted';
import { AbstractInventoryPage } from '../pages/AbstractInventoryPage';

test('Abstracted inventory test - add items to cart', async ({ page }) => {
    const loginPageAbstracted = new LoginPageAbstracted(page);
    await loginPageAbstracted.login('standard_user', 'secret_sauce');

    const inventoryPage = new AbstractInventoryPage(page);
    await inventoryPage.addItemToCart(0);
    await inventoryPage.verifyCartCount(1);
    
    await inventoryPage.addItemToCart(1);
    await inventoryPage.verifyCartCount(2);
});

// TODO: Complete this test case
// Hints:
// 1. Create LoginPageAbstracted instance and login
// 2. Create AbstractInventoryPage instance
// 3. Sort items using sortByPriceLowToHigh()
// 4. Get item details using getItemDetails(index)
//    - First item: index 0
//    - Second item: index 1
// 5. Compare prices:
//    - Parse prices using parseFloat(price.replace('$', ''))
//    - Use expect(firstPrice).toBeLessThan(secondPrice)
test('Abstracted inventory test - sort items', async ({ page }) => {
    // Your code here
});

// TODO: Complete this test case
// Hints:
// 1. Create LoginPageAbstracted instance and login
// 2. Create AbstractInventoryPage instance
// 3. Get item details using getItemDetails(0)
// 4. Verify details:
//    - Title exists: expect(itemDetails.title).toBeTruthy()
//    - Price contains '$': expect(itemDetails.price).toContain('$')
//    - Description exists: expect(itemDetails.description).toBeTruthy()
test('Abstracted inventory test - check item details', async ({ page }) => {
   // Your code here
  });