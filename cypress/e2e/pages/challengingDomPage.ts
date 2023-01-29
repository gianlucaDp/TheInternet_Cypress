import { BasePage } from "./basePage";
import { isNumber } from "../../support/utils.js";

export class ChallengingDomPage extends BasePage {
  constructor() {
    super("https://the-internet.herokuapp.com/challenging_dom");
  }

  elements = {
    colorBtns: () => cy.get(".button"),
    tableHeaders: () => cy.get("table th"),
    tableRows: () => cy.get("table tr"),
    tableCells: () => cy.get("td"),
    tableEdits: () => cy.contains("edit"),
    tableDeletes: () => cy.contains("delete"),
    canvas: () => cy.get("#canvas"),
  };

  getButton(expectedColor) {
    this.elements.colorBtns().each(($button) => {
      let color = $button.css("background-color");
      if (color == expectedColor) {
        cy.log("Button found " + $button.text());
      }
    });
  }

  editRow(rowNumber) {
    this.elements
      .tableRows()
      .eq(rowNumber)
      .within(() => {
        this.elements.tableDeletes().click();
      });
    cy.url().should("include", "#delete");
  }

  deleteRow(rowNumber) {
    this.elements
      .tableRows()
      .eq(rowNumber)
      .within(() => {
        this.elements.tableEdits().click();
      });
    cy.url().should("include", "#edit");
  }

  getTableValue(columnNumberOrName, rowNumber) {
    let position = null;
    cy.then(() => {
      if (isNumber(columnNumberOrName)) {
        position = columnNumberOrName;
      } else {
        this.elements.tableHeaders().each(($el, index, $list) => {
          if ($el.text() == columnNumberOrName) {
            position = index;
            console.log("Found name in position " + position);
          }
        });
      }
    }).then(() => {
      this.elements
        .tableRows()
        .eq(rowNumber)
        .within((row) => {
          this.elements
            .tableCells()
            .eq(position)
            .then(($el) => {
              cy.log($el.text());
              return cy.wrap($el);
            });
        });
    });
  }

  getSecretCode() {
    this.elements
      .canvas()
      .screenshot("code", { overwrite: true })
      .then(() => {
        cy.task(
          "getTextFromImage",
          Cypress.config("screenshotsFolder") + "/" + "code.png"
        ).then(($res: string) => {
          cy.log($res);
        });
      });
  }
}
