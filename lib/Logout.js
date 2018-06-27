var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {
    logout: function() {
        //log out.
        browser.sleep(data.application.waitTime.default);
        element(by.xpath(repo.logout.links.signoutDropdown.xpath)).click();
        browser.sleep(data.application.waitTime.default);
        element(by.xpath(repo.logout.links.signoutOption.xpath)).click();
        browser.sleep(data.application.waitTime.default);
    },
    validateLogout: function() {
        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    },


}