var superagent = require('superagent')
var chai = require('chai')
var expect = chai.expect;

var data = require('./data')
var repo = require('./repository')

var signature = require('./lib/Signature')
var login = require('./lib/Login')
var documents = require('./lib/Documents')
var documentSignatureCaseManager = require('./lib/DocumentSignatureCaseManager')

var url = require('./data');

describe('Paper | ContractClub', function() {
    beforeEach(function() {

        browser.wait(function() {
            browser.sleep(data.application.waitTime.default)
            return true;
        }).then(function() {

        });
    });

    //1. login begin
    it('should login', function() {
        login.login(data.credentials.one.username, data.credentials.one.password);
        login.validatelogin();
    });
    //1. login end

    //2. document settings
    it('Click on +New and select ‘draft’', function() {
        documents.ClickOnNewAndSelectDraft();
        documents.validateClickOnNewAndSelectDraft();
    });

    it('Click ‘Upload’', function() {
        documents.ClickUpload();
        documents.validateClickUpload();
    });

    it('Click ‘choose a local file’', function() {
        documents.ClickChooseALocalfile();
        documents.validateClickChooseALocalfile();
    });

    it('Select file from OS menu', function() {
        documents.SelectFileFromOSMenu();
        documents.validateSelectFileFromOSMenu();
    });

    it('Click on title area.  Type new title', function() {
        documents.SelectClickOnTitleAreaTypeNewTitle();
        documents.validateSelectClickOnTitleAreaTypeNewTitle();
    });

    it('Click on document leaving cursor on area to insert signature box', function() {
        documents.ClickOnDocumentLeavingCursorOnSignatureBoxArea();
        documents.validateClickOnDocumentLeavingCursorOnSignatureBoxArea();
    });
    //2. document settings

    it('Select new, draft', function() {
            element(by.xpath(repo.paperlight.document.newdraft.xpath)).click();

            documentSignatureCaseManager.SelectNewDraft();
            documentSignatureCaseManager.validateSelectNewDraft();
        }),

        it('Document Signature (All)', function() {
            documentSignatureCaseManager.DocumentSignatureCM();
            documentSignatureCaseManager.validateDocumentSignatureCM();
        }),


        it('Click, Sign and submit Signature', function() {
            signature.Click_Sign_submit_Signature();
            signature.validate_Click_Sign_submit_Signature();
        });

    it('Click Action', function() {
        signature.Click_Action();
        signature.validate_Click_Action();
    });


    it('Click Send from the dropdown menu', function() {
        signature.Click_Dropdown_Send();
        signature.validate_Click_Dropdown_Send();
    });
});