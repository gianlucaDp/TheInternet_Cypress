import { challengingDomPage } from "./pages/challengingDomPage";

describe("Tests for Challenging DOM Page", () => {
  const page = new challengingDomPage();
  it("Check being able to get all the elements from the page", () => {
    page.visit();
    page.getSecretCode();
    page.getTableValue("Ipsum", 3);
    page.getTableValue(5, 2);
    page.getButton("rgb(198, 15, 19)");
    page.editRow(3);
    page.deleteRow(4);
  });
});
