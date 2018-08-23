var data = require('../data')
var repo = require('../repository')
// var chai = require('chai')
// var expect = chai.expect;


module.exports = {
    ClickSignSubmitSignature: function () {
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath(repo.documents.iframe.xpath))).then(function () {
            element(by.xpath(repo.documents.buttons.signatureContainer.xpath)).click(); //clicks on the signature container
        }).then(function () {
            browser.switchTo().defaultContent();
        }).then(function () {
            expect(element(by.xpath(repo.documents.buttons.canvas.xpath)).waitReady());
        }).then(function () {
            element(by.xpath(repo.documents.buttons.canvas.xpath)).click();
        }).then(function () {
            element(by.id(repo.documents.textfields.typedTab.id)).click();
        }).then(function () {
            element(by.id(repo.documents.textfields.signature.id)).click();
        }).then(function () {
            element(by.id(repo.documents.textfields.signature.id)).sendKeys('hdhdhdhd');
        }).then(function () {
            element(by.id(repo.documents.textfields.applySign.id)).click();
        }).then(function () {

        })
    },

    ValidateEmailSentPopup: function () {
        element(by.xpath(data.emailNotification.exp_title)).click().then(function () {
        })
    },

    ValidateClickSignSubmitSignature: function () {
        browser.getTitle().then(function (title) {
            expect(title).toEqual(data.title);
        });
    },

    ClickAction: function () {
        browser.sleep(10000).then(function () {
            expect(element(by.id(repo.documents.signature.buttons.action.id)).waitReady());
        }).then(function () {
            element(by.id(repo.documents.signature.buttons.action.id)).click(); //click on the Action dropdown
        });

    },

    validateClickAction: function () {
        browser.getTitle().then(function (title) {
            expect(title).toEqual(data.title);
        });
    },

    ClickDropdownSend: function () {
        element(by.id(repo.documents.signature.buttons.dropdownSend.id)).click().then(function () {
        }); //clicks on the Send button in the action drop down
    },

    validateClickDropdownSend: function () {
        browser.getTitle().then(function (title) {
            expect(title).toEqual(data.title);
        });
    },

    ClickSubmit: function () {
        browser.sleep(3000);
        element(by.xpath(repo.documents.signature.buttons.Submit.xpath)).click().then(function () {
        }) //click submit button
    },

    validateClickSubmit: function () {
        browser.getTitle().then(function (title) {
            expect(title).toEqual(data.title);
        });
    },
}