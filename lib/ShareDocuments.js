var data = require('../data')
var repo = require('../repository')
// var chai = require('chai')
// var expect = chai.expect;


module.exports = {
    CanViewOnly: function () {
        element(by.xpath("//DIV[@class='img-circle-bg invite-icon']")).click().then(function () {
            element(by.model('newUser')).click()
        }).then(function () {
            element(by.model('newUser')).sendKeys(data.credentials.emailFour)
        }).then(function () {
            element(by.xpath("//STRONG[@class='ng-binding'][text()='Permission']")).click()
        }).then(function () {
            element(by.xpath("(//A[@ng-click='setPermission(item)'])[1]")).click()
        }).then(function () {
            element(by.xpath("//BUTTON[@aria-label='confirm']")).click()
        }).then(function () {
            browser.findElement(by.xpath("//TD[@class='ng-binding'][text()='paperautotest2@outlook.com']")).isDisplayed(mail, address, 'textbox')
        }).then(function () {
        }); //click invite button //click 'can view only' option //click on 'Permission' drop down //enter text into 'enter e //click on textbox 'enter email address' //click 'Edit collaborates'
    },

    validateCanViewOnly: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.title);
        });
    },

    CanEdit: function () {
        element(by.model('newUser')).click().then(function () {
            element(by.model('newUser')).value = ""; //clear text field
            element(by.model('newUser')).sendKeys(data.credentials.emailTwo)
        }).then(function () {
            element(by.xpath("//STRONG[@class='ng-binding'][text()='Permission']")).click()
        }).then(function () {
            element(by.xpath("(//A[@ng-click='setPermission(item)'])[2]")).click()
        }).then(function () {
            element(by.xpath("//BUTTON[@aria-label='confirm']")).click()
        }).then(function () {
            browser.findElement(by.xpath("//TD[@class='ng-binding'][text()='paperautotest3@outlook.com']")).isDisplayed()
        }).then(function () {
        }); //click invite button //click 'can edit' option //click on 'Permission' drop down //enter text into 'enter email address' textbox //click on textbox 'enter email address'
    },

    validateCanEdit: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.title);
        });
    },

    AllAccess: function () {
        element(by.model('newUser')).click().then(function () {
            element(by.model('newUser')).value = ""; //clear text field
            element(by.model('newUser')).sendKeys(data.credentials.emailThree)
        }).then(function () {
            element(by.xpath("//STRONG[@class='ng-binding'][text()='Permission']")).click()
        }).then(function () {
            element(by.xpath("(//A[@ng-click='setPermission(item)'])[3]")).click()
        }).then(function () {
            element(by.xpath("//BUTTON[@aria-label='confirm']")).click()
        }).then(function () {
            browser.findElement(by.xpath("//TD[@class='ng-binding'][text()='paperautotest4@outlook.com']")).isDisplayed()
        }).then(function (displayed) {
            element(by.xpath("//BUTTON[@aria-label='save']")).click()
        }).then(function () {
        }) //click apply button; //click invite button //click 'all access' option //click on 'Permission' drop down //enter text into 'enter email address' textbox //click on textbox 'enter email address'
    },

    validateAllAccess: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.title);
        });
    },
}