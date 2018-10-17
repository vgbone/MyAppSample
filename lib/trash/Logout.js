var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {
    Logout: function() {
        //log out.
        element(by.xpath('//a[@class="dropdown-toggle"]')).click().then(function() {
            element(by.xpath('//i[@class="fa fa-sign-out"]')).click()
        }).then(function() {

        })
    },
    validateLogout: function() {

        browser.getTitle().then(function(title) {
            expect(title).to.equal('Athennian');
        });
    },


}