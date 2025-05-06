export class BasePage {
    constructor(protected page) {}
  
    async fillField(selectorMap: Record<string, string>, field: string, value: string) {
      await this.page.fill(selectorMap[field], value);
    }
  
    async clickElement(selectorMap: Record<string, string>, element: string) {
      await this.page.click(selectorMap[element]);
    }
  }
  