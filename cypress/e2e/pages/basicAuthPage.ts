import { BasePage } from "./basePage";

export class basicAuthpage extends BasePage {
  constructor() {
    super("https://the-internet.herokuapp.com/basic_auth");
  }

  elements = {
    body: () => cy.get("body"),
  };

  checkMessage(expectedMessage) {
    this.elements.body().should("include.text", expectedMessage);
  }

  visit(): Cypress.Chainable<Cypress.AUTWindow> {
    return super.visit({
      headers: {
        authorization: Cypress.env("base_auth"),
      },
      failOnStatusCode: false,
    });
  }
}
