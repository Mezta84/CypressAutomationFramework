/// <reference types = "Cypress"/>
describe("Verify autocomplete dropdown lists via webdriveuni", () => {
    it("select specific product via autocomplete list", () => {
        cy.enterWebDriverUni_HomePage();
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()
        cy.get('#myInput').type('a')
        cy.get("#myInputautocomplete-list>*").each(($el, index, $list) => {
            const productName = $el.text()
            const productToSelect = 'Apple'
            if (productName === productToSelect) {
                $el.trigger('click') //
                cy.get('#submit-button').click()
                cy.url().should('contain', productName)
            }
        }).then(() => {
            cy.get('#myInput').type('g')
            cy.get("#myInputautocomplete-list>*").each(($el, index, $list) => {
                const productName = $el.text()
                const productToSelect = 'Grapes'
                if (productName === productToSelect) {
                    cy.wrap($el).click() //
                    cy.get('#submit-button').click()
                    cy.url().should('contain', productName)
                }
            })
        });
    })
})