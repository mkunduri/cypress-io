let orderbookLocator = require('../pageLocators/searchHotelLocators');
let bookHotelLocator=require('../pageLocators/bookHotelLocators');
module.exports={
    bookRoom:function(firstName,lastName,address,creditNumber,creditCardType,creditExpiryMonth,creditExpiryYear,cvv){
        cy.get(orderbookLocator.RADIO_BOX).check()
        cy.get(orderbookLocator.CONTINUE_BUTTON).click()
        cy.url().should('include','BookHotel')
        cy.get(bookHotelLocator.FIRST_NAME).type(firstName)
        cy.get(bookHotelLocator.LAST_NAME).type(lastName)
        cy.get(bookHotelLocator.ADDRESS).type(address)
        cy.get(bookHotelLocator.CREDIT_CARD).type(creditNumber)
        cy.get(bookHotelLocator.CREDIT_CARD_TYPE).select(creditCardType)
        cy.get(bookHotelLocator.CREDIT_EXPIRY_MONTH).select(creditExpiryMonth)
        cy.get(bookHotelLocator.CREDIT_EXPIRY_YEAR).select(creditExpiryYear)
        cy.get(bookHotelLocator.CREDIT_CVV).type(cvv)
        cy.get(bookHotelLocator.BOOK_NOW_BUTTON).click()
        cy.wait(15000)
        cy.url().should('include','BookingConfirm')
    }
}