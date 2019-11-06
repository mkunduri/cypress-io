let adactinData = require("../../adactin/testData/adactinData")
var signInPage = require("../../adactin/pageObjects/signInPage")
var errorDate = require("../../adactin/pageObjects/dateErrorModule")

describe("Book hotel for invalid date",function(){
    it("should throw an error",function(){ 
        signInPage.openUrl(adactinData.URL)
        signInPage.login(adactinData.USERNAME,adactinData.PASSWORD)
        errorDate.orderRoom(adactinData.COUNTRY,adactinData.HOTEL,adactinData.ROOM_TYPE,adactinData.NO_OF_ROOMS,adactinData.ERROR_DATE_IN,adactinData.ERROR_DATE_OUT)
    })
})