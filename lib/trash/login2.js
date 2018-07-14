var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {

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