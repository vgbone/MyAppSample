var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {

    CanViewOnly: function() {

        element(by.xpath("//DIV[@class='img-circle-bg invite-icon pull-left']")).click(); //click 'Edit collaborates'
        browser.sleep(data.application.waitTime.default);
        element(by.model('newUser')).click(); //click on textbox 'enter email address'
        element(by.model('newUser')).sendKeys(data.credentials.four.username); //enter text into 'enter email address' textbox

        element(by.xpath("//STRONG[@class='ng-binding'][text()='Permission']")).click(); //click on 'Permission' drop down

        element(by.xpath("(//A[@ng-click='setPermission(item)'])[1]")).click(); //click 'can view only' option


        element(by.xpath("//BUTTON[@aria-label='confirm']")).click(); //click invite button


        browser.findElement(by.xpath("//TD[@class='ng-binding'][text()='paperautotest1@outlook.com']")).isDisplayed().then(function(displayed) {
            if (displayed) {
                console.log('found')
            } else {
                console.log('not found')
            }
        });
    },

    validateCanViewOnly: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    },

    CanEdit: function() {

        element(by.model('newUser')).click(); //click on textbox 'enter email address'
        element(by.model('newUser')).value = ""; //clear text field
        element(by.model('newUser')).sendKeys(data.credentials.two.username); //enter text into 'enter email address' textbox

        element(by.xpath("//STRONG[@class='ng-binding'][text()='Permission']")).click(); //click on 'Permission' drop down

        element(by.xpath("(//A[@ng-click='setPermission(item)'])[2]")).click(); //click 'can edit' option


        element(by.xpath("//BUTTON[@aria-label='confirm']")).click(); //click invite button


        browser.findElement(by.xpath("//TD[@class='ng-binding'][text()='paperautotest2@outlook.com']")).isDisplayed().then(function(displayed) {
            if (displayed) {
                console.log('found')
            } else {
                console.log('not found')
            }
        });
    },

    validateCanEdit: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    },

    AllAccess: function() {

        element(by.model('newUser')).click(); //click on textbox 'enter email address'
        element(by.model('newUser')).value = ""; //clear text field
        element(by.model('newUser')).sendKeys(data.credentials.three.username); //enter text into 'enter email address' textbox

        element(by.xpath("//STRONG[@class='ng-binding'][text()='Permission']")).click(); //click on 'Permission' drop down

        element(by.xpath("(//A[@ng-click='setPermission(item)'])[3]")).click(); //click 'all access' option


        element(by.xpath("//BUTTON[@aria-label='confirm']")).click(); //click invite button


        browser.findElement(by.xpath("//TD[@class='ng-binding'][text()='paperautotest3@outlook.com']")).isDisplayed().then(function(displayed) {
            if (displayed) {
                console.log('found')
            } else {
                console.log('not found')
            }

            element(by.xpath("//BUTTON[@aria-label='save']")).click(); //click apply button
        });
    },

    validateAllAccess: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    },

}