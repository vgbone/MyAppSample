var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {

    ClickSignSubmitSignature: function (signature) {

        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath(repo.template.iframe.xpath)))

        element(by.xpath(repo.signSubmitSignature.buttons.signature.xpath)).click(); //clicks on the signature container

        browser.sleep(data.application.waitTime.default);

        browser.getAllWindowHandles().then(function (handles) {
            var wHandle = handles[0];
            browser.switchTo().window(wHandle);
        });


        expect(element(by.xpath(repo.signSubmitSignature.signatureAssertion.xpath)).waitReady());
        element(by.xpath(repo.signSubmitSignature.signatureAssertion.xpath)).click();
        element(by.id(repo.signature.tab.typeSignature.id)).click();
        element(by.id(repo.signSubmitSignature.buttons.signatureField.id)).click();
        element(by.id(repo.signSubmitSignature.buttons.signatureField.id)).sendKeys(signature);
        element(by.id(repo.signature.buttons.submitSignature.id)).click();
    },

    validateClickSignSubmitSignature: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },

    ClickAction: function () {

        expect(element(by.id(repo.template.buttons.action.id)).waitReady());
        element(by.id(by.id(repo.template.buttons.action.id)).click()); //click on the Action dropdown
    },

    validateClickAction: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },

    ClickDropdownSend: function () {

        element(by.id(repo.signature.buttons.dropdownSend.id)).click(); //clicks on the Send button in the action drop down

    },

    validateClickDropdownSend: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },

    ClickSubmit: function () {
        browser.sleep(data.application.waitTime.default);

        element(by.xpath(repo.signSubmitSignature.buttons.submit.xpath)).click(); //click submit button

    },

    validateClickSubmit: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },

    ValidateEmailSentPopup: function () {
        element(by.xpath(repo.signSubmitSignature.popUp.email.xpath)).click();
    }
}