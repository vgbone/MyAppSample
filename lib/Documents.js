var data = require('../data')
var repo = require('../repository')
// var chai = require('chai')
// var expect = chai.expect;


module.exports = {
    ClickOnNewAndSelectDraft: function () {
        element(by.id(repo.documents.buttons.new.id)).click().then(function () {
            element(by.id(repo.documents.buttons.draft.id)).click()
        }).then(function () {
        }) //clicks on Draft
    },
    validateClickOnNewAndSelectDraft: function () {
        browser.getTitle().then(function (title) {
            expect(title).toEqual(data.title);
        });
    },
    Clickdraft: function () {
        element(by.xpath(repo.newDraft.buttons.blankdraft.xpath)).click().then(function () {
        }) //clicks new draft
    },
    ClickUpload: function () {
        element(by.css(repo.documents.buttons.upload.css)).click().then(function () {
            element(by.xpath(repo.documents.buttons.close.xpath)).click()
        }).then(function () {
        }) //clicks upload
    },
    validateClickUpload: function () {
        browser.getTitle().then(function (title) {
            expect(title).toEqual(data.title);
        });
    },
    ClickChooseALocalfile: function () {
        element(by.model(repo.documents.textfields.title.model)).click().then(function () {
        }) //click 'choose a local file'              
    },
    validateClickChooseALocalfile: function () {
        browser.getTitle().then(function (title) {
            expect(title).toEqual(data.title);
        });
    },
    validateSelectFileFromOSMenu: function () {
        browser.getTitle().then(function (title) {
            expect(title).toEqual(data.title);
        });
    },
    SelectClickOnTitleAreaTypeNewTitle: function () {
        element(by.model(repo.documents.textfields.title.model)).clear().then(function () {
            element(by.model(repo.documents.textfields.title.model)).sendKeys(data.test_two.document_title)
        }).then(function () {
        }) //send texts into title area //click on title area
    },
    validateSelectClickOnTitleAreaTypeNewTitle: function () {
        browser.getTitle().then(function (title) {
            expect(title).toEqual(data.title);
        });
    },
    ClickOnDocumentLeavingCursorOnSignatureBoxArea: function () {
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath(repo.documents.iframe.xpath))).then(function () {
            browser.findElement(by.id(repo.documents.textfields.text_area.id)).click()
        }).then(function () {
            browser.switchTo().defaultContent();
            element(by.css(repo.documents.buttons.addSignature.css)).click(); //clicks add signature
        }); //clicks on text area
    },
    validateClickOnDocumentLeavingCursorOnSignatureBoxArea: function () {
        browser.getTitle().then(function (title) {
            expect(title).toEqual(data.title);
        });
    },
}