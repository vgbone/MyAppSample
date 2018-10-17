var data = require('../data')
var repo = require('../repository')

module.exports = {

    login: function() {

        browser.get(data.url).then(function() {
            element(by.model(repo.login.textfields.username.model)).sendKeys(data.credentials.emailOne);
        }).then(function() {
            element(by.model(repo.login.textfields.password.model)).sendKeys(data.credentials.emailOnePass);
        }).then(function() {
            element(by.id(repo.login.buttons.login.id)).click();
        })
    },
    altUserLogin: function() {

        browser.get(data.url).then(function() {
            element(by.model(repo.login.textfields.username.model)).sendKeys(data.credentials2.username2);
        }).then(function() {
            element(by.model(repo.login.textfields.password.model)).sendKeys(data.credentials2.password2);
        }).then(function() {
            element(by.id(repo.login.buttons.login.id)).click();
        }).then(function() {

        })
    },
    validatelogin: function() {

        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.test_one.exp_title);
        });
    },
    mailLogin: function() {

        browser.get(data.mailURL).then(function() {
            element(by.id(repo.mailLogin.textfields.username.id)).sendKeys(data.credentials3.username);
        }).then(function() {
            element(by.id(repo.mailLogin.textfields.password.id)).sendKeys(data.credentials3.password);
        }).then(function() {
            element(by.xpath(repo.mailLogin.buttons.login.xpath)).click();
        }).then(function() {

        })
    },
    validateMailLogin: function() {

        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.test_OLWEB.exp_title);
        });
    }
}