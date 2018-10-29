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
            //Modidies new person info
        it('should click on person', function() {
            Documents.ModifyNewPersonInfo();
        })
        it('Changes first name', function() {
            Documents.ModifiesFirstName();
        })
        it("Modifies middle name", function() {
            Documents.ModifiesMiddleName();
        })
        it('Modifies last name', function() {
            Documents.ModifiesLastName();
        })
        it('Modifies email', function() {
            Documents.ModifiesEmail();
        })
        it('Adds primary number', function() {
            Documents.AddsPrimaryNumber();
        })
        it('Adds Occupation', function() {
            Documents.AddsOccupation();
        })
        it('Adds Residency', function() {
            Documents.AddsResidency();
        })
        it('Adds execution', function() {
            Documents.AddsExecution();
        })
        it('Modifies Bio', function() {
            Documents.ModifiesBio();
        })
        it('Modifies status', function() {
            Documents.ModifiesStatus();
        })
        it('Saves modified person', function() {
            Documents.SaveModiefiedPerson();
        })
        it('Clicks on status1', function() {
            Documents.ModifiedStatus1();
        })
        it('Deletes a Person', function() {
            Documents.DeletesPerson();
        })
    })

});