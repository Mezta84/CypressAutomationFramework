/// <reference types = "Cypress"/>
describe("Verify radiobuttons via webdriveuni", () => {
    beforeEach(() => {
        cy.enterWebDriverUni_Dropdown_Checkboxes_RadioButtons();
    });
    it("check and validate radio buttons", () => {
        cy.get("input[value='blue']").check().should('be.checked')
        cy.get('#radio-buttons').find("[type='radio']").first().click()
    });
    it.only("check and validate radio buttons", () => {
        cy.get('#radio-buttons').find("[type='radio']").first().click()
        cy.wait(1500)
        cy.get('#radio-buttons').find("[type='radio']").eq(3).click()
        cy.wait(1500)
        cy.get('#radio-buttons').find("[type='radio']").eq(1).click()
        cy.wait(1500)
        cy.get('#radio-buttons').find("[type='radio']").eq(4).click()
        cy.wait(1500)
        cy.get('#radio-buttons').find("[type='radio']").eq(2).click()
    });
})
