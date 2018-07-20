var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {

    ClickSignSubmitSignature: function () {

        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath(repo.documents.iframe.xpath)))
        element(by.xpath(repo.documents.buttons.signatureContainer.xpath)).click(); //clicks on the signature container
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (handles) {
            var wHandle = handles[0];
            ``
            // console.log(wHandle);
            browser.switchTo().window(wHandle);
        });
        browser.sleep(3000);

        element(by.id(repo.documents.textfields.typedTab.id)).click();
        element(by.id(repo.documents.textfields.signature.id)).click();
        element(by.id(repo.documents.textfields.signature.id)).sendKeys(data.signature2.signedSignature2);
        element(by.id(repo.documents.textfields.applySign.id)).click();
    },

    ValidateEmailSentPopup: function () {

        element(by.xpath(data.emailNotification.exp_title)).click();
    },

    ValidateClickSignSubmitSignature: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.testClickSignSubmitSignature.exp_title);
        });
    },

    ClickAction: function () {

        browser.sleep(3000);

        expect(element(by.id(repo.documents.signature.buttons.action.id)).waitReady());
        element(by.id(repo.documents.signature.buttons.action.id)).click(); //click on the Action dropdown
    },

    validateClickAction: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.testClickAction.exp_title);
        });
    },

    ClickDropdownSend: function () {

        element(by.id(repo.documents.signature.buttons.dropdownSend.id)).click(); //clicks on the Send button in the action drop down
    },

    validateClickDropdownSend: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.testClickDropdownSend.exp_title);
        });
    },

    ClickSubmit: function () {

        browser.sleep(3000);
        element(by.xpath(repo.documents.signature.buttons.Submit.xpath)).click(); //click submit button
    },

    validateClickSubmit: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.testClickSubmit.exp_title);
        });
    },
}