/// <reference types = "Cypress"/>
describe("Validate WebdriverUni homepage links", () => {
    it("Confirm link redirect to the correct pages", () => {
        cy.enterWebDriverUni_HomePage();
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include','contactus')
        cy.go('back')
        cy.reload(true)
        cy.url().should('include','http://www.webdriveruniversity.com')
        cy.go('forward')
        cy.url().should('include','contactus')
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include','Login-Portal')
        cy.go('back')

    });
})