import { BasePage } from "./basePage";

export class BrokenImagesPage extends BasePage {
  constructor() {
    super("https://the-internet.herokuapp.com/broken_images");
  }

  elements = {
    images: () => cy.get("#content img"),
  };

  getImagesValidity() {
    this.elements.images().each(($img, index, $list) => {
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
}
