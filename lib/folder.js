var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var documents = require('./documents')
var expect = chai.expect;


module.exports = {
    clickCreateNewFolder: function(){
        element(by.css('[ng-click="createNewFolder()"]')).click();
    }, 
    typeFolderName: function(){
        element(by.css('[ng-model="folderName"]')).sendKeys(data.typeFolderName.folderName);
    },

    clickCreateButton: function(){
        element(by.xpath(".//*[@id='folderForm']/div/div/div/span/button")).click();
    }
}