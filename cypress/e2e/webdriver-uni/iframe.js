/// <reference types = "Cypress"/>
describe("Handling iframe and models", () => {
    it("Handle webdriveruni iframe and modal", () => {
        cy.visit("/")
        cy.get('#iframe').invoke('removeAttr', 'target').click()
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find(".modal-content").as('modal')
        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('laptops, game consoles, cameras...')
        })
        cy.get('@modal').contains('Close').click()
    });
})
