export class BasePage {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  visit(extraParameters = {}) {
    return cy.visit(this.url, extraParameters);
  }
}
