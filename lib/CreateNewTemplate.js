var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {
    SelectNewTemplate: function () { //...new > template
        element(by.id(repo.documents.buttons.new.id)).click().then(function () {
            element(by.id(repo.documents.buttons.template.id)).click()
        }).then(function () {
        }) // click template in dropdown // click +New button
    },
    validateSelectNewTemplate: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.title);
        });
    },
    EnterTemplateInfo: function () { //...entering template information
        element(by.xpath(repo.templateInfo.buttons.blankTemplate.xpath)).click().then(function () {
            element(by.id(repo.templateInfo.textfields.clear.id)).clear()
        }).then(function () {
            element(by.id(repo.templateInfo.textfields.clear.id)).sendKeys(data.templateTitle.title)
        }).then(function () {
            browser.ignoreSynchronization = true;
            browser.switchTo().frame(browser.findElement(by.xpath(repo.documents.iframe.xpath)))
        }).then(function () {
            element(by.xpath(repo.templateInfo.textfields.input.xpath)).sendKeys(data.templateBody.input)
        }).then(function () {
            browser.getAllWindowHandles()
        }).then(function () {
            browser.switchTo().defaultContent();
        }) // sendkeys body       // sendkeys title
    },
    validateEnterTemplateInfo: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.title); // << ? >>
        });
    },
    SaveFinishedTemplate: function () { //...save template 
        element(by.xpath(repo.templateInfo.dropDown.action.xpath)).click().then(function () {
            element(by.id(repo.templateInfo.dropDown.save.id)).click().then(function () {
            }) // click save
        })
    },
    validateSaveFinishedTemplate: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.title); // << ? >>
        });
    },
}