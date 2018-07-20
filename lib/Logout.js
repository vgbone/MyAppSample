var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {



    Logout: function () {
        //log out.
        browser.sleep(5000);
        element(by.xpath('//a[@class="dropdown-toggle"]')).click();
        browser.sleep(5000);
        element(by.xpath('//i[@class="fa fa-sign-out"]')).click();
        browser.sleep(5000);


    },
    validateLogout: function () {

        browser.getTitle().then(function (title) {
            expect(title).to.equal('Athennian');
        });
    },


}