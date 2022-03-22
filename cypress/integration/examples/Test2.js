/// <reference types="Cypress" />


describe('My Second Test Suite', function() 
{

    it('My FirstTest case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        //selenium get hit url in brwoser, cypress get acts lie findElement in selenium
 
        //Parent chilc chaining
        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                $el.find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        // cy.get(':nth-child(14)').click()
        cy.contains('Place Order').click()

        
    })
  
})