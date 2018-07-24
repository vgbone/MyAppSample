var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {
    Logout: function () {
        //log out.
        element(by.xpath(repo.logout.dropDown.xpath)).click().then(function () {
            element(by.xpath(repo.logout.buttons.signOut.xpath)).click()
        }).then(function () {
        })
    },
    validateLogout: function () {
        browser.getTitle().then(function (title) {
            expect(title).to.equal(data.title);
        });
    },
}