let adactinData = require("../../adactin/testData/adactinData")
var signInPage = require("../../adactin/pageObjects/signInPage")
var orderBooked = require("../../adactin/pageObjects/searchHotelModule")

describe("Search a hotel",function(){
    it("Should show the required hotel",function(){
        signInPage.openUrl(adactinData.URL)
        signInPage.login(adactinData.USERNAME,adactinData.PASSWORD)
        orderBooked.searchRoom(adactinData.COUNTRY,adactinData.HOTEL,adactinData.ROOM_TYPE,adactinData.NO_OF_ROOMS,adactinData.DATE_IN,adactinData.DATE_OUT)
    })
})