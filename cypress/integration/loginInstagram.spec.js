

/// <reference types= "cypress" />
//This function is to describe the test suite
describe("Instagram Login Test suite", function () {
    //This function is to describe the test case
    it("Instagram login", function () {
    //Visit instagram.
    cy.visit("https://www.instagram.com/");
    //Spy on username input field
    cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ')
        //type your username
        .type("qualestest");
    //Spy on password field
    cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ')
        //type your password field
        .type("qualestest123");
    //Spy login button
    cy.get('.sqdOP > .qF0y9').click();
    //Inspect search bar
    cy.get('.eyXLr')
        // Assert that the search box is visible
        .should("be.visible") 
  });
});