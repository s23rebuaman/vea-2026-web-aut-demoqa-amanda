import { BasePage } from "./basePage";

export class TextBoxPage extends BasePage{
    static get url(){
        return '/text-box';
    }

    static get userNameField() {
        return cy.get('input[id="userName"]');
    }

    static get emailField() {
        return cy.get('input#userEmail');
    }

    static get currentAddressField() {
        return cy.get('textarea#currentAddress');
    }

    static get permanentAddressField() {
        return cy.get('textarea#permanentAddress');
    }

    static get submitButton() {
        return cy.get('button#submit');
    }

    static get nameOutput(){
        return cy.get('p#name');
    }

    static get emailOutput(){
        return cy.get('p#email');
    }

    static get currentAddressOutput(){
        return cy.get('p#currentAddress');
    }

    static get permanentAddressOutput(){
        return cy.get('p#permanentAddress');
    }
}