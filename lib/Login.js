var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;

module.exports = {

    login: function() {

        browser.get(data.url);

        browser.sleep(3000);
        element(by.model('auth.username')).sendKeys(data.credentials.emailOne);
        element(by.model('auth.password')).sendKeys(data.credentials.emailOnePass);
        element(by.id('Login-Button')).click();
        browser.sleep(3000);
    },
    altUserLogin: function() {

        browser.get(data.url);

        element(by.model('auth.username')).sendKeys(data.credentials2.username2);
        element(by.model('auth.password')).sendKeys(data.credentials2.password2);
        element(by.id('Login-Button')).click();
    },
    validatelogin: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.test_one.exp_title);
        });
    },
    mailLogin: function() {

        browser.get(data.url2);

        browser.sleep(3000);
        element(by.id('username')).sendKeys(data.credentials3.username);
        element(by.id('password')).sendKeys(data.credentials3.password);
        element(by.xpath('//span[contains(.,"sign in")]')).click();
        browser.sleep(3000);

    },
    validaateMailLogin: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.test_OLWEB.exp_title);
            browser.sleep(5000);
        });
    }
}