var superagent = require('superagent')
var chai = require('chai')
var expect = chai.expect;

var data = require('./data')
var repo = require('./repository')

var Signature = require('./lib/Signature')
var login = require('./lib/login')
var Documents = require('./lib/Documents')
var DocumentSignatureCaseManager = require('./lib/DocumentSignatureCaseManager')

var url = require('./data');

describe('Athennian', function () {
    beforeEach(function () {

        browser.wait(function () {
            browser.sleep(5000)
            return true;
        }).then(function () {

        });
    });

    //1. login begin
    it('should login', function () {
        login.login();
        login.validatelogin();
    });
    //1. login end

    //2. document settings
    it('Click on +New and select ‘draft’', function () {

        Documents.ClickOnNewAndSelectDraft();
        Documents.validateClickOnNewAndSelectDraft();
    });

    //New Draft window
    it("Click on blank draft '+'", function () {
        Documents.Clickdraft();
    });

    // it('Click ‘Upload’', function () {

    //     Documents.ClickUpload();
    //     Documents.validateClickUpload();
    // });

    //it('Click ‘choose a local file’', function () {

    //Documents.ClickChooseALocalfile();
    //Documents.validateClickChooseALocalfile();
    //});

    //it('Select file from OS menu', function () {

    //Documents.SelectFileFromOSMenu();
    //Documents.validateSelectFileFromOSMenu();
    //});

    it('Click on title area.  Type new title', function () {


        Documents.SelectClickOnTitleAreaTypeNewTitle();
        Documents.validateSelectClickOnTitleAreaTypeNewTitle();
    });

    it('Click on document leaving cursor on area to insert signature box', function () {

        Documents.ClickOnDocumentLeavingCursorOnSignatureBoxArea();
        Documents.validateClickOnDocumentLeavingCursorOnSignatureBoxArea();
    });
    //     //2. document settings


    // it('Select new, draft', function () {

    //     DocumentSignatureCaseManager.SelectNewDraft();
    //     DocumentSignatureCaseManager.validateSelectNewDraft();
    // });

    it('Document Signature (All)', function () {

        DocumentSignatureCaseManager.DocumentSignatureCM();
        DocumentSignatureCaseManager.validateDocumentSignatureCM();
    });


    it('Click, Sign and submit Signature', function () {

        Signature.ClickSignSubmitSignature();
        Signature.ValidateClickSignSubmitSignature();
    });

    it('Click Action', function () {

        Signature.ClickAction();
        Signature.validateClickAction();
    });


    it('Click Send from the dropdown menu', function () {

        Signature.ClickDropdownSend();
        Signature.validateClickDropdownSend();
    });
});
