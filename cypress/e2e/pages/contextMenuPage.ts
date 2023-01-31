import { BasePage } from "./basePage";

export class ContextMenuPage extends BasePage {
  constructor() {
    super("https://the-internet.herokuapp.com/context_menu");
  }

  elements = {
    box: () => cy.get("#hot-spot"),
    title: () => cy.get("h3"),
  };

  clickBox() {
    this.elements.box().rightclick();
  }

  checkMessagePresent() {
    cy.on("window:confirm", ($txt) => {
      expect($txt).to.contain("You selected a context menu");
    });
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
