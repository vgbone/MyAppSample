var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {
    SelectNewDraft: function() {

        browser.sleep(data.application.waitTime.default);
        element(by.id(repo.documents.buttons.new.id)).click(); //click +New button
        element(by.id(repo.documents.buttons.draft.id)).click(); //click Draft in dropdown
    },

    validateSelectNewDraft: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);

        });
    },

    DocumentSignatureCM: function() {

        browser.sleep(data.application.waitTime.default);
        element(by.id(repo.documentSignature.buttons.newSigner.id)).click(); //clicks on 'new signer'
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath(repo.documentSignature.iframe.xpath))) //switches to differnt iframe
        browser.findElement(by.css(repo.documentSignature.buttons.clickToAssign.css)).click() //clicks on 'click to assign'

        browser.getAllWindowHandles().then(function(handles) { //switches back to the main iframe
            var wHandle = handles[0];
            browser.switchTo().window(wHandle);
        });
        browser.sleep(data.application.waitTime.default);
        element(by.xpath(repo.documentSignature.buttons.userSignedIn.xpath)).click(); // clicks on user signed in 
    },

    validateDocumentSignatureCM: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);

        });
    },

}