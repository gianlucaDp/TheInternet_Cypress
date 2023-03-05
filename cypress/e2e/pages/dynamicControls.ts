import { BasePage } from './basePage';

export class DynamicControls extends BasePage {
  constructor() {
    super('https://the-internet.herokuapp.com/dynamic_controls');
  }

  elements = {
    checkboxController: () => cy.get('#checkbox-example > button'),
    checkbox: () => cy.get('#checkbox'),
    checkBoxLoadingBar: () => cy.get('#checkbox-example > #loading'),
    checkBoxMessage: () => cy.get('#checkbox-example > #message'),
    inputController: () => cy.get('#input-example > button'),
    input: () => cy.get('#input-example > input'),
    inputLoadingBar: () => cy.get('#input-example > #loading'),
    inputMessage: () => cy.get('#input-example > #message'),
  };

  constants = {
    CHECKBOX_GONE: "It's gone!",
    CHECKBOX_BACK: "It's back!",
    INPUT_ENABLED: "It's enabled!",
    INPUT_DISABLED: "It's disabled!",
  };

  checkboxShouldBeVisibile(expect: boolean) {
    if (expect) {
      this.elements.checkbox().should('be.visible');
    } else {
      this.elements.checkbox().should('not.exist');
    }
  }

  _modifyCheckBoxStatus(visible: boolean) {
    this.elements.checkboxController().then(($el) => {
      if ($el.text().toLocaleLowerCase().includes('remove')) {
        if (!visible) {
          this.elements.checkboxController().click();
        }
      } else {
        if (visible) {
          this.elements.checkboxController().click();
        }
      }
    });
  }

  addCheckBox() {
    this._modifyCheckBoxStatus(true);
  }

  removeCheckBox() {
    this._modifyCheckBoxStatus(false);
  }

  waitForCheckBoxAddTransition() {
    this.elements.checkBoxLoadingBar().should('be.visible');
    this.elements
      .checkBoxMessage()
      .should('have.text', this.constants.CHECKBOX_BACK);
    this.elements.checkBoxLoadingBar().should('not.be.visible');
  }

  waitForCheckBoxRemoveTransition() {
    this.elements.checkBoxLoadingBar().should('be.visible');
    this.elements
      .checkBoxMessage()
      .should('have.text', this.constants.CHECKBOX_GONE);
    this.elements.checkBoxLoadingBar().should('not.be.visible');
  }

  inputShouldBeEnabled(expect: boolean) {
    if (expect) {
      this.elements.input().should('not.have.attr', 'disabled');
    } else {
      this.elements.input().should('have.attr', 'disabled');
    }
  }

  _modifyInputStatus(enabled: boolean) {
    this.elements.inputController().then(($el) => {
      if ($el.text().toLocaleLowerCase().includes('disable')) {
        if (!enabled) {
          this.elements.inputController().click();
        }
      } else {
        if (enabled) {
          this.elements.inputController().click();
        }
      }
    });
  }

  enableInput() {
    this._modifyInputStatus(true);
  }

  disableInput() {
    this._modifyInputStatus(false);
  }

  waitForInputEnableTransition() {
    this.elements.inputLoadingBar().should('be.visible');
    this.elements
      .inputMessage()
      .should('have.text', this.constants.INPUT_ENABLED);
    // this.elements.inputLoadingBar().should('not.be.visible') Website bug, loading bar does not disappear
  }

  waitForInputDisableTransition() {
    this.elements.inputLoadingBar().should('be.visible');
    this.elements
      .inputMessage()
      .should('have.text', this.constants.INPUT_DISABLED);
    // this.elements.inputLoadingBar().should('not.be.visible') Website bug, loading bar does not disappear
  }
}
