/// <reference types = "Cypress"/>
describe("Test Contact Us form via Automation Test Store", () => {
    before(() => {
        cy.fixture('userDetails').then((data) => {
            //this.date = data;
            globalThis.data = data
        })
    })
        it("Should be able to submit a successful submission via contact us form", () => {
            cy.visit("https://www.automationteststore.com/")
            cy.xpath('//a[contains(@href,"contact")]').click().then((title) => {
                cy.log("The title is: " + title.text())
            })
            //or cy.get('a[href$="contact"]').click()
            cy.xpath("//input[contains(@name,'first')]").type(data.first_name)
            //or cy.get('input[name^="first"]).type('Tarik')
            cy.xpath("//input[contains(@id,'email')]").type(data.email)
            //or cy.get('input[id$="mail"]').type('Tarik.mezgouria@gmail.com')

            cy.xpath("//*[contains(@name,'enquiry')]").type(data.body)
            //oe cy.get('textarea[id$="iry"]).type('This is a comment.')
            cy.xpath("//*[contains(@title,'mit')]").click()
            //or cy.get('button[title^="Sub"]).click()
            cy.get('.mb40 > :nth-child(3)').should('have.text', "Your enquiry has been successfully sent to the store owner!")
        });

    
})
