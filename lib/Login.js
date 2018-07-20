var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;

module.exports = {

    login: function () {

        browser.get(data.url);

        browser.sleep(3000);
        element(by.model(repo.login.textfields.username.model)).sendKeys(data.credentials.emailOne);
        element(by.model(repo.login.textfields.password.model)).sendKeys(data.credentials.emailOnePass);
        element(by.id(repo.login.buttons.login.id)).click();
        browser.sleep(3000);
    },
    altUserLogin: function () {

        browser.get(data.url);

        element(by.model(repo.login.textfields.username.model)).sendKeys(data.credentials2.username2);
        element(by.model(repo.login.textfields.password.model)).sendKeys(data.credentials2.password2);
        element(by.id(repo.login.buttons.login.id)).click();
    },
    validatelogin: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.test_one.exp_title);
        });
    },
    mailLogin: function () {

        browser.get(data.mailURL);

        browser.sleep(3000);
        element(by.id(repo.mailLogin.textfields.username.id)).sendKeys(data.credentials3.username);
        element(by.id(repo.mailLogin.textfields.password.id)).sendKeys(data.credentials3.password);
        element(by.xpath(repo.mailLogin.buttons.login.xpath)).click();
        browser.sleep(3000);

    },
    validateMailLogin: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.test_OLWEB.exp_title);
            browser.sleep(5000);
        });
    }
}