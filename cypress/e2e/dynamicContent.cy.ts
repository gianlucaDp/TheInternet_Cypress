import { DynamicContentPage } from "./pages/dynamicContentPage";

describe("Tests for Dynamic Content Page", () => {
  const page = new DynamicContentPage();
  it("Check the number of posts is correct and that each post contains text", () => {
    page.visit();
    page.checkNumberOfPosts(3);
    page.checkTextOfPosts(100);
  });
});
