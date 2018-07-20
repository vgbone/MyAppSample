var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {

    ClickOnNewAndSelectDraft: function () {
        element(by.id(repo.documents.buttons.new.id)).click();//clicks on +new
        element(by.id(repo.documents.buttons.draft.id)).click();//clicks on Draft
    },

    validateClickOnNewAndSelectDraft: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.test_one.exp_title);
        });
    },
    Clickdraft: function () {
        element(by.xpath(repo.newDraft.buttons.blankdraft.xpath)).click();//clicks new draft
    },

    ClickUpload: function () {
        element(by.css(repo.documents.buttons.upload.css)).click();//clicks upload
        browser.sleep(3000);
        element(by.xpath(repo.documents.buttons.close.xpath)).click();
        //element(by.id(repo.documents.buttons.exit_upload_popup.id)).click();//clicks upload exit button
    },

    validateClickUpload: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.test_one.exp_title);
        });
    },

    ClickChooseALocalfile: function () {
        element(by.model(repo.documents.textfields.title.model)).click();   //click 'choose a local file'              
    },

    validateClickChooseALocalfile: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.test_one.exp_title);
        });
    },

    SelectFileFromOSMenu: function () {


    },

    validateSelectFileFromOSMenu: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.test_one.exp_title);
        });
    },

    SelectClickOnTitleAreaTypeNewTitle: function () {
        element(by.model(repo.documents.textfields.title.model)).clear();//click on title area
        element(by.model(repo.documents.textfields.title.model)).sendKeys(data.test_two.document_title);//send texts into title area
    },

    validateSelectClickOnTitleAreaTypeNewTitle: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.test_one.exp_title);
        });
    },

    ClickOnDocumentLeavingCursorOnSignatureBoxArea: function () {
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath(repo.documents.iframe.xpath)))//switches to different iframe
        //browser.findElement(by.css('.sign-field')).click()
        browser.findElement(by.id(repo.documents.textfields.text_area.id)).click();//clicks on text area
        //element(by.id(repo.documents.textfields.text_area.id)).click();

        browser.getAllWindowHandles().then(function (handles) {//switches back to main iframe
            var wHandle = handles[0];
            browser.switchTo().window(wHandle);

            element(by.css(repo.documents.buttons.addSignature.css)).click();//clicks add signature
        });

    },

    validateClickOnDocumentLeavingCursorOnSignatureBoxArea: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.test_one.exp_title);
        });
    },

}