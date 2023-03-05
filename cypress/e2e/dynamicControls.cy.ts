import { DynamicControls } from './pages/dynamicControls';

describe('Tests for Dynamic Content Page', () => {
  const page = new DynamicControls();
  it('Check the checkbox is removed and added correctly', () => {
    page.visit();
    page.checkboxShouldBeVisibile(true);
    page.removeCheckBox();
    page.waitForCheckBoxRemoveTransition();
    page.checkboxShouldBeVisibile(false);
    page.addCheckBox();
    page.waitForCheckBoxAddTransition();
    page.checkboxShouldBeVisibile(true);
  });

  it('Check the input is enabled and disabled correctly', () => {
    page.visit();
    page.inputShouldBeEnabled(false);
    page.enableInput();
    page.waitForInputEnableTransition();
    page.inputShouldBeEnabled(true);
    page.disableInput();
    page.waitForInputDisableTransition();
    page.inputShouldBeEnabled(false);
  });
});
