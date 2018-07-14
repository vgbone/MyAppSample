var superagent = require('superagent')
var chai = require('chai')
var expect = chai.expect;

var data = require('./data')
var repo = require('./repository')

var signature = require('./lib/signature')
    // var signature2 = require('./lib/signature2')
    // var signature3 = require('./lib/signature3')
var login = require('./lib/login')
    // var login2 = require('./lib/login2')
    // var login3 = require('./lib/login3')

var Documents = require('./lib/Documents')
var DocumentSignatureCaseManager = require('./lib/DocumentSignatureCaseManager')
var AddNewSignatureRecipient = require('./lib/AddNewSignatureRecipient')
var CreateNewtemplate = require('./lib/CreateNewTemplate')
var ShareDocuments = require('./lib/ShareDocuments')


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
        login.login();
        login.validatelogin();
    });


    it('Checks checkbox', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //element(by.xpath("//BUTTON[@aria-label='checkbox']")).click();//click check box

        element(by.xpath("(//DIV[@class='_md-container md-ink-ripple'])[2]")).click(); //click check box

    });

    it('Creates a New template', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();          

        CreateNewtemplate.SelectNewTemplate();
        CreateNewtemplate.validateSelectNewTemplate();
    });

    it('Enters Template Information', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //CreateNewtemplate.SelectNewTemplate();  

        CreateNewtemplate.EnterTemplateInfo();
        CreateNewtemplate.validateEnterTemplateInfo();
    });

    it('Save Finished Template', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //CreateNewtemplate.SelectNewTemplate();
        //CreateNewtemplate.EnterTemplateInfo();  

        CreateNewtemplate.SaveFinishedTemplate();
        CreateNewtemplate.validateSaveFinishedTemplate();
    });

    //2. document settings
    it('Click on +New and select ‘draft’', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login(); 

        element(by.xpath("(//A[@ui-sref='projects.workspace.documents'])[2]")).click(); //clicks homepage   
        Documents.ClickOnNewAndSelectDraft();
        Documents.validateClickOnNewAndSelectDraft();
    });

    it('Share Documnet: Can view only', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login(); 
        //Documents.ClickOnNewAndSelectDraft();

        browser.sleep(3000);
        ShareDocuments.CanViewOnly();
        ShareDocuments.validateCanViewOnly();
    });

    it('Share Documnet: Can edit', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login(); 
        //Documents.ClickOnNewAndSelectDraft();
        //ShareDocuments.CanViewOnly();
        //element(by.xpath("//BUTTON[@aria-label='save']")).click();//click apply button
        ShareDocuments.CanEdit();
        ShareDocuments.validateCanEdit();
    });

    it('Share Documnet: All access', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login(); 
        //Documents.ClickOnNewAndSelectDraft();
        //ShareDocuments.CanViewOnly();
        //ShareDocuments.CanEdit();

        ShareDocuments.AllAccess();
        ShareDocuments.validateAllAccess();
    });



    it('Click ‘Upload’', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //Documents.ClickOnNewAndSelectDraft();

        browser.sleep(3000);
        Documents.ClickUpload();
        Documents.validateClickUpload();
    });

    it('Click ‘choose a local file’', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //Documents.ClickOnNewAndSelectDraft();
        //Documents.ClickUpload();

        Documents.ClickChooseALocalfile();
        Documents.validateClickChooseALocalfile();
    });

    it('Select file from OS menu', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //Documents.ClickOnNewAndSelectDraft();
        //Documents.ClickUpload();
        //Documents.ClickChooseALocalfile();

        Documents.SelectFileFromOSMenu();
        Documents.validateSelectFileFromOSMenu();
    });

    it('Click on title area.  Type new title', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //Documents.ClickOnNewAndSelectDraft();
        //Documents.ClickUpload();
        //Documents.ClickChooseALocalfile();
        //Documents.SelectFileFromOSMenu();

        Documents.SelectClickOnTitleAreaTypeNewTitle();
        Documents.validateSelectClickOnTitleAreaTypeNewTitle();
    });

    it('Click on document leaving cursor on area to insert signature box', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //Documents.ClickOnNewAndSelectDraft();
        //Documents.ClickUpload();
        //Documents.ClickChooseALocalfile();
        //Documents.SelectFileFromOSMenu();
        //Documents.SelectClickOnTitleAreaTypeNewTitle();

        Documents.ClickOnDocumentLeavingCursorOnSignatureBoxArea();
        Documents.validateClickOnDocumentLeavingCursorOnSignatureBoxArea();
    });

    //2. document settings
    it('Select new, draft', function() {
            //uncomment if restartBrowserBetweenTests: true
            //login.login(); 

            element(by.xpath("(//A[@ui-sref='projects.workspace.documents'])[2]")).click(); //clicks homepage
            DocumentSignatureCaseManager.SelectNewDraft();
            DocumentSignatureCaseManager.validateSelectNewDraft();
        }),

        it('Document Signature', function() {
            //uncomment if restartBrowserBetweenTests: true
            //login.login();  
            //DocumentSignatureCaseManager.SelectNewDraft();

            DocumentSignatureCaseManager.DocumentSignatureCM();
            DocumentSignatureCaseManager.validateDocumentSignatureCM();
        }),

        it('Click Action', function() {
            //uncomment if restartBrowserBetweenTests: true
            //login.login();  
            //DocumentSignatureCaseManager.SelectNewDraft();
            //DocumentSignatureCaseManager.DocumentSignatureCM();
            //signature.Click_Sign_submit_Signature();

            signature.ClickAction();
            signature.validateClickAction();
        });

    it('Click Send from the dropdown menu', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //DocumentSignatureCaseManager.SelectNewDraft();
        //DocumentSignatureCaseManager.DocumentSignatureCM();
        //signature.Click_Sign_submit_Signature();
        //signature.Click_Action();

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
        // logout.logout();
        // logout.validatelogout();

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
        login.altUserLogin();
        login.validatelogin();
    });

    it('select new, draft', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login(); 

        element(by.xpath("(//DIV[@class='navbar-btn-container hidden-xs'])[2]")).click();
        DocumentSignatureCaseManager.SelectNewDraft();
        browser.sleep(2000);
        DocumentSignatureCaseManager.validateSelectNewDraft();
        browser.sleep(2000);
    });

    it('document signature (All)', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //DocumentSignatureCaseManager.SelectNewDraft();

        DocumentSignatureCaseManager.DocumentSignatureCM();
        browser.sleep(2000);
        DocumentSignatureCaseManager.validateDocumentSignatureCM();
        browser.sleep(2000);
    });


    it('click action', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //DocumentSignatureCaseManager.SelectNewDraft();
        //DocumentSignatureCaseManager.DocumentSignatureCM();
        //signature.Click_Sign_submit_Signature();

        signature.ClickAction();
        browser.sleep(2000);
        signature.validateClickAction();
        browser.sleep(2000);
    });


    it('click send from the dropdown menu', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //DocumentSignatureCaseManager.SelectNewDraft();
        //DocumentSignAll.DocumentSignatureCM();
        //signature.Click_Sign_submit_Signature();
        //signature.Click_Action();

        signature.ClickDropdownSend();
        browser.sleep(2000);
        signature.validateClickDropdownSend();
        browser.sleep(2000);
    });

    it('click submit from the popup menu', function() {
        //signature.validate_Click_Dropdown_Send();

        signature.ClickSubmit();
        browser.sleep(2000);
    });

    it('validate email sent popup', function() {
        //signature.validate_Click_Dropdown_Send();

        signature.ValidateEmailSentPopup();
        browser.sleep(7000);
    });

    it('login to outlook web', function() {
        //Login User name.
        //Login Password.

        browser.sleep(3000);
        login.mailLogin();
        login.validaateMailLogin();
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
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //DocumentSignAll.SelectNewDraft();
        //DocumentSignAll.DocumnetsSignatureAll();
        //signature2.validate_Click_Sign_submit_Signature();

        browser.sleep(4000);
        signature.ClickSignSubmitSignature();
        browser.sleep(5000);
    });

    it('login to outlook web', function() {
        //Login User name.
        //login2.login2();
        //Login Password.
        //login2.validatelogin2();

        browser.sleep(5000);
        browser.get(data.mailURL);
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