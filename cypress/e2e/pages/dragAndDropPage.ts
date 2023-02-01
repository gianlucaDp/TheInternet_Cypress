import { BasePage } from "./basePage";

export class DragAndDropPage extends BasePage {
  constructor() {
    super("https://the-internet.herokuapp.com/drag_and_drop");
  }

  elements = {
    box1: () => cy.get("#column-a"),
    box2: () => cy.get("#column-b"),
  };

  getBoxes() {
    return [this.elements.box1(), this.elements.box2()];
  }

  checkBoxText(boxNumber: number, expectedText: string) {
    this.getBoxes()
      [boxNumber - 1].find("header")
      .then(($box) => {
        expect($box.text()).to.contain(expectedText);
      });
  }

  moveBoxes(fromNumber: number, toNumber: number) {
    const dataTransfer = new DataTransfer();
    let from = this.getBoxes()[fromNumber - 1];
    let to = this.getBoxes()[toNumber - 1];

    cy.log("Moving " + fromNumber);
    from.trigger("dragstart", {
      dataTransfer,
    });
    cy.log("To " + toNumber);
    to.trigger("drop", {
      dataTransfer,
    });
  }
}
