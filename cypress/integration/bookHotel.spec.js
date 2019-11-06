let adactinData = require("../../adactin/testData/adactinData")
var signInPage = require("../../adactin/pageObjects/signInPage")
var orderBooked = require("../../adactin/pageObjects/searchHotelModule")
var bookHotel=require("../../adactin/pageObjects/bookHotelModule")

describe("Book a hotel",function(){
    it("Should book the required hotel",function(){
        signInPage.openUrl(adactinData.URL)
        signInPage.login(adactinData.USERNAME,adactinData.PASSWORD)
        orderBooked.searchRoom(adactinData.COUNTRY,adactinData.HOTEL,adactinData.ROOM_TYPE,adactinData.NO_OF_ROOMS,adactinData.DATE_IN,adactinData.DATE_OUT)
        bookHotel.bookRoom(adactinData.FIRST_NAME,adactinData.LAST_NAME,adactinData.ADDRESS,adactinData.CREDIT_CARD_NUMBER,adactinData.CREDIT_CARD_TYPE,adactinData.CREDIT_EXPIRY_MONTH,adactinData.CREDIT_EXPIRY_YEAR,adactinData.CREDIT_CVV)
    })
})