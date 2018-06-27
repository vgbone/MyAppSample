var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;

module.exports = {

    login: function (username, password) {

        browser.get(data.url);

        browser.sleep(data.application.waitTime.default);
        element(by.model(repo.login.textfields.username.model)).sendKeys(data.credentials.one.username);
        element(by.model(repo.login.testfields.password.model)).sendKeys(data.credentials.one.password);
        element(by.id(repo.login.buttons.login.id)).click();
        browser.sleep(data.application.waitTime.default);
    },
    validatelogin: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.application.title);
        });
    },
    outlookLogin: function () {

        browser.get(data.outlook.url);

        browser.sleep(data.application.waitTime.default);
        element(by.id('username')).sendKeys(data.outlook.credentials.one.username);
        element(by.id('password')).sendKeys(data.outlook.credentials.one.password);
        element(by.xpath('//span[contains(.,"sign in")]')).click();
        browser.sleep(data.application.waitTime.default);

    },

    validateOutlookLogin: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.outlook.expectedResult.title);
            browser.sleep(data.application.waitTime.default);
        });
    }
}