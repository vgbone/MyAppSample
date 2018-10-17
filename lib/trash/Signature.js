var data = require('../data')
var repo = require('../repository')
    // var chai = require('chai')
    // var expect = chai.expect;


module.exports = {

    ClickSignSubmitSignature: function() {
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath('//iframe[@id="ui-tinymce-1_ifr"]'))).then(function() {
            element(by.xpath("(//SPAN[@class='sign-field assigned'])[1]")).click(); //clicks on the signature container
        }).then(function() {
            browser.switchTo().defaultContent();
        }).then(function() {
            expect(element(by.xpath('//div/canvas')).waitReady());
        }).then(function() {
            element(by.xpath('//div/canvas')).click();
        }).then(function() {
            element(by.id('typedTab')).click();
        }).then(function() {
            element(by.id('Signature')).click();
        }).then(function() {
            element(by.id('Signature')).sendKeys('hdhdhdhd');
        }).then(function() {
            element(by.id('apply-sign')).click();
        }).then(function() {

        })
    },

    ValidateEmailSentPopup: function() {

        element(by.xpath(data.emailNotification.exp_title)).click().then(function() {

        })
    },

    ValidateClickSignSubmitSignature: function() {

        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.testClickSignSubmitSignature.exp_title);
        });
    },

    ClickAction: function() {
        browser.sleep(10000).then(function() {
            expect(element(by.id('Ready-Button')).waitReady());
        }).then(function() {
            element(by.id('Ready-Button')).click(); //click on the Action dropdown
        });

    },

    validateClickAction: function() {

        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.testClickAction.exp_title);
        });
    },

    ClickDropdownSend: function() {

        element(by.id(repo.documents.signature.buttons.dropdownSend.id)).click().then(function() {

        }); //clicks on the Send button in the action drop down
    },

    validateClickDropdownSend: function() {

        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.testClickDropdownSend.exp_title);
        });
    },

    ClickSubmit: function() {

        browser.sleep(3000);
        element(by.xpath(repo.documents.signature.buttons.Submit.xpath)).click().then(function() {

            }) //click submit button
    },

    validateClickSubmit: function() {

        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.testClickSubmit.exp_title);
        });
    },
}