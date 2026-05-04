import { BasePage } from "./basePage";

export class WebTablesPage extends BasePage {
    static get url() {
        return '/webtables'
    }

    static get addButton(){
        return cy.get('#addNewRecordButton');
    }

    static get firstNameField(){
        return cy.get('#firstName');
    }

    static get lastNameField(){
        return cy.get('#lastName');
    }

    static get emailField(){
        return cy.get('#userEmail');
    }

    static get ageField(){
        return cy.get('#age');
    }

    static get salaryField(){
        return cy.get('#salary');
    }

    static get departmentField(){
        return cy.get('#department');
    }

    static get submitButton(){
        return cy.get('#submit');
    }

    static get searchField() {
        return cy.get('#searchBox');
    }

    static get rows(){
        return cy.get('tbody tr');
    }

    static get rowCells() {
        return cy.get('tbody tr td');
    }

    static rowCellsBasedOnIndex(index){
        return this.rowCells.eq(index);
    }

    static deleteRow(index){
        this.rows.eq(index).find(`#delete-record-${index + 1}`).click();
    }
}