import { BrokenImagesPage } from "./pages/brokenImagesPage";

describe("Tests for Broken Images Page", () => {
  const page = new BrokenImagesPage();
  it("Verify that the last image is a valid one", () => {
    page.visit();
    page.getImagesValidity();
    page.checkImageValid(2);
  });
});
