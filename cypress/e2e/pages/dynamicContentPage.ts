import { BasePage } from "./basePage";

export class DynamicContentPage extends BasePage {
  constructor() {
    super("https://the-internet.herokuapp.com/dynamic_content");
  }

  elements = {
    posts: () => cy.get("#content > .row"),
  };

  checkNumberOfPosts(number) {
    this.elements.posts().should("have.length", number);
  }

  checkTextOfPosts(minLegth) {
    this.elements.posts().each(($post) => {
      cy.log($post.text());
      expect($post.text().length).to.be.at.least(minLegth);
    });
  }
}
