import { BasePage } from "./basePage";

export class CheckBoxesPage extends BasePage {
  constructor() {
    super("https://the-internet.herokuapp.com/checkboxes");
  }

  elements = {
    checkBoxes: () => cy.get("#checkboxes >input"),
  };

  check(num) {
    this.elements
      .checkBoxes()
      .eq(num - 1)
      .check();
  }

  uncheck(num) {
    this.elements
      .checkBoxes()
      .eq(num - 1)
      .uncheck();
  }

  shouldBeChecked(num) {
    this.elements
      .checkBoxes()
      .eq(num - 1)
      .should("be.checked");
  }

  shouldNotChecked(num) {
    this.elements
      .checkBoxes()
      .eq(num - 1)
      .should("not.be.checked");
  }
}
