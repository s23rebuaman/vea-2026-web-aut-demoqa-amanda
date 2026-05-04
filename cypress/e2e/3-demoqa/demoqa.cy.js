const { TextBoxPage } = require('../../pageObjects/textBoxPage');
const { CheckboxPage } = require('../../pageObjects/checkboxPage');
const { RadioButtonsPage } = require('../../pageObjects/radioButtonsPage');
const { ButtonsPage } = require('../../pageObjects/buttonsPage');
const { WebTablesPage } = require('../../pageObjects/webTablesPage');

describe('DEMO QA', () => {
  context('Text Box tests', () => {
    beforeEach(() => {
      //cy.visit('/text-box')
      TextBoxPage.visit();
    });

    it('Input information and validate', () => {
      //Set full name value
      //cy.get('input[id="userName"]').type('Jone Doe');
      TextBoxPage.userNameField.type('Jone Doe');
      //Set email value
      //cy.get('input#userEmail').type('xxx@yyy.com');
      TextBoxPage.emailField.type('xxx@yyy.com');
      //Set current address value
      //cy.get('textarea#currentAddress').type('Address 1');
      TextBoxPage.currentAddressField.type('Address 1');
      //Set permanent address value
      //cy.get('textarea#permanentAddress').type('Address B');
      TextBoxPage.permanentAddressField.type('Address B');
      //Click on submit
      //cy.get('button#submit').click();
      TextBoxPage.submitButton.click();
      //Validate output
      //cy.get('p#name').should('have.text', 'Name:Jone Doe');
      TextBoxPage.nameOutput.should('have.text', 'Name:Jone Doe');
      //cy.get('p#email').should('have.text', 'Email:xxx@yyy.com');
      TextBoxPage.emailOutput.should('have.text', 'Email:xxx@yyy.com');
      //cy.get('p#currentAddress').should('contain.text', 'Current Address :Address 1');
      TextBoxPage.currentAddressOutput.should('contain.text', 'Current Address :Address 1');
      //cy.get('p#permanentAddress').should('contain.text', 'Permananet Address :Address B');
      TextBoxPage.permanentAddressOutput.should('contain.text', 'Permananet Address :Address B');
    });

    it('Incorrect email', () => {
      TextBoxPage.emailField.should('not.have.class', 'field-error');
      //Set incorrect email
      TextBoxPage.emailField.type('aaa@bbb@ccc.com');
      //Click submit button
      TextBoxPage.submitButton.click();
      //Validate the red border around the emailField
      TextBoxPage.emailField.should('have.class', 'field-error');
    });
  });
  context('Checkbox tests', () => {
    beforeEach(() => {
      CheckboxPage.visit();
    });
    it('Check checkboxes', () => {
      //Expand All folders
      CheckboxPage.expandFolder('Home');
      CheckboxPage.expandFolder('Desktop');
      CheckboxPage.expandFolder('Documents');
      CheckboxPage.expandFolder('WorkSpace');
      CheckboxPage.expandFolder('Office');
      CheckboxPage.expandFolder('Downloads');

      //Check: Notes, Angular, Private, Excel File.doc
      CheckboxPage.CheckboxPage('Notes');
      CheckboxPage.CheckboxPage('Angular');
      CheckboxPage.CheckboxPage('Private');
      CheckboxPage.CheckboxPage('Excel File.doc');

      //Validate that output contains all the checked checkboxes
      CheckboxPage.resultsOutput.should(
        'contain.text',
        'You have selected :notesangularprivateexcelFile'
      );

      //You have selected :notes angular private excelFile
      CheckboxPage.textSuccess.should('contain.text', 'notes');
      CheckboxPage.textSuccess.should('contain.text', 'angular');
      CheckboxPage.textSuccess.should('contain.text', 'private');
      CheckboxPage.textSuccess.should('contain.text', 'excelFile');
    });
  });

  context('Radio Button tests', () => {
    beforeEach(() => {
      RadioButtonsPage.visit();
    });
    it('Click and validate Radio Buttons', () => {
      //Click on Yes button
      RadioButtonsPage.yesButton.click();
      //Validate that we see the message: You have selected Yes
      RadioButtonsPage.resultsOutput.should('contain.text', 'You have selected Yes');
      RadioButtonsPage.textSuccess.should('contain.text', 'Yes');
      //Click on Ipressive button
      RadioButtonsPage.impressiveButton.click();
      //Validate that we see the message: You have selected Impressive
      RadioButtonsPage.resultsOutput.should('contain.text', 'You have selected Impressive');
      RadioButtonsPage.textSuccess.should('contain.text', 'Impressive');
      //Validate that No button is disabled
      RadioButtonsPage.noButton.should('have.class', 'disabled');
      RadioButtonsPage.noButton.should('have.attr', 'disabled');
      RadioButtonsPage.noButton.should('be.disabled');
    });
  });

  context('Buttons tests', () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });
    it('Click and validate Buttons', () => {
      //Persorm doubleclick on Double Click Me Button
      ButtonsPage.doubleClickMeButton.dblclick();
      //Validate message
      ButtonsPage.doubleClickMessage.should('contain.text', 'You have done a double click');
      //Perform right click on Right Click Me Button
      ButtonsPage.rightClickMeButton.rightclick();
      //Validate message
      ButtonsPage.rightClickMessage.should('contain.text', 'You have done a right click');
      //Perform click on Click Me Button
      ButtonsPage.clickMeButton.click();
      //Validate message
      ButtonsPage.clickMessage.should('contain.text', 'You have done a dynamic click');
    });
  });

  context('Web Tables tests', () => {
    beforeEach(() => {
      ButtonsPage.visit();
      WebTablesPage.visit();
    });
    it('Add new entry and validate', () => {
      const testData = {
        name: 'Jone',
        last: 'Doe',
        email: 'xxx@yyy.com',
        age: '34',
        salary: '69420',
        department: 'head',
      };
      //Click on Add button
      WebTablesPage.addButton.click();
      //Set First name
      WebTablesPage.firstNameField.type(testData.name);
      //Set Last name
      WebTablesPage.lastNameField.type(testData.last);
      //Set Email
      WebTablesPage.emailField.type(testData.email);
      //Set Age
      WebTablesPage.ageField.type(testData.age);
      //Set Salary
      WebTablesPage.salaryField.type(testData.salary);
      //Set Department
      WebTablesPage.departmentField.type(testData.department);
      //Click on Submit button
      WebTablesPage.submitButton.click();
      //Search by using the previously used email
      WebTablesPage.searchField.type(testData.email);
      //Validate that we see 1 row
      WebTablesPage.rows.should('have.length', 1);
      //Validate that this row contains previously set information
      WebTablesPage.rowCellsBasedOnIndex(0).should('contain.text', testData.name);
      WebTablesPage.rowCellsBasedOnIndex(1).should('contain.text', testData.last);
      WebTablesPage.rowCellsBasedOnIndex(2).should('contain.text', testData.age);
      WebTablesPage.rowCellsBasedOnIndex(3).should('contain.text', testData.email);
      WebTablesPage.rowCellsBasedOnIndex(4).should('contain.text', testData.salary);
      WebTablesPage.rowCellsBasedOnIndex(5).should('contain.text', testData.department);
    });

    it('Delete row', () => {
      WebTablesPage.rows.should('have.length', 3);
      WebTablesPage.deleteRow(1);
      WebTablesPage.rows.should('have.length', 2);
    });
  });
});
