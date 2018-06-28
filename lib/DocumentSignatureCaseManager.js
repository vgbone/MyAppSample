var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {
    SelectNewDraft: function() {

        browser.sleep(data.application.waitTime.default);
        element(by.id('newItem')).click(); //click +New button
        element(by.id('NewDraft-Documents')).click(); //click Draft in dropdown
    },

    validateSelectNewDraft: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);

        });
    },

    DocumentSignatureCM: function() {

        browser.sleep(data.application.waitTime.default);
        element(by.id('newSigner')).click(); //clicks on 'new signer'
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath('//iframe[contains(@id, "ui-tinymce")]'))) //switches to differnt iframe
        browser.findElement(by.css('.sign-field')).click() //clicks on 'click to assign'

        browser.getAllWindowHandles().then(function(handles) { //switches back to the main iframe
            var wHandle = handles[0];
            browser.switchTo().window(wHandle);
        });
        browser.sleep(data.application.waitTime.default);
        element(by.xpath("//*[@id='testdropdown']//li[@ng-repeat='contact in contacts']")).click(); // clicks on user signed in 
    },

    validateDocumentSignatureCM: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);

        });
    },

}