import { ContextMenuPage } from "./pages/contextMenuPage";

describe("Tests for Context Menu Page", () => {
  const page = new ContextMenuPage();
  it("Verify page message popup after right clicking on the box area", () => {
    page.visit();
    page.clickBox();
    page.checkMessagePresent();
  });
});
