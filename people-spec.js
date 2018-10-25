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
            element(by.xpath('//*[@id="mb-side-menu"]/li[2]/a/span')).click();
        })
        it('Clicks on an address and opens it', function() {
            element(by.xpath('//*[@id="Document-List"]/tbody/tr/td[2]')).click();
        })
        it('Clicks on Attention', function() {
            element(by.xpath('//*[@id="wrapper"]/form/div/input[2]')).click().clear().sendKeys('Do I have you attention!!');
        })
        it('Clicks on primary number', function() {
            element(by.xpath('//*[@id="wrapper"]/form/div/input[8]')).click().clear().sendKeys('5655 867 5309');
        })
        it('Clicks on email text area', function() {
            element(by.xpath('//*[@id="wrapper"]/form/div/input[9]')).click().clear().sendKeys('mejohn@gmail.com');
        })
        it('Clicks on notes section and inserts text', function() {
            element(by.xpath('//*[@id="wrapper"]/form/div/div[13]/textarea')).clear().sendKeys('This is where you put the notes for this section');
        })
        it('Clicks on save button', function() {
            browser.sleep(5000).then(function() {
                element(by.xpath('//span[contains(.,"Save")]')).click();
            })
        })
        it('Clicks on Administration in secondary sidebar', function() {
            element(by.xpath('//span[contains(., "Administration ")]')).click();
        })
        it('Clicks on the "+" button', function() {
            element(by.xpath('//*[@id="cancel-sign"]/i')).click();
        })
        it('Clicks on select member dropdown', function() {
            element(by.xpath('//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[1]/div/button')).click();
        })
        it('Selects a memeber', function() {
            element(by.xpath('//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[1]/div/ul/li[4]/a')).click();
        })
        it('Clicks on select office dropdown', function() {
            element(by.xpath('//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[2]/div/button')).click();
        })
        it('Selects an office', function() {
            element(by.xpath('//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[2]/div/ul/li[4]/a')).click();
        })
        it('Clicks on select role dropdown', function() {
            element(by.xpath('//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[3]/div/button')).click();
        })
        it('Selects a role', function() {
            element(by.xpath('//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[3]/div/ul/li[2]/a')).click();
        })
        it('Clicks on History in secondary sidebar', function() {
            element(by.xpath('//*[@id="mb-side-menu"]/li[5]/a/span')).click();
        })
        it('Clicks on "+ new" button', function() {
            element(by.xpath('//*[@id="history-main"]/div[1]/div/div[1]/div/div/button/span')).click;
        })

    })

});