var superagent = require('superagent')
var chai = require('chai')
var expect = chai.expect;

var data = require('./data')
var repo = require('./repository')

var signature = require('./lib/Signature')
var login = require('./lib/Login')
var documents = require('./lib/Documents')
var documentSignatureCaseManager = require('./lib/DocumentSignatureCaseManager')
var createNewtemplate = require('./lib/CreateNewtemplate')
var shareDocuments = require('./lib/ShareDocuments')


var url = require('./data');

describe('Paper | ContractClub', function() {
    beforeEach(function() {

        browser.wait(function() {
            browser.sleep(5000)
            return true;
        }).then(function() {

        });
    });

    //1. login begin
    it('Should login', function() {
        //login begin  
        login.login(data.credentials.one.username, data.credentials.one.password);
        login.validatelogin();
    });


    it('Checks checkbox', function() {
        element(by.xpath("(//DIV[@class='_md-container md-ink-ripple'])[2]")).click(); //click check box
    });

    it('Creates a New template', function() {
        createNewtemplate.SelectNewTemplate();
        createNewtemplate.validateSelectNewTemplate();
    });

    it('Enters Template Information', function() {
        createNewtemplate.EnterTemplateInfo();
        createNewtemplate.validateEnterTemplateInfo();
    });

    it('Save Finished Template', function() {
        createNewtemplate.SaveFinishedTemplate();
        createNewtemplate.validateSaveFinishedTemplate();
    });

    //2. document settings
    it('Click on +New and select ‘draft’', function() {
        element(by.xpath("(//A[@ui-sref='projects.workspace.documents'])[2]")).click(); //clicks homepage   
        documents.ClickOnNewAndSelectDraft();
        documents.validateClickOnNewAndSelectDraft();
    });

    it('Share Documnet: Can view only', function() {
        browser.sleep(3000);
        shareDocuments.CanViewOnly();
        shareDocuments.validateCanViewOnly();
    });

    it('Share Documnet: Can edit', function() {
        shareDocuments.CanEdit();
        shareDocuments.validateCanEdit();
    });

    it('Share Documnet: All access', function() {
        shareDocuments.AllAccess();
        shareDocuments.validateAllAccess();
    });



    it('Click ‘Upload’', function() {
        browser.sleep(3000);
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
            element(by.xpath("(//A[@ui-sref='projects.workspace.documents'])[2]")).click(); //clicks homepage
            documentSignatureCaseManager.SelectNewDraft();
            documentSignatureCaseManager.validateSelectNewDraft();
        }),

        it('Document Signature', function() {
            documentSignatureCaseManager.DocumentSignatureCM();
            documentSignatureCaseManager.validateDocumentSignatureCM();
        }),

        it('Click Action', function() {
            signature.ClickAction();
            signature.validateClickAction();
        });

    it('Click Send from the dropdown menu', function() {
        signature.ClickDropdownSend();
        signature.validateClickDropdownSend();
    });

    it('Click Submit from the popup menu', function() {
        //signature.validate_Click_Dropdown_Send();

        browser.sleep(5000);
        signature.ClickSubmit();
        signature.validateClickSubmit();
    });

    browser.sleep(5000);

    it('should logout', function() {
        browser.sleep(5000);
        element(by.xpath("(//A[@ui-sref='projects.workspace.documents'])[2]")).click(); //clicks homepage
        browser.sleep(5000);
        element(by.xpath('//a[@class="dropdown-toggle"]')).click();
        browser.sleep(5000);
        element(by.xpath('//i[@class="fa fa-sign-out"]')).click();
        browser.sleep(5000);

    });
    browser.wait(function() {
        browser.sleep(5000)
        return true;
    }).then(function() {

    });

    // Tony's Starts 

    it('should login', function() {
        login.login(data.credentials.one.username, data.credentials.five.password, data.credentials.one.username, data.credentials.five.password);
        login.validatelogin();
    });

    it('select new, draft', function() {
            element(by.xpath("(//DIV[@class='navbar-btn-container hidden-xs'])[2]")).click();
            documentSignatureCaseManager.SelectNewDraft();
            browser.sleep(2000);
            documentSignatureCaseManager.validateSelectNewDraft();
            browser.sleep(2000);
        }),

        it('document signature (All)', function() {
            documentSignatureCaseManager.DocumentSignatureCM();
            browser.sleep(2000);
            documentSignatureCaseManager.validateDocumentSignatureCM();
            browser.sleep(2000);
        }),


        it('click action', function() {
            signature.ClickAction();
            browser.sleep(2000);
            signature.validateClickAction();
            browser.sleep(2000);
        });


    it('click send from the dropdown menu', function() {
        signature.ClickDropdownSend();
        browser.sleep(2000);
        signature.validateClickDropdownSend();
        browser.sleep(2000);
    });

    it('click submit from the popup menu', function() {
        signature.ClickSubmit();
        browser.sleep(2000);
    });

    it('validate email sent popup', function() {
        signature.ValidateEmailSentPopup();
        browser.sleep(7000);
    });

    it('login to outlook web', function() {
        browser.sleep(3000);
        login.outlookLogin();
        login.validateOutlookLogin();
        browser.sleep(6000);
    });

    it('Outlook open mail and', function() {
        //Opens the Email.

        browser.sleep(4000);
        element(by.xpath("(//div[@autoid='_lv_i']//span[contains(.,'Document has been sent!')])[1]")).click();
    });

    it('click paper login', function() {
        //Click the login.  

        browser.sleep(4000);
        element(by.xpath("//a[contains(., 'Login')]")).click();
        browser.sleep(4000);
    });

    it('Click, Sign and submit Signature', function() {
        browser.sleep(4000);
        signature.ClickSignSubmitSignature(data.signature.two);
        browser.sleep(5000);
    });

    it('login to outlook web', function() {

        browser.sleep(5000);
        browser.get(data.url2);
        browser.sleep(6000);
    });

    it('Outlook open mail', function() {
        //Opens the Email.

        browser.sleep(6000);
        browser.sleep(6000);
        element(by.xpath("(//div[@autoid='_lv_i']//span[contains(.,'Document has been marked as comp')])[1]")).click();
        browser.sleep(5000);
    });

    it('Click paper PDF', function() {
        //Click the login.

        browser.sleep(3000);
        element(by.xpath("//table/tbody//a[1]/span[contains(@title, 'Untitled')]")).click();
        browser.sleep(3000);
    });

});