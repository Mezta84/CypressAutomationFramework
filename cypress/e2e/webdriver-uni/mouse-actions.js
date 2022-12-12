/// <reference types = "Cypress"/>
describe("Test mouse actions", () => {
    beforeEach(() => {
        cy.enterWebDriverUni_HomePage();
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
    });
    it("drag and drop a draggable item", () => {
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('#double-click').dblclick()
    })
    it("double mouse click", () => {
        cy.get('#double-click').dblclick()
    })
    it("click and hold", () => {
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })
})
