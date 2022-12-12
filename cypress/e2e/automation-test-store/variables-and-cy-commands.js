/// <reference types = "Cypress"/>
describe("Verifying variables, Cypress commands and jQuery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('a[href*="product/category&path"]').contains('Makeup').click()
        //cy.get('a[href*="product/category&path"]').contains('Skincare').click()
        cy.get("h1 .maintext").then((title) => {
            const Title = title.text()
            cy.log("The title is: " + Title)
            expect(Title).is.eq('Makeup')
        })
    });
    it("Validate properties of the contact us page.", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('a[href*="contact"]').invoke('removeAttr', 'target').click()
        //uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
        //jQuery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11')
            expect(firstNameText).to.contain('First name')
            //embedded commands (closure)
            cy.get('#field_11').then(text => {
                cy.log(text.text())
                cy.log(text)
            })
        })
    })
})
