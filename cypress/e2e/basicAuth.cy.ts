import { BasicAuthPage } from "./pages/basicAuthPage";

describe("Tests for Basic Auth Page", () => {
  const page = new BasicAuthPage();
  it("Verify page returns a positive message when the login is successful", () => {
    page.visit();
    page.checkMessage("Congratulations");
  });
});
