var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {

    login: function () {//...login

        browser.get(data.url);

        element(by.model('auth.username')).sendKeys(data.credentials.username);
        element(by.model('auth.password')).sendKeys(data.credentials.password);
        element(by.id('Login-Button')).click();
    },

    validatelogin: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.test_one.exp_title);

        });
    },

    SelectNewTemplate: function () {//...new > template

        browser.sleep(5000);
        element(by.id('newItem')).click(); // click +New button
        element(by.id('NewTemplate-Documents')).click(); // click template in dropdown
    },

    validateSelectNewTemplate: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal('Athennian');
        });
    },

    EnterTemplateInfo: function () {//...entering template information

        browser.sleep(3000);
        element(by.xpath("//a[@title='New template']/h4[contains(., 'Blank template')]")).click();
        element(by.id('input_title')).clear();
        element(by.id('input_title')).sendKeys("Template-Title"); // sendkeys title
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath('//iframe[@id="ui-tinymce-1_ifr"]')))
        element(by.xpath('//*[@id="tinymce"]')).sendKeys("Template test"); // sendkeys body      
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (handles) {
            var wHandle = handles[0];
            browser.switchTo().window(wHandle);
        });
    },

    validateEnterTemplateInfo: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal('Athennian'); // << ? >>

        });
    },

    SaveFinishedTemplate: function () {//...save template 
        browser.sleep(5000);


        // element(by.xpath('//section[@class="menu-section"]')).click(); // click action 
        element(by.id('Ready-Button')).click(); // click action 
        element(by.id('Save-Editor')).click(); // click save

        // browser.getAllWindowHandles().then(function (handles) {
        //     var wHandle = handles[0]
        //     browser.switchTo().window(wHandle);
        //     element(by.id('Ready-Button')).click(); // click action 
        //     element(by.id('Save-Editor')).click(); // click save
        // });
    },

    validateSaveFinishedTemplate: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal('Athennian'); // << ? >>

        });
    },


}