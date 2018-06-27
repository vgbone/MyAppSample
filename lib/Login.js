var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;

module.exports = {

    login: function(username, password) {

        browser.get(data.url);

        browser.sleep(3000);
        element(by.model('auth.username')).sendKeys(data.credentials.one.username);
        element(by.model('auth.password')).sendKeys(data.credentials.one.password);
        element(by.id('Login-Button')).click();
        browser.sleep(3000);
    },
    validatelogin: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    },
    outlookLogin: function() {

        browser.get(data.outlook.url);

        browser.sleep(3000);
        element(by.id('username')).sendKeys(data.outlook.credentials.one.username);
        element(by.id('password')).sendKeys(data.outlook.credentials.one.password);
        element(by.xpath('//span[contains(.,"sign in")]')).click();
        browser.sleep(3000);

    },

    validateOutlookLogin: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.outlook.expectedResult.title);
            browser.sleep(5000);
        });
    }
}