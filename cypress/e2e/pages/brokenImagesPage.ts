import { BasePage } from "./basePage";

export class BrokenImagesPage extends BasePage {
  image_url: string = "https://the-internet.herokuapp.com/img/avatar-blank.jpg";
  constructor() {
    super("https://the-internet.herokuapp.com/broken_images");
  }

  elements = {
    images: () => cy.get("#content img"),
  };

  getImagesValidity() {
    this.elements.images().each(($img) => {
      if ($img[0].naturalWidth == 0) {
        cy.log("Image is invalid");
      } else {
        cy.log("Image is valid");
      }
    });
  }
  checkImageValid(imageNumber) {
    return this.elements
      .images()
      .eq(imageNumber)
      .should("be.visible")
      .and(($img) => expect($img[0].naturalWidth).to.be.gt(0));
  }

  checkImageChange() {
    cy.task("compareImages", {
      path1: Cypress.config("fixturesFolder") + "/expected-avatar-blank.jpeg",
      path2: this.image_url,
      w: 160,
      h: 160,
    }).then((res) => {
      expect(res).to.be.true;
    });
  }
}
