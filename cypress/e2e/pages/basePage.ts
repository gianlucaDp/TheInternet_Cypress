export class BasePage {
  url: string;
  elements = {};

  constructor(url: string) {
    this.url = url;
  }

  visit(extraParameters = {}) {
    return cy.visit(this.url, extraParameters);
  }
}
