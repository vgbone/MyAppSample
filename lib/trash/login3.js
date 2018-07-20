var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {

    login3: function() {

        browser.get(data.url);
        
        element(by.model('auth.username')).sendKeys(data.credentials2.username2);
        element(by.model('auth.password')).sendKeys(data.credentials2.password2);
        element(by.id('Login-Button')).click();
        },
        
        validatelogin3: function() {

        browser.getTitle().then(function(title) {
        expect(title).to.equal(data.test_one.exp_title);
    
       });
    }
}