/// <reference types = "Cypress"/>
describe("Verify checkboxes via webdriveuni", () => {
    beforeEach(() => {
        cy.enterWebDriverUni_Dropdown_Checkboxes_RadioButtons();
    });
    it("check and validate checkbox", () => {
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(1) > input').as('checkbox1')
        cy.get('@checkbox1').check()
        cy.get('@checkbox1').should('be.checked')
    });
    it("uncheck and validate checkbox", () => {
        cy.get(':nth-child(5) > input').as('checkbox3')
        cy.get('@checkbox3').uncheck()
        cy.get('@checkbox3').should('not.be.checked')
    });
    it("check mutiples checkboxes", () => {
        cy.get(':nth-child(5) > input').as('checkbox3')
        cy.get('@checkbox3').uncheck()
        cy.get('@checkbox3').should('not.be.checked')
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"])
    });
})
