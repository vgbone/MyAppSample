var Signature = require('./lib/Signature')
var login = require('./lib/login')
var Documents = require('./lib/Documents')
var DocumentSignatureCaseManager = require('./lib/DocumentSignatureCaseManager')

describe('Athennian - light spec', function() {

    describe('Login', function() {
        //1. login begin
        it('should login', function() {
            login.login();
            login.validatelogin();
        });
        //1. login end
    })

    describe('Create draft', function() {
        //2. document settings
        it('Click on +New and select ‘draft’', function() {
            Documents.ClickOnNewAndSelectDraft();
            Documents.validateClickOnNewAndSelectDraft();
        });
        //New Draft window
        it("Click on blank draft '+'", function() {
            Documents.Clickdraft();
        });
    })

    describe('Alter document', function() {
        it('Click on title area.  Type new title', function() {
            Documents.SelectClickOnTitleAreaTypeNewTitle();
            Documents.validateSelectClickOnTitleAreaTypeNewTitle();
        });
        it('Click on document leaving cursor on area to insert signature box', function() {
            Documents.ClickOnDocumentLeavingCursorOnSignatureBoxArea();
            Documents.validateClickOnDocumentLeavingCursorOnSignatureBoxArea();
        });
        it('Document Signature (All)', function() {
            DocumentSignatureCaseManager.DocumentSignatureCM();
            DocumentSignatureCaseManager.validateDocumentSignatureCM();
        });
        it('Click, Sign and submit Signature', function() {
            Signature.ClickSignSubmitSignature();
            Signature.ValidateClickSignSubmitSignature();
        });
    })

    describe('Send document', function() {
        it('Click Action', function() {
            Signature.ClickAction();
            Signature.validateClickAction();
        });
        it('Click Send from the dropdown menu', function() {
            Signature.ClickDropdownSend();
            Signature.validateClickDropdownSend();
        });
    })
});