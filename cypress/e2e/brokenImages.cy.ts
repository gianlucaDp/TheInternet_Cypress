import { brokenImagesPage } from "./pages/brokenImagesPage";

describe("Tests for Broken Images Page", () => {
  const page = new brokenImagesPage();
  it("Verify that the last image is a valid one", () => {
    page.visit();
    page.getImagesValidity();
    page.checkImageValid(2);
  });
});
