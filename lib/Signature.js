var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {

    ClickSignSubmitSignature: function (signature) {

        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath('//iframe')))

        element(by.xpath("(//SPAN[@class='sign-field assigned'])[1]")).click(); //clicks on the signature container

        browser.sleep(data.application.waitTime.default);

        browser.getAllWindowHandles().then(function (handles) {
            var wHandle = handles[0];
            browser.switchTo().window(wHandle);
        });


        expect(element(by.xpath('//div/canvas')).waitReady());
        element(by.xpath('//div/canvas')).click();
        element(by.id('typedTab')).click();
        element(by.id('Signature')).click();
        element(by.id('Signature')).sendKeys(signature);
        element(by.id('apply-sign')).click();
    },

    validateClickSignSubmitSignature: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },

    ClickAction: function () {

        expect(element(by.id('Ready-Button')).waitReady());
        element(by.id('Ready-Button')).click(); //click on the Action dropdown
    },

    validateClickAction: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },

    ClickDropdownSend: function () {

        element(by.id('Send-Button')).click(); //clicks on the Send button in the action drop down

    },

    validateClickDropdownSend: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },

    ClickSubmit: function () {
        browser.sleep(data.application.waitTime.default);

        element(by.xpath("//BUTTON[@aria-label='send']")).click(); //click submit button

    },

    validateClickSubmit: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },

    ValidateEmailSentPopup: function () {
        element(by.xpath('//div[@class="toast-message" and contains(.,"You will receive an email notification once it has been accepted")]')).click();
    }
}