/*var superagent = require('superagent');
var chai = require('chai');
var expect = chai.expect;

var data = require('./data');
var repo = require('./repository');
var fn = require('./lib/login');

//require('./lib/waitReady')
var url = 'https://labs.paperlts.com';
 
describe('Paper', function() {
    
        beforeEach(function() {
            fn.login(data.credentials.one.username, data.credentials.one.password);
        });
    
        it('should login', function() {
        
 
        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
        
describe('Paper | ContractClub', function() {
    
        beforeEach(function() {
            fn.login(data.credentials.one.username, data.credentials.one.password);
        });
    
        //This clicks the show More on document page.
    it('should click on More', function() {
        browser.get(url);

        element(by.css('[ng-click="toggleShowMore()"]')).click()

    browser.getTitle().then(function(title) {
        expect(title).to.equal('ContractClub');
        })
    });

//This clicks the show More on document page and selets Send Mail. 
    it('should click on Send Mail', function() {
        browser.get(url);

        element(by.css('[ng-click="toggleShowMore()"]')).click()
        element(by.xpath('//span[contains(.,"Sent Mail")]')).click()
   
    browser.getTitle().then(function(title) {
        expect(title).to.equal('ContractClub');
        })
 
        browser.getTitle().then(function(title) {
            expect(title).to.equal(data.application.title);
        });
    });
});*/