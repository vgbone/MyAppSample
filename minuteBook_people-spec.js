var Signature = require('./lib/Signature')
var login = require('./lib/Login')
var Documents = require('./lib/Documents')
var DocumentSignatureCaseManager = require('./lib/DocumentSignatureCaseManager')

describe('Minutebookpeople - spec', function() {

    describe('Login', function() {
        //1. login begin
        it('should login', function() {
            login.login();
            login.validatelogin();
        });
        //1. login end

        //Clicks on minute book icon
        it('should click on minute book icon', function() {
                Documents.ClickOnMinuteBookIcon();
            })
            //Clicks on People button in side bar
        it('should click on People button in sidebar', function() {
                Documents.ClickOnPeopleButtonOnSidebar();
            })
            //Clicks on New button
        it('should click on new button', function() {
                Documents.ClicksOnNewButton();
            })
            //Clicks on cancel button
        it('should click on cancel button', function() {
                Documents.ClicksOnCancelButton();
            })
            //Clicks on New button
        it('should click on new button', function() {
                Documents.ClicksOnNewButton();
            })
            //Clicks on Last name text area
        it('clicks on Last name text area', function() {
                Documents.ClicksOnLastNameTextarea();
            })
            //Clicks on first name text area
        it('Clicks on first name text area', function() {
                Documents.ClicksOnFirstNameTextarea();
            })
            //Clicks on email section
        it('Clicks on email section', function() {
                Documents.ClicksOnEmailTextarea();
            })
            //Clicks on Bio section
        it('Clicks on Bio section', function() {
                Documents.ClicksOnBioSection();
            })
            //Clicks on Street text area
        it('Clicks on street texta area', function() {
                Documents.ClicksOnStreetTextarea();
            })
            //Clicks on Province text area
        it("Clicks on Province text area", function() {
                Documents.ClicksOnProvinceTextarea();
            })
            //Clicks on City text area
        it('Clicks on City text area', function() {
                Documents.ClicksOnCityTextarea();
            })
            //Clicks on Country text area
        it('Clicks on country text area', function() {
                Documents.ClicksOnCountryTextarea();
            })
            //Clicks on Postal code text area
        it('Clicks on postal code text area', function() {
                Documents.ClicksOnPostalCodeTextarea();
            })
            //Clicks on drop down
        it('Clicks on dropdown', function() {
                Documents.ClicksOnDropdown();
            })
            //Clicks on confirm button
        it('Clicks on Confirm button', function() {
            Documents.ClicksOnComfirmButton();
        })



        // //Clicks on import button
        it('Clicks on import button', function() {
                Documents.ClicksOnImportButton();

            })
            //Clicks a person to import
        it('Clicks a person to import', function() {
            Documents.ClicksAPersonToImport();
        })

        //Clicks on create button
        it('Clicks on create button', function() {
            Documents.ClicksOnCreateButton();
        })
    })

});