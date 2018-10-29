var Signature = require('./lib/Signature')
var login = require('./lib/Login')
var Documents = require('./lib/Documents')
describe('Login', function() {
    //1. login begin
    var DocumentSignatureCaseManager = require('./lib/DocumentSignatureCaseManager')

    describe('Elements - spec', function() {

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

    describe('Create element', function() {
        //clicks on element
        it('Click on element tab', function() {
            Documents.ClickonElementsIconInSidebar();
        })
        it('Click on +Field Button', function() {
            Documents.ClickOnFieldButton();
        })
        it('Click on New Field Button', function() {
            Documents.ClickOnNewFieldButton();
        })
        it('Add text to Variable 1', function() {
            Documents.ClickOnVariable1Button();
        })


    })


});