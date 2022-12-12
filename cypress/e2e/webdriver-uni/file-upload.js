/// <reference types="cypress" />
describe('Test file upload via webdriveruni', () => {
    beforeEach(() => {
        cy.enterWebDriverUni_HomePage();
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
    });
    it('upload file', () => {
        cy.get('#myFile').selectFile("cypress/fixtures/img.jpg")
        cy.get('#submit-button').click()

        
    });
    it('upload no file', () => {
        cy.get('#submit-button').click()
        
    });
});