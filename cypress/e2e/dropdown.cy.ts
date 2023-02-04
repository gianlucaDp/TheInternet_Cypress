import { DropDownPage } from "./pages/dropDownPage";

describe("Tests for DropDown Page", () => {
  const page = new DropDownPage();
  it("Select the second options, verify the text is correct, select the first option, verify the text is correct", () => {
    page.visit();
    page.select(2);
    page.isSelected("Option 2");
    page.select("Option 1");
    page.isSelected("Option 1");
  });
});
