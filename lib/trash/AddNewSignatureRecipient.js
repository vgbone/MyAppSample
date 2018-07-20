var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {
    SelectNewDraft: function() { //...New > Draft -Eitor View-
        element(by.id(repo.documents.buttons.new.id)).click().then(function() {
                element(by.id(repo.documents.buttons.draft.id)).click().then(function() {

                    }) // click Draft in dropdown
            }) // click +New button

    },

    validateSelectNewDraft: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.test_one.exp_title); // << ? >>

        });

    },

    DocumentSignatureNR: function() { //...Signature > New Recipient 
        element(by.id('newSigner')).click().then(function() {
                browser.ignoreSynchronization = true;
                browser.switchTo().frame(browser.findElement(by.xpath('//iframe'))).then(function() {
                        browser.findElement(by.css('.sign-field')).click().then(function() {
                                browser.getAllWindowHandles().then(function(handles) { // switches back to the main iframe
                                    var wHandle = handles[0];
                                    browser.switchTo().window(wHandle);
                                });

                                element(by.xpath('//*[@id="testdropdown"]/ul/li[2]/a')).click().then(function() {

                                    }) // clicks on New recipient
                            }) // clicks on 'click to assign'
                    }) // switches to differnt iframe
            }) //clicks on '+ Signature'

    },

    validateDocumentSignatureNR: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal('Athennian'); // << ? >>

        });
    },

    EnterNRInfo: function() { //...entering new recipient information
        element(by.id('accordiongroup-2339-9914-tab')).click().then(function() {
                element(by.id('Recip-Editor')).sendKeys("fullname").then(function() {
                        element(by.id('Email-Editor')).sendKeys("eamil@mailinator.com").then(function() {

                            }) // sendkeys email
                    }) // sendkeys full name
            }) // click enter information 

    },

    validateEnterNRInfo: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal('Athennian'); // << ? >>

        });
    },

    //repreat for number of users needed to sign the document 

    SendFinishedDocument: function() { //...send finished document to recipients
        element(by.id('Ready-Button')).click().then(function() {
                element(by.id('Send-Button')).click().then() {
                        element(by.xpath('//*[@id="block"]/div/div[2]/button[1]/span')).click().then(function() {

                            }) // click submit
                    } // click send
            }) // click action 
    },

    validateSendFinishedDocument: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal('Athennian'); // << ? >>

        });
    },



}