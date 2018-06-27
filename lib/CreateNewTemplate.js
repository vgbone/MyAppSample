var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {
    SelectNewTemplate: function() { //...new > template

        browser.sleep(3000);
        element(by.id('newItem')).click(); // click +New button
        element(by.id('NewTemplate-Documents')).click(); // click template in dropdown
    },

    validateSelectNewTemplate: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal('Paper');

        });
    },

    EnterTemplateInfo: function() { //...entering template information

        browser.sleep(3000);

        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath('//iframe')))

        element(by.id('tinymce')).sendKeys("Template-Title"); // sendkeys title
        element(by.id('tinymce')).sendKeys("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"); // sendkeys body

        browser.sleep(3000);

        browser.getAllWindowHandles().then(function(handles) {
            var wHandle = handles[0];
            browser.switchTo().window(wHandle);
        });
    },

    validateEnterTemplateInfo: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal('Paper'); // << ? >>

        });
    },

    SaveFinishedTemplate: function() { //...save template 

        browser.sleep(3000);
        browser.getAllWindowHandles().then(function(handles) {
            var wHandle = handles[0];
            browser.switchTo().window(wHandle);
            element(by.id('Ready-Button')).click(); // click action 
            element(by.id('Save-Editor')).click(); // click save
        });
    },

    validateSaveFinishedTemplate: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal('Paper'); // << ? >>

        });
    },


}