import { BasePage } from "./basePage";

export class ButtonsPage extends BasePage{
    static get url() {
        return '/buttons';
    }

    static get doubleClickMeButton(){
        return cy.get('#doubleClickBtn');
    }

    static get doubleClickMessage(){
        return cy.get('#doubleClickMessage');
    }

    static get rightClickMeButton(){
        return cy.get('#rightClickBtn');
    }

    static get rightClickMessage(){
        return cy.get('#rightClickMessage');
    }

    static get clickMeButton(){
        return cy.get('button').contains(/^Click Me$/);
    }

    static get clickMessage(){
        return cy.get('#dynamicClickMessage');
    }
}