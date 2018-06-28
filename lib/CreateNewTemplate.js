var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {
    SelectNewTemplate: function () { //...new > template

        browser.sleep(data.application.waitTime.default);
        element(by.id(repo.documents.buttons.new.id)).click(); // click +New button
        element(by.id(repo.template.dropdown.id).click()); // click template in dropdown
    },

    validateSelectNewTemplate: function () {

        browser.getTitle(data.application.title).then(function (title) {
            expect(title).to.equal(data.application.title);

        });
    },

    EnterTemplateInfo: function () { //...entering template information

        browser.sleep(data.application.waitTime.default);

        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath(repo.template.iframe.xpath)))

        element(by.id(repo.documents.textfields.text_area.id)).sendKeys(data.title.sendKeys); // sendkeys title
        element(by.id(repo.documents.textfields.text_area.id)).sendKeys(data.body.sendKeys); // sendkeys body

        browser.sleep(data.application.waitTime.default);

        browser.getAllWindowHandles().then(function (handles) {
            var wHandle = handles[0];
            browser.switchTo().window(wHandle);
        });
    },

    validateEnterTemplateInfo: function () {

        browser.getTitle(data.application.title).then(function (title) {
            expect(title).to.equal(data.application.title); // << ? >>

        });
    },

    SaveFinishedTemplate: function () { //...save template 

        browser.sleep(data.application.waitTime.default);
        browser.getAllWindowHandles().then(function (handles) {
            var wHandle = handles[0];
            browser.switchTo().window(wHandle);
            element(by.id(repo.template.buttons.action.id)).click(); // click action 
            element(by.id(repo.template.buttons.save.id)).click(); // click save
        });
    },

    validateSaveFinishedTemplate: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title); // << ? >>

        });
    },


}