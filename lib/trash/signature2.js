var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {

    ClickSignSubmitSignature: function() {

        browser.ignoreSynchronization = true;
        browser.getAllWindowHandles().then(function(handles) {
            var wHandle = handles[1];
            browser.switchTo().window(wHandle);
        });

        browser.switchTo().frame(browser.findElement(by.xpath('//iframe')))

        browser.findElement(by.css('.sign-field')).click()
            // element(by.xpath("(//SPAN[@class='sign-field assigned'])[1]")).click(); //clicks on the signature container

        browser.sleep(3000);

        browser.getAllWindowHandles().then(function(handles) {
            var wHandle = handles[1];
            console.log(wHandle);
            browser.switchTo().window(wHandle);
        });
        browser.sleep(3000);
        // element(by.xpath('//div/canvas')).click();
        element(by.id('typedTab')).click();
        element(by.id('Signature')).click();
        element(by.id('Signature')).sendKeys(data.signature2.signedSignature2);
        element(by.id('apply-sign')).click();
    },



    ValidateEmailSentPopup: function() {
        element(by.xpath('//div[@class="toast-message" and contains(.,"You will receive an email notification once it has been accepted")]')).click();
    }
}