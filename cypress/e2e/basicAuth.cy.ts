import { basicAuthpage } from "./pages/basicAuthPage";

describe("Tests for the Add Remove Elements Page", () => {
  const page = new basicAuthpage();
  it("Verify page returns a positive message when the login is successful", () => {
    page.visit(true);
    page.checkMessage("Congratulations");
  });

  it("Verify page returns a negative message when the login is invalid", () => {
    page.visit(false);
    page.checkMessage("Unhautorized");
  });
});
