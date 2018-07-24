var data = require('../data')
var repo = require('../repository')
var chai = require('chai')
var documents = require('./documents')
var expect = chai.expect;


module.exports = {
    clickCreateNewFolder: function () {
        element(by.css(repo.folders.buttons.createNewFolder.css)).click().then(function () {
        })
    },
    typeFolderName: function () {
        element(by.css(repo.folders.textfields.folderName.css)).sendKeys(data.typeFolderName.folderName).then(function () {
        })
    },
    clickCreateButton: function () {
        element(by.xpath(repo.folders.buttons.createFolder.xpath)).click().then(function () {
        })
    }
}