var Signature = require('./lib/Signature')
var login = require('./lib/Login')
var Documents = require('./lib/Documents')
var DocumentSignatureCaseManager = require('./lib/DocumentSignatureCaseManager')

describe('Upload - spec', function() {

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
        //Click on Upload button
        it('Click on upload button', function() {
            Documents.ClickOnUploadButton();
        })
        it('Choose a local file', function() {
            Documents.ClickOnChooseALocalFileButton();
        })
    })

});
