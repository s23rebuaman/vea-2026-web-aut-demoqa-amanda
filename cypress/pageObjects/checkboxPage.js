import { BasePage } from "./basePage";

export class CheckboxPage extends BasePage{
    static get url(){
        return '/checkbox';
    }

    static expandFolder(folderName) {
        cy.get('.rc-tree-title').contains(folderName).parent().parent().find(".rc-tree-switcher").click();
    }

    static CheckboxPage(documentName){
        cy.get(".rc-tree-title").contains(documentName).parent().parent().find(".rc-tree-checkbox").click();
    }

    static get resultsOutput() {
        return cy.get('#result');
    }
}