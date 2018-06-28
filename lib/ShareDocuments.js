var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {

    CanViewOnly: function () {

        element(by.xpath(repo.edit.buttons.collaborates.xpath)).click(); //click 'Edit collaborates'
        browser.sleep(data.application.waitTime.default);
        element(by.model(repo.edit.buttons.email.model)).click(); //click on textbox 'enter email address'
        element(by.model(repo.edit.buttons.email.model)).sendKeys(data.credentials.four.username); //enter text into 'enter email address' textbox

        element(by.xpath(repo.edit.buttons.permission.dropdown.xpath)).click(); //click on 'Permission' drop down

        element(by.xpath(repo.edit.buttons.viewOnly.xpath)).click(); //click 'can view only' option


        element(by.xpath(repo.edit.buttons.invite.xpath)).click(); //click invite button


        browser.findElement(by.xpath(repo.edit.editAssertion.assertion1)).isDisplayed().then(function (displayed) {
            if (displayed) {
                console.log('found')
            } else {
                console.log('not found')
            }
        });
    },

    validateCanViewOnly: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },

    CanEdit: function () {

        element(by.model(repo.edit.buttons.email.model)).click(); //click on textbox 'enter email address'
        element(by.model(repo.edit.buttons.email.model)).value = ""; //clear text field
        element(by.model(repo.edit.buttons.email.model)).sendKeys(data.credentials.two.username); //enter text into 'enter email address' textbox

        element(by.xpath(repo.edit.buttons.permission.dropdown.xpath)).click(); //click on 'Permission' drop down

        element(by.xpath()).click(); //click 'can edit' option


        element(by.xpath(repo.edit.buttons.invite.xpath)).click(); //click invite button


        browser.findElement(by.xpath(repo.edit.editAssertion.assertion2.xpath)).isDisplayed().then(function (displayed) {
            if (displayed) {
                console.log('found')
            } else {
                console.log('not found')
            }
        });
    },

    validateCanEdit: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },

    AllAccess: function () {

        element(by.model(repo.edit.buttons.email.model)).click(); //click on textbox 'enter email address'
        element(by.model(repo.edit.buttons.email.model)).value = ""; //clear text field
        element(by.model(repo.edit.buttons.email.model)).sendKeys(data.credentials.three.username); //enter text into 'enter email address' textbox

        element(by.xpath(repo.edit.buttons.permission.dropdown.xpath)).click(); //click on 'Permission' drop down

        element(by.xpath(repo.edit.buttons.allAccess.xpath)).click(); //click 'all access' option


        element(by.xpath(repo.edit.buttons.invite.xpath)).click(); //click invite button


        browser.findElement(by.xpath(repo.editAssertion.assertion3.xpath)).isDisplayed().then(function (displayed) {
            if (displayed) {
                console.log('found')
            } else {
                console.log('not found')
            }

            element(by.xpath(repo.edit.buttons.apply.xpath)).click(); //click apply button
        });
    },

    validateAllAccess: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },

}