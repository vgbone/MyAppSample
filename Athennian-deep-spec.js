var login = require('./lib/login')
var CreateNewtemplate = require('./lib/CreateNewTemplate')

describe('Athennian', function() {
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
        element(by.xpath("(//DIV[@class='_md-container md-ink-ripple'])[2]")).click(); //click check box
    });

    it('Creates a New template', function() {

        CreateNewtemplate.SelectNewTemplate();
        CreateNewtemplate.validateSelectNewTemplate();
    });

    it('Enters Template Information', function() {

        CreateNewtemplate.EnterTemplateInfo();
        CreateNewtemplate.validateEnterTemplateInfo();
    });

    it('Save Finished Template', function() {

        CreateNewtemplate.SaveFinishedTemplate();
        CreateNewtemplate.validateSaveFinishedTemplate();
    });

    // //2. document settings
    // it('Click on +New and select ‘draft’', function () {

    //     element(by.xpath("(//A[@ui-sref='projects.workspace.documents'])[2]")).click(); //clicks homepage   
    //     Documents.ClickOnNewAndSelectDraft();
    //     Documents.validateClickOnNewAndSelectDraft();
    // });

    // it('Share Documnet: Can view only', function () {

    //     browser.sleep(3000);
    //     ShareDocuments.CanViewOnly();
    //     ShareDocuments.validateCanViewOnly();
    // });

    // it('Share Documnet: Can edit', function () {
    //     //element(by.xpath("//BUTTON[@aria-label='save']")).click();//click apply button
    //     ShareDocuments.CanEdit();
    //     ShareDocuments.validateCanEdit();
    // });

    // it('Share Documnet: All access', function () {

    //     ShareDocuments.AllAccess();
    //     ShareDocuments.validateAllAccess();
    // });



    // it('Click ‘Upload’', function () {

    //     browser.sleep(3000);
    //     Documents.ClickUpload();
    //     Documents.validateClickUpload();
    // });

    // it('Click ‘choose a local file’', function () {

    //     Documents.ClickChooseALocalfile();
    //     Documents.validateClickChooseALocalfile();
    // });

    // it('Select file from OS menu', function () {

    //     Documents.SelectFileFromOSMenu();
    //     Documents.validateSelectFileFromOSMenu();
    // });

    // it('Click on title area.  Type new title', function () {

    //     Documents.SelectClickOnTitleAreaTypeNewTitle();
    //     Documents.validateSelectClickOnTitleAreaTypeNewTitle();
    // });

    // it('Click on document leaving cursor on area to insert signature box', function () {

    //     Documents.ClickOnDocumentLeavingCursorOnSignatureBoxArea();
    //     Documents.validateClickOnDocumentLeavingCursorOnSignatureBoxArea();
    // });

    // //2. document settings

    //     element(by.xpath("(//A[@ui-sref='projects.workspace.documents'])[2]")).click(); //clicks homepage
    //     DocumentSignatureCaseManager.SelectNewDraft();
    //     DocumentSignatureCaseManager.validateSelectNewDraft();
    // }),

    //     it('Document Signature', function () {

    //         DocumentSignatureCaseManager.DocumentSignatureCM();
    //         DocumentSignatureCaseManager.validateDocumentSignatureCM();
    //     }),

    //     it('Click Action', function () {

    //         signature.ClickAction();
    //         signature.validateClickAction();
    //     });

    // it('Click Send from the dropdown menu', function () {

    //     signature.ClickDropdownSend();
    //     signature.validateClickDropdownSend();
    // });

    // it('Click Submit from the popup menu', function () {

    //     browser.sleep(5000);
    //     signature.ClickSubmit();
    //     signature.validateClickSubmit();
    // });

    // browser.sleep(5000);

    // it('should logout', function () {

    //     browser.sleep(5000);
    //     element(by.xpath("(//A[@ui-sref='projects.workspace.documents'])[2]")).click(); //clicks homepage
    //     browser.sleep(5000);
    //     element(by.xpath('//a[@class="dropdown-toggle"]')).click();
    //     browser.sleep(5000);
    //     element(by.xpath('//i[@class="fa fa-sign-out"]')).click();
    //     browser.sleep(5000);

    // });
    // browser.wait(function () {
    //     browser.sleep(5000)
    //     return true;
    // }).then(function () {

    // });

    // // Tony's Starts 

    // it('should login', function () {
    //     login.altUserLogin();
    //     login.validatelogin();
    // });

    // it('select new, draft', function () {

    //     element(by.xpath("(//DIV[@class='navbar-btn-container hidden-xs'])[2]")).click();
    //     DocumentSignatureCaseManager.SelectNewDraft();
    //     browser.sleep(2000);
    //     DocumentSignatureCaseManager.validateSelectNewDraft();
    //     browser.sleep(2000);
    // });

    // it('document signature (All)', function () {

    //     DocumentSignatureCaseManager.DocumentSignatureCM();
    //     browser.sleep(2000);
    //     DocumentSignatureCaseManager.validateDocumentSignatureCM();
    //     browser.sleep(2000);
    // });


    // it('click action', function () {

    //     signature.ClickAction();
    //     browser.sleep(2000);
    //     signature.validateClickAction();
    //     browser.sleep(2000);
    // });


    // it('click send from the dropdown menu', function () {

    //     signature.ClickDropdownSend();
    //     browser.sleep(2000);
    //     signature.validateClickDropdownSend();
    //     browser.sleep(2000);
    // });

    // it('click submit from the popup menu', function () {

    //     signature.ClickSubmit();
    //     browser.sleep(2000);
    // });

    // it('validate email sent popup', function () {

    //     signature.ValidateEmailSentPopup();
    //     browser.sleep(7000);
    // });

    // it('login to outlook web', function () {

    //     browser.sleep(3000);
    //     login.mailLogin();
    //     login.validateMailLogin();
    //     browser.sleep(6000);
    // });

    // it('Outlook open mail and', function () {
    //     //Opens the Email.
    //     browser.sleep(4000);
    //     element(by.xpath("(//div[@autoid='_lv_i']//span[contains(.,'Document has been sent!')])[1]")).click();
    // });

    // it('click paper login', function () { 

    //     browser.sleep(4000);
    //     element(by.xpath("//a[contains(., 'Login')]")).click();
    //     browser.sleep(4000);
    // });

    // it('Click, Sign and submit Signature', function () {

    //     browser.sleep(4000);
    //     signature.ClickSignSubmitSignature();
    //     browser.sleep(5000);
    // });

    // it('login to outlook web', function () {

    //     browser.sleep(5000);
    //     browser.get(data.mailURL);
    //     browser.sleep(6000);
    // });

    // it('Outlook open mail', function () {

    //     browser.sleep(6000);
    //     element(by.xpath("(//div[@autoid='_lv_i']//span[contains(.,'Document has been marked as comp')])[1]")).click();
    //     browser.sleep(5000);
    // });

    // it('Click paper PDF', function () {

    //     browser.sleep(3000);
    //     element(by.xpath("//table/tbody//a[1]/span[contains(@title, 'Untitled')]")).click();
    //     browser.sleep(3000);
    // });

});