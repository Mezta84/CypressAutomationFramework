/// <reference types = "Cypress"/>
describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('Product1')
        cy.get('@Product1').its('length').should('be.gt', 5)
        cy.get('@Product1').should('include', 'Seaweed Conditioner')
    })
    it("Validate product from Thumnail", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')

    })
    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // })
        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        var total = 0
        var total1 = 0
        cy.get('@itemPrice').then(itemText => {
            var totalPrice = 0
            var itemPrice = itemText.split('$')
            for (var i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                totalPrice += Number(itemPrice[i])
            }
            total += totalPrice
            cy.log('The total of oneprice products is: ' + total)
        }).then(() => {
            expect(total).to.equal(311.6)
        })
        cy.get('@saleItemPrice').then(itemText1 => {
            var totalPrice1 = 0
            var saleItemPrice = itemText1.split('$')
            for (var i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                totalPrice1 += Number(saleItemPrice[i])
            }
            total1 += totalPrice1
            cy.log('The total of pricenew products is : ' + total1)
        }).then(() => {
            expect(total1).to.equal(314)
        }).then(() => {
            var  TOTAL =total + total1
            cy.log('The total price of all products is: '+TOTAL)
            expect(TOTAL).to.eq(625.6)
        });


    })

})
