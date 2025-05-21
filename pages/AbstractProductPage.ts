import { AbstractBasePage } from './AbstractBasePage';
import { Page } from '@playwright/test';

export abstract class AbstractProductPage extends AbstractBasePage {
  protected abstract readonly selectors: {
    itemContainer: string;
    price: string;
    title: string;
    description: string;
  };

  constructor(page: Page) {
    super(page);
  }

  public async getItemDetails(index: number): Promise<{ title: string | null; price: string | null; description: string | null }> {
    const items = await this.page.locator(this.selectors.itemContainer).all();
    if (index >= items.length) throw new Error('Index out of bounds');
    
    return {
      title: await items[index].locator(this.selectors.title).textContent(),
      price: await items[index].locator(this.selectors.price).textContent(),
      description: await items[index].locator(this.selectors.description).textContent()
    };
  }
}