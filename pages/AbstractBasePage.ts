import { Page, expect } from '@playwright/test';

export abstract class AbstractBasePage {
  protected constructor(protected readonly page: Page) {}

  protected async interactWithElement(
    selector: string, 
    action: 'click' | 'fill' | 'select' | 'wait', 
    value?: string
  ): Promise<void> {
    switch (action) {
      case 'click':
        await this.page.click(selector);
        break;
      case 'fill':
        if (!value) throw new Error('Value required for fill action');
        await this.page.fill(selector, value);
        break;
      case 'select':
        if (!value) throw new Error('Value required for select action');
        await this.page.selectOption(selector, value);
        break;
      case 'wait':
        await this.page.waitForSelector(selector);
        break;
    }
  }

  protected async verifyElement(
    selector: string,
    verification: 'visible' | 'text' | 'count',
    expected?: string | number
  ): Promise<void> {
    const element = this.page.locator(selector);
    
    switch (verification) {
      case 'visible':
        await element.waitFor({ state: 'visible' });
        break;
      case 'text':
        if (!expected) throw new Error('Expected text required');
        await expect(element).toHaveText(expected.toString());
        break;
      case 'count':
        if (!expected) throw new Error('Expected count required');
        await expect(element).toHaveCount(expected as number);
        break;
    }
  }
}