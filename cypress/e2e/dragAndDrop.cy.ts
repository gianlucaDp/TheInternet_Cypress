import { DragAndDropPage } from "./pages/dragAndDropPage";

describe("Tests for Drag And Drop Page", () => {
  const page = new DragAndDropPage();
  it("Verify moving A on B works correctly", () => {
    page.visit();
    page.checkBoxText(1, "A");
    page.checkBoxText(2, "B");
    page.moveBoxes(1, 2);
    page.checkBoxText(1, "B");
    page.checkBoxText(2, "A");
  });

  it("Verify moving B on A works correctly", () => {
    page.visit();
    page.checkBoxText(1, "A");
    page.checkBoxText(2, "B");
    page.moveBoxes(2, 1);
    page.checkBoxText(1, "B");
    page.checkBoxText(2, "A");
  });

  it("Verify moving A on B and then B on A works correctly", () => {
    page.visit();
    page.checkBoxText(1, "A");
    page.checkBoxText(2, "B");
    page.moveBoxes(1, 2);
    page.moveBoxes(2, 1);
    page.checkBoxText(1, "A");
    page.checkBoxText(2, "B");
  });

  it("Verify moving elements on themselves works correctly", () => {
    page.visit();
    page.checkBoxText(1, "A");
    page.checkBoxText(2, "B");
    page.moveBoxes(1, 1);
    page.moveBoxes(2, 2);
    page.checkBoxText(1, "A");
    page.checkBoxText(2, "B");
  });
});
