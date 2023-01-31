import { CheckBoxesPage } from "./pages/checkboxesPage";

describe("Tests for CheckBoxes Page", () => {
  const page = new CheckBoxesPage();
  it("Check the first, uncheck the second and verify the checkboxes are in the correct state", () => {
    page.visit();
    page.check(1);
    page.uncheck(2);
    page.shouldBeChecked(1);
    page.shouldNotChecked(2);
  });
});
