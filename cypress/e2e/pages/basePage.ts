export class BasePage{
    url: string;

    constructor(url: string){
        this.url = url;
    }

    visit(){
        return cy.visit(this.url);
    }


}