var data = require('../data')
var repo = require('../repository')
    // var chai = require('chai')
    // var expect = chai.expect;


module.exports = {
    DocumentSignatureCM: function() {
        // var body = by.tagName('body');

        // element(by.css('[ng-click="addSignature()"]')).click(); //clicks add signature
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath(repo.documents.iframe.xpath))).then(function() {
                browser.findElement(by.css(repo.documents.signature.buttons.assign.css)).click().then(function() {
                        browser.switchTo().defaultContent();
                        element(by.xpath(repo.documents.signature.buttons.signedIn.xpath)).click().then(function() {

                            }) // clicks on user signed in


                    }) //clicks on 'click to assign'
            }) //switches to differnt iframe
    },

    validateDocumentSignatureCM: function() {

        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.testDocumentSignatureCM.exp_title);
        });
    },

}