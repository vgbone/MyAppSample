var Signature = require('./lib/Signature')
var login = require('./lib/Login')
var Documents = require('./lib/Documents')
var DocumentSignatureCaseManager = require('./lib/DocumentSignatureCaseManager')

function scrollElemToBottomOfView(elem) {
    elem.scrollIntoView(false);
}

function scrollElemFinderIntoView(elemFinder) {
    var promise = browser.executeScript(scrollElemToBottomOfView, elemFinder);
    return promise;
};


describe('People - spec', function() {

    describe('Login', function() {
        //1. login begin
        it('should login', function() {
                login.login();
                login.validatelogin();
            })
            //Clicks on minute book icon
        it('should click on minute book icon', function() {
                Documents.ClickOnMinuteBookIcon();
            })
            //Clicks on People button in side bar
        it('should click on People button in sidebar', function() {
            Documents.ClickOnPeopleButtonOnSidebar();
        })
        it('should click on person', function() {
            Documents.ModifyNewPersonInfo();
        })
        it('Should click on Addresses in sidebar', function() {
            Documents.ClicksOnAddressesSidebar();
        })
        it('Selects an address and opens it', function() {
            Documents.SelectsAnAddressAndOpensIt();
        })
        it('Clicks on Attention', function() {
            Documents.ClicksOnAttenion();
        })
        it('Clicks and adds a primary number', function() {
            Documents.ClicksAndAddsAPrimaryNumber();
        })
        it('Clicks on email text area', function() {
            Documents.ClicksOnEmailTextarea();

        })
        it('Clicks on notes section and inserts text', function() {
            Documents.ClicksOnNotesSectionAndInsertsText();
        })
        it('Clicks on save button', function() {
            scrollElemFinderIntoView(element(by.xpath('//span[contains(.,"Delete")]')))
                //element(by.css('[ng-click="setRecord()"]')).click();
            element(by.xpath('//span[contains(.,"Save")]')).click();
        })
        it('Clicks on Administration in secondary sidebar', function() {
            Documents.ClicksOnAdminstrationSidebar();
        })
        it('Clicks on the "+" button', function() {
            Documents.ClicksOnPlusSign();
        })
        it('Clicks on select member dropdown', function() {
            Documents.ClicksOnselectMemberDropdown();
        })
        it('Selects a memeber', function() {
            Documents.SelectsAMember();
        })
        it('Clicks on select office dropdown', function() {
            Documents.ClicksOnSelectOfficeDropdown();
        })
        it('Selects an office', function() {
            Documents.SelectsAnOffice();
        })
        it('Clicks on select role dropdown', function() {
            Documents.ClicksOnSelectRoleDropdown();
        })
        it('Selects a role', function() {
            Documents.SelectsARole();
        })
        it('Clicks on History in secondary sidebar', function() {
            Documents.ClicksOnHistoryInSidebar();
        })
        it('Clicks on "+ new" button', function() {
            Documents.ClicksOnNew1Button();
        })

    })

});