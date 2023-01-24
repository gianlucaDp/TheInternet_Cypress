import { addRemoveElementsPage } from "./pages/addRemoveElementsPage";

describe("Tests for the Add Remove Elements Page", () => {
  const page = new addRemoveElementsPage();
  it("Add a couple of elements and verify the correct number of elements is present", () => {
    page.visit();
    page.addAnElement();
    page.addAnElement();
    page.addAnElement();
    page.checkNumberElements(3);
  });

  it("Verify no element exists before adding and after deleting all the elements", () => {
    page.visit();
    page.checkNumberElements(0);
    page.addAnElement();
    page.addAnElement();
    page.addAnElement();
    page.removeElement(2);
    page.removeElement(1);
    page.removeElement(0);
    page.checkNumberElements(0);
  });

  it("Verify it is possible to remove elements between other elements", () => {
    page.visit();
    page.addAnElement();
    page.addAnElement();
    page.addAnElement();
    page.removeElement(1);
    page.checkNumberElements(2);
  });

  it("Verify the page can handle more than one row of elements", () => {
    const numElements = 20;

    page.visit();

    for (let index = 0; index < numElements; index++) {
      page.addAnElement();
    }
    page.removeElement(1);
    page.checkNumberElements(numElements - 1);
  });
});
