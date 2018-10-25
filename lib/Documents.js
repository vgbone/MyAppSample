var data = require('../data')
var repo = require('../repository')
    // var chai = require('chai')
    // var expect = chai.expect;


module.exports = {
    ClickOnNewAndSelectDraft: function() {
        element(by.id(repo.documents.buttons.new.id)).click().then(function() {
                element(by.id(repo.documents.buttons.draft.id)).click()
            }).then(function() {}) //clicks on Draft
    },
    validateClickOnNewAndSelectDraft: function() {
        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.title);
        });
    },
    Clickdraft: function() {
        element(by.xpath(repo.newDraft.buttons.blankdraft.xpath)).click().then(function() {}) //clicks new draft
    },
    ClickUpload: function() {
        element(by.css(repo.documents.buttons.upload.css)).click().then(function() {
                element(by.xpath(repo.documents.buttons.close.xpath)).click()
            }).then(function() {}) //clicks upload
    },
    validateClickUpload: function() {
        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.title);
        });
    },
    ClickChooseALocalfile: function() {
        element(by.model(repo.documents.textfields.title.model)).click().then(function() {}) //click 'choose a local file'              
    },
    validateClickChooseALocalfile: function() {
        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.title);
        });
    },
    validateSelectFileFromOSMenu: function() {
        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.title);
        });
    },
    SelectClickOnTitleAreaTypeNewTitle: function() {
        element(by.model(repo.documents.textfields.title.model)).clear().then(function() {
                element(by.model(repo.documents.textfields.title.model)).sendKeys(data.test_two.document_title)
            }).then(function() {}) //send texts into title area //click on title area
    },
    validateSelectClickOnTitleAreaTypeNewTitle: function() {
        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.title);
        });
    },
    ClickOnDocumentLeavingCursorOnSignatureBoxArea: function() {
        browser.ignoreSynchronization = true;
        browser.switchTo().frame(browser.findElement(by.xpath(repo.documents.iframe.xpath))).then(function() {
            browser.findElement(by.id(repo.documents.textfields.text_area.id)).click()
        }).then(function() {
            browser.switchTo().defaultContent();
            element(by.css(repo.documents.buttons.addSignature.css)).click(); //clicks add signature
        }); //clicks on text area
    },
    validateClickOnDocumentLeavingCursorOnSignatureBoxArea: function() {
        browser.getTitle().then(function(title) {
            expect(title).toEqual(data.title);
        });
    },
    //Clicks on Elements tab in the side bar
    ClickonElementsIconInSidebar: function() {
        element(by.xpath(repo.documents.buttons.elementsIcon.xpath)).click();
    },
    //Clicks on field button
    ClickOnFieldButton: function() {
        element(by.className(repo.documents.buttons.fieldButton.className)).click();
    },
    //Clicks on nww field button
    ClickOnNewFieldButton: function() {
        element(by.css(repo.documents.buttons.newFieldButton.css)).click();
    },
    //Clicks on Variable 1 button and inserts text
    ClickOnVariable1Button: function() {
        element(by.css(repo.documents.buttons.variable1Button.css)).clear().sendKeys('hello');
        expect(element(by.css(repo.documents.buttons.variable1Button.css)).isPresent()).toBe(true);
    },
    //Clicks on minute book icon
    ClickOnMinuteBookIcon: function() {
        element(by.xpath(repo.documents.buttons.minutebookIcon.xpath)).click();

    },

    //Clicks on People button in sidebar
    ClickOnPeopleButtonOnSidebar: function() {
        element(by.xpath(repo.documents.buttons.peopleButtonSidebar.xpath)).click();

    },
    //Clicks on New button for people
    ClicksOnNewButton: function() {
        element(by.xpath(repo.documents.buttons.newPeopleButton.xpath)).click();

    },
    //Clicks on last name text area 
    ClicksOnLastNameTextarea: function() {
        element(by.xpath(repo.documents.textfields.lastName.xpath)).click().sendKeys("Me")

    },
    //Clicks on first name text area
    ClicksOnFirstNameTextarea: function() {
        element(by.xpath(repo.documents.textfields.firstName.xpath)).click().sendKeys('John')

    },
    //Clicks on email text area
    ClicksOnEmailTextarea: function() {
        element(by.xpath(repo.documents.textfields.email.xpath)).click().sendKeys('mejohn@mailinator.com');

    },
    //Clicks on Bio section
    ClicksOnBioSection: function() {
        element(by.model(repo.documents.textfields.bioSection.model)).click().sendKeys('Hello World!');

    },
    //Clicks on Street textarea
    ClicksOnStreetTextarea: function() {
        element(by.xpath(repo.documents.textfields.street.xpath)).click().clear().sendKeys("45 Waterview");
    },
    //Clicks on city text area
    ClicksOnCityTextarea: function() {
        element(by.xpath(repo.documents.textfields.city.xpath)).click().clear().sendKeys('Miramcihi');
    },
    //Clicks on Province/State text area
    ClicksOnProvinceTextarea: function() {
        element(by.xpath(repo.documents.textfields.province.xpath)).click().clear().sendKeys('NB');
    },
    //Clicks on Country text area
    ClicksOnCountryTextarea: function() {
        element(by.xpath(repo.documents.textfields.country.xpath)).click().clear().sendKeys('Canada');
    },
    //Clicks on postal code text area
    ClicksOnPostalCodeTextarea: function() {
        element(by.xpath(repo.documents.textfields.postalCode.xpath)).click().clear().sendKeys('E1V2Z6');
    },
    //clicks on drop down
    ClicksOnDropdown: function() {
        element(by.xpath(repo.documents.buttons.dropdownButton.xpath)).click();
    },
    //Clicks on confirm button 
    ClicksOnComfirmButton: function() {
        element(by.xpath(repo.documents.buttons.confirm.xpath)).click();

    },
    //Clicks on create button
    ClicksOnCreateButton: function() {
        element(by.xpath(repo.documents.buttons.create.xpath)).click();
    },
    //Clicks on cancel button
    ClicksOnCancelButton: function() {
        element(by.xpath(repo.documents.buttons.cancel.xpath)).click();
    },
    //Clicks on import button
    ClicksOnImportButton: function() {
        element(by.xpath(repo.documents.buttons.import.xpath)).click()
            .then(function() {
                browser.sleep(5000);
            })
    },
    //Clicks a person to import
    ClicksAPersonToImport: function() {
        element(by.xpath(repo.documents.buttons.importPerson.xpath)).click()
            .then(function() {
                browser.sleep(5000);
            })
    },
    //Clicks on newly created person to modify
    ModifyNewPersonInfo: function() {
        element(by.xpath(repo.documents.buttons.modifyNewPersonInfo.xpath)).click()
            .then(function() {
                browser.sleep(5000);
            })
    },
    //Modifies first name
    ModifiesFirstName: function() {
        element(by.xpath(repo.documents.textfields.modifiesFirstName.xpath)).click().clear().sendKeys('Johnny')
            .then(function() {
                browser.sleep(4000);
            })
    },
    ModifiesMiddleName: function() {
        element(by.model(repo.documents.textfields.modifiesMiddleName.model)).click().clear().sendKeys('B');
    },
    ModifiesLastName: function() {
        element(by.model(repo.documents.textfields.modifiesLastName.model)).click().clear().sendKeys('Good');
    },
    ModifiesEmail: function() {
        element(by.model(repo.documents.textfields.modifiesEmail.model)).click().clear().sendKeys('johhneybgood@mailinator.com');
    },
    AddsPrimaryNumber: function() {
        element(by.model(repo.documents.textfields.addsPrimaryNumber.model)).click().clear().sendKeys('555 867 5309');
    },
    AddsOccupation: function() {
        element(by.model(repo.documents.textfields.addsOccupation.model)).click().clear().sendKeys('Software tester');
    },
    AddsResidency: function() {
        element(by.model(repo.documents.textfields.addsPrimaryNumber.model)).click().clear().sendKeys('Intern');
    },
    AddsExecution: function() {
        element(by.model(repo.documents.textfields.addsExecution.model)).click().clear().sendKeys('Yes');
    },
    ModifiesBio: function() {
        element(by.xpath(repo.documents.textfields.modifiesBioSection.xpath)).clear().sendKeys('This is where the modified information goes.').then(function() {
            browser.sleep(4000);
        })
    },
    SaveModiefiedPerson: function() {
        element(by.xpath(repo.documents.textfields.savedModifiedPerson.xpath)).click();
    },
    ModifiesStatus: function() {
        element(by.xpath(repo.documents.textfields.modifiyStatus.xpath)).click()
            .then(function() {
                element(by.xpath(repo.documents.buttons.modifiesStatus.xpath)).click();
            })
    },
    ModifiedStatus1: function() {
        element(by.xpath(repo.documents.textfields.modifiedStatus1.xpath)).click();
    },
    DeletesPerson: function() {
        element(by.xpath(repo.documents.buttons.deletesPerson.xpath)).click().then(function() {
            browser.sleep(4000);
        })
    }
}