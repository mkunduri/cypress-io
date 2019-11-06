let titleVerificationLoc = require('../pageLocators/titleVerificationLocators');

module.exports = {
    titleVerificationOnPages: function(){
        cy.title().should('include', 'Search Hotel')
        cy.get(titleVerificationLoc.BOOKED_ITERNARY)
        .click();  
        cy.url().should('include', 'BookedItinerary')
        cy.get(titleVerificationLoc.CHANGE_PASSWORD)
        .click(); 
        cy.url().should('include', 'ChangePassword')
    }
}