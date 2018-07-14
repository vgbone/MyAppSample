var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var expect = chai.expect;


module.exports = {

    login: function() {//...Login
        
        browser.get(data.url);
                
        element(by.model('auth.username')).sendKeys(data.credentials.username);
        element(by.model('auth.password')).sendKeys(data.credentials.password);
        element(by.id('Login-Button')).click();
        },
                
        validatelogin: function() {
        
        browser.getTitle().then(function(title) {
        expect(title).to.equal('Paper'); // << ? >>
            
        });
    },
    
    SelectNewDraft: function() {//...New > Draft -Eitor View-
            
        browser.sleep(3000);
        element(by.id('newItem')).click(); // click +New button
        element(by.id('NewDraft-Documents')).click(); // click Draft in dropdown
        },
               
        validateSelectNewDraft: function() { 

        browser.getTitle().then(function(title) {
        expect(title).to.equal('Paper'); // << ? >>
            
        });
    
    },
    
    DocumentSignatureNR: function() {//...Signature > New Recipient 
            
        browser.sleep(3000);
        element(by.id('newSigner')).click();//clicks on '+ Signature'
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath('//iframe'))) // switches to differnt iframe
        browser.findElement(by.css('.sign-field')).click() // clicks on 'click to assign'
            
        browser.getAllWindowHandles().then(function(handles) { // switches back to the main iframe
        var wHandle = handles[0];
        browser.switchTo().window(wHandle);
        });
            
        element(by.xpath('//*[@id="testdropdown"]/ul/li[2]/a')).click(); // clicks on New recipient
        },
        
        validateDocumentSignatureNR: function() {
                    
        browser.getTitle().then(function(title) {
        expect(title).to.equal('Paper'); // << ? >>
            
        });
    },
    
    EnterNRInfo: function () {//...entering new recipient information

        browser.sleep(3000);
        element(by.id('accordiongroup-2339-9914-tab')).click(); // click enter information 
        element(by.id('Recip-Editor')).sendKeys("fullname"); // sendkeys full name
        element(by.id('Email-Editor')).sendKeys("eamil@mailinator.com"); // sendkeys email
        },

        validateEnterNRInfo: function() {
            
        browser.getTitle().then(function(title) {
        expect(title).to.equal('Paper'); // << ? >>
    
        });
    },

    //repreat for number of users needed to sign the document 

    SendFinishedDocument: function() {//...send finished document to recipients

        browser.sleep(3000);
        element(by.id('Ready-Button')).click(); // click action 
        element(by.id('Send-Button')).click(); // click send
        element(by.xpath('//*[@id="block"]/div/div[2]/button[1]/span')).click(); // click submit
        },
  
        validateSendFinishedDocument: function() {
            
        browser.getTitle().then(function(title) {
        expect(title).to.equal('Paper'); // << ? >>
    
        });
    },



}