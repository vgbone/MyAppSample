var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {
    ClickOnNewAndSelectDraft: function() {
        element(by.id(repo.documents.buttons.new.id)).click(); //clicks on +new
        element(by.id(repo.documents.buttons.draft.id)).click(); //clicks on Draft
    },

    validateClickOnNewAndSelectDraft: function() {
        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    },

    ClickUpload: function() {
        element(by.css('[ng-click="uploadSingleWordDoc()"]')).click(); //clicks upload
        browser.sleep(data.application.waitTime.default);
        element(by.xpath("//BUTTON[@aria-label='close']")).click();
        //element(by.id(repo.documents.buttons.exit_upload_popup.id)).click();//clicks upload exit button
    },

    validateClickUpload: function() {
        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    },

    ClickChooseALocalfile: function() {
        element(by.model(repo.documents.textfields.title.model)).click(); //click 'choose a local file'              
    },

    validateClickChooseALocalfile: function() {
        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    },

    SelectFileFromOSMenu: function() {


    },

    validateSelectFileFromOSMenu: function() {
        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    },

    SelectClickOnTitleAreaTypeNewTitle: function() {
        element(by.model(repo.documents.textfields.title.model)).clear(); //click on title area
        element(by.model(repo.documents.textfields.title.model)).sendKeys(data.test_two.document_title); //send texts into title area
    },

    validateSelectClickOnTitleAreaTypeNewTitle: function() {
        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    },

    ClickOnDocumentLeavingCursorOnSignatureBoxArea: function() {
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath('//iframe'))) //switches to different iframe
            //browser.findElement(by.css('.sign-field')).click()
        browser.findElement(by.id(repo.documents.textfields.text_area.id)).click(); //clicks on text area
        //element(by.id(repo.documents.textfields.text_area.id)).click();

        browser.getAllWindowHandles().then(function(handles) { //switches back to main iframe
            var wHandle = handles[0];
            browser.switchTo().window(wHandle);

            element(by.css('[ng-click="addSignature()"]')).click(); //clicks add signature
        });

    },

    validateClickOnDocumentLeavingCursorOnSignatureBoxArea: function() {
        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    },

}