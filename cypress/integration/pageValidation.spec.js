let adactinData = require("../../adactin/testData/adactinData")
var signInPage = require("../../adactin/pageObjects/signInPage")
var tittleVerification = require("../../adactin/pageObjects/pageValidationModule")

describe("Verify all page navigations",function(){
    it("Should navigate to expected urls",function(){
      signInPage.openUrl(adactinData.URL)
      signInPage.login(adactinData.USERNAME,adactinData.PASSWORD)
      tittleVerification.titleVerificationOnPages()
    })
  })