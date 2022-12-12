/// <reference types = "Cypress"/>
describe("Interact with dropdown lists via webdriveuni", () => {
    it("select specific values via select dropdown list", () => {
        cy.enterWebDriverUni_HomePage();
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get("#dropdowm-menu-1").select('Python')
        cy.get("#dropdowm-menu-2").select('JUnit')
        cy.get("#dropdowm-menu-3").select('JQuery')
    });
 
})
