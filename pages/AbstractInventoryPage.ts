import { AbstractProductPage } from './AbstractProductPage';
import { Page } from '@playwright/test';

export class AbstractInventoryPage extends AbstractProductPage {
  protected readonly selectors = {
    itemContainer: '.inventory_item',
    price: '.inventory_item_price',
    title: '.inventory_item_name',
    description: '.inventory_item_desc',
    addToCartButton: '.btn_inventory',
    cartBadge: '.shopping_cart_badge',
    sortDropdown: '.product_sort_container'
  };

  constructor(page: Page) {
    super(page);
  }

  async addItemToCart(index: number): Promise<void> {
    await this.interactWithElement(
      `${this.selectors.itemContainer}:nth-child(${index + 1}) ${this.selectors.addToCartButton}`,
      'click'
    );
  }

  async verifyCartCount(expectedCount: number): Promise<void> {
    await this.verifyElement(this.selectors.cartBadge, 'text', expectedCount.toString());
  }

  async sortByPriceLowToHigh(): Promise<void> {
    await this.interactWithElement(this.selectors.sortDropdown, 'select', 'lohi');
  }
}