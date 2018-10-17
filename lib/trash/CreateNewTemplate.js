var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {
    SelectNewTemplate: function() { //...new > template
        element(by.id('newItem')).click().then(function() {
                element(by.id('NewTemplate-Documents')).click()
            }).then(function() {

            }) // click template in dropdown // click +New button
    },

    validateSelectNewTemplate: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal('Athennian');
        });
    },

    EnterTemplateInfo: function() { //...entering template information
        element(by.xpath("//a[@title='New template']/h4[contains(., 'Blank template')]")).click().then(function() {
                element(by.id('input_title')).clear()
            }).then(function() {
                element(by.id('input_title')).sendKeys("Template-Title")
            }).then(function() {
                browser.ignoreSynchronization = true;
                browser.switchTo().frame(browser.findElement(by.xpath('//iframe[@id="ui-tinymce-1_ifr"]')))
            }).then(function() {
                element(by.xpath('//*[@id="tinymce"]')).sendKeys("Template test")
            }).then(function() {
                browser.getAllWindowHandles()
            }).then(function(handles) {
                var wHandle = handles[0];
                browser.switchTo().window(wHandle);
            }) // sendkeys body       // sendkeys title
    },

    validateEnterTemplateInfo: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal('Athennian'); // << ? >>
        });
    },

    SaveFinishedTemplate: function() { //...save template 
        // element(by.xpath('//section[@class="menu-section"]')).click(); // click action 
        //element(by.id('Ready-Button')).click(); // click action 
        element(by.xpath('//button[contains(.,"Action")]')).click().then(function() {
            element(by.id('Save-Editor')).click().then(function() {

                }) // click save
        })


        // browser.getAllWindowHandles().then(function(handles) {
        //     var wHandle = handles[0]
        //     console.log(wHandle);
        //     browser.switchTo().window(wHandle);
        //     element(by.id('Ready-Button')).click(); // click action 
        //     element(by.id('Save-Editor')).click(); // click save
        // });
    },

    validateSaveFinishedTemplate: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal('Athennian'); // << ? >>
        });
    },
}