var data = require('../data')
var repo = require('../repository')
    // var chai = require('chai')
    // var expect = chai.expect;


module.exports = {
    DocumentSignatureCM: function() {
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath(repo.documents.iframe.xpath))).then(function() {
                browser.findElement(by.css(repo.documents.signature.buttons.assign.css)).click().then(function() {
                        browser.getAllWindowHandles().then(function(handles) { //switches back to the main iframe
                            var wHandle = handles[0];
                            browser.switchTo().window(wHandle).then(function() {
                                element(by.xpath(repo.documents.signature.buttons.signedIn.xpath)).click().then(function() {

                                    }) // clicks on user signed in
                            })
                        });

                    }) //clicks on 'click to assign'
            }) //switches to differnt iframe
    },

    validateDocumentSignatureCM: function() {

        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.testDocumentSignatureCM.exp_title);
        });
    },

}