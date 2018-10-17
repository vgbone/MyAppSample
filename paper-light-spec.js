var superagent = require('superagent')
var chai = require('chai')
var expect = chai.expect;

var data = require('./data')
var repo = require('./repository')

var signature = require('./lib/signature')
var login = require('./lib/login')
var Documents = require('./lib/Documents')
var DocumentSignatureCaseManager = require('./lib/DocumentSignatureCaseManager')

var url = require('./data');

describe('Paper | ContractClub', function() {
    beforeEach(function() {

       browser.wait(function() {
            browser.sleep(2000)
            return true;
        }).then(function() {

       });
    });

    //1. login begin
    it('should login', function() {
        login.login();
        login.validatelogin();
        });   
         //1. login end

    //Before running each function, run this login script ... if restartBrowserBetweenTests: true
    //beforeEach(function() {
        //login.login();
        //login.validateLoggedIn();
        //});

    //2. document settings
    it('Click on +New and select ‘draft’', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
            
        Documents.ClickOnNewAndSelectDraft();
        Documents.validateClickOnNewAndSelectDraft();
        });

    // it('Click ‘Upload’', function() {
    //     //uncomment if restartBrowserBetweenTests: true
    //     //login.login();  
    //     //Documents.ClickOnNewAndSelectDraft();
                
    //     Documents.ClickUpload();
    //     Documents.validateClickUpload();
    //     });

    // it('Click ‘choose a local file’', function() {
    //     //uncomment if restartBrowserBetweenTests: true
    //     //login.login();  
    //     //Documents.ClickOnNewAndSelectDraft();
    //     //Documents.ClickUpload();
                    
    //     Documents.ClickChooseALocalfile();
    //     Documents.validateClickChooseALocalfile();
    //     });

    it('Select file from OS menu', function() {
        //uncomment if restartBrowserBetweenTests: true
        //login.login();  
        //Documents.ClickOnNewAndSelectDraft();
        //Documents.ClickUpload();
        //Documents.ClickChooseALocalfile();
                        
        Documents.SelectFileFromOSMenu();
        Documents.validateSelectFileFromOSMenu();
        });

    // it('Click on title area.  Type new title', function() {
    //     //uncomment if restartBrowserBetweenTests: true
    //     //login.login();  
    //     //Documents.ClickOnNewAndSelectDraft();
    //     //Documents.ClickUpload();
    //     //Documents.ClickChooseALocalfile();
    //     //Documents.SelectFileFromOSMenu();
                            
    //     Documents.SelectClickOnTitleAreaTypeNewTitle();
    //     Documents.validateSelectClickOnTitleAreaTypeNewTitle();
    //     });

    // it('Click on document leaving cursor on area to insert signature box', function() {
    //     //uncomment if restartBrowserBetweenTests: true
    //     //login.login();  
    //     //Documents.ClickOnNewAndSelectDraft();
    //     //Documents.ClickUpload();
    //     //Documents.ClickChooseALocalfile();
    //     //Documents.SelectFileFromOSMenu();
    //     //Documents.SelectClickOnTitleAreaTypeNewTitle();
                                
    //     Documents.ClickOnDocumentLeavingCursorOnSignatureBoxArea();
    //     Documents.validateClickOnDocumentLeavingCursorOnSignatureBoxArea();
    //     });
    //     //2. document settings
      
    // it('Select new, draft', function() {
    //     //uncomment if restartBrowserBetweenTests: true
    //     //login.login(); 
    //     element(by.xpath("(//DIV[@class='navbar-btn-container hidden-xs'])[2]")).click(); 

    //     DocumentSignatureCaseManager.SelectNewDraft();
    //     DocumentSignatureCaseManager.validateSelectNewDraft();
    //     }),
       
    // it('Document Signature (All)', function() {
    //     //uncomment if restartBrowserBetweenTests: true
    //     //login.login();  
    //     //DocumentSignAll.SelectNewDraft();

    //     DocumentSignatureCaseManager.DocumentSignatureCM();
    //     DocumentSignatureCaseManager.validateDocumentSignatureCM();
    //     }),
      
       
    // // it('Click, Sign and submit Signature', function() {
    // //     //uncomment if restartBrowserBetweenTests: true
    // //     //login.login();  
    // //     //DocumentSignAll.SelectNewDraft();
    // //     //DocumentSignAll.DocumnetsSignatureAll();

    // //     signature.ClickSignSubmitSignature();
    // //     signature.validateClickSignSubmitSignature();
    // //     });
       
    // it('Click Action', function() {
    //     //uncomment if restartBrowserBetweenTests: true
    //     //login.login();  
    //     //DocumentSignAll.SelectNewDraft();
    //     //DocumentSignAll.DocumnetsSignatureAll();
    //     //signature.Click_Sign_submit_Signature();
               
    //     signature.ClickAction();
    //     signature.validateClickAction();
    //     });
         
        
    // it('Click Send from the dropdown menu', function() {
    //     //uncomment if restartBrowserBetweenTests: true
    //     //login.login();  
    //     //DocumentSignAll.SelectNewDraft();
    //     //DocumentSignAll.DocumnetsSignatureAll();
    //     //signature.Click_Sign_submit_Signature();
    //     //signature.Click_Action();
        
    //     signature.ClickDropdownSend();
    //     signature.validateClickDropdownSend();
    //     });
});
    