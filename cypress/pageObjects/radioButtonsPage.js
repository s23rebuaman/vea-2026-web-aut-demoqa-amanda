import { BasePage } from "./basePage";

export class RadioButtonsPage extends BasePage{
    static get url() {
        return 'radio-button';
    }

    static get yesButton() {
        return cy.get('#yesRadio');
    }

    static get resultsOutput() {
        return cy.get('.mt-3');
    }

    static get impressiveButton() {
        return cy.get('#impressiveRadio');
    }

    static get noButton() {
        return cy.get('#noRadio');
    }
}