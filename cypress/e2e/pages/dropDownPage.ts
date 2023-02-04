import { BasePage } from "./basePage";

export class DropDownPage extends BasePage {
  constructor() {
    super("https://the-internet.herokuapp.com/dropdown");
  }

  elements = {
    dropdown: () => cy.get("#dropdown"),
  };

  select(option) {
    this.elements.dropdown().select(option);
  }

  isSelected(text) {
    this.elements.dropdown().find("option:selected").should("have.text", text);
  }
}
