import { BasePage } from "./basePage";

export class addRemoveElementsPage extends BasePage {
  constructor() {
    super("https://the-internet.herokuapp.com/add_remove_elements/");
  }

  elements = {
    addElementBtn: () => cy.contains("Add Element"),
    removeElementBtns: () => cy.get("#elements > button.added-manually"),
  };

  addAnElement() {
    this.elements.addElementBtn().click();
  }

  removeElement(position: number) {
    this.elements.removeElementBtns().eq(position).click();
  }

  checkNumberElements(expectedNumber: number) {
    this.elements.removeElementBtns().should("have.length", expectedNumber);
  }
  checkNoElementPresent() {
    expect(this.elements.removeElementBtns()).to.not.exist;
  }
}
