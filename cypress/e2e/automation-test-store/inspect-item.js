/// <reference types = "Cypress"/>
describe("Inspecting using chain of commands", () => {
    it("Inspect item using item header", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('a[title^="Skin"]').click().then((function (itemHeaderText) {
            cy.log("Selected the following item: " + itemHeaderText.text())
        }));
        cy.log('Test OK.')
    });
    it("Inspect item using item text", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then((function (itemHeaderText) {
            cy.log("Selected the following item: " + itemHeaderText.text())
        }));
        cy.log('Test OK.')
    });

    it("Inspect item using index", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click().then((function (itemHeaderText) {
            cy.log("Selected the following item: " + itemHeaderText.text())
        }));
        cy.log('Test OK.')
    });
})