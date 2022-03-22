/// <reference types="Cypress" />


describe('My Third Test Suite', function() 
{

    it('My First Test case', function() {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //  child window
        // can use invoke to remove targer attribute
        // or use cy.visit(url) the new url in the same window since cypress does not allow switching of tabs and windows
        // prop() to see the attricbute value
        cy.get('#opentab').then(function(e1) 
        {
            const url = e1.prop('href')
            cy.visit(url)
        })
    })
  
})