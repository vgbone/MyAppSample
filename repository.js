module.exports = {
    login: {
        textfields: {
            username: {
                model: "auth.username"
            },
            password: {
                model: "auth.password"
            }
        },
        buttons: {
            login: {
                id: "Login-Button"
            }
        }
    },
    logout: {
        links: {
            signoutDropdown: {
                xpath: '//a[@class="dropdown-toggle"]'
            },
            signoutOption: {
                xpath: '//i[@class="fa fa-sign-out"]'
            }
        }
    },
    documents: {
        buttons: {
            new: {
                id: "newItem"
            },
            draft: {
                id: "NewDraft-Documents"
            },
            exit_upload_popup: {
                id: 'cancel-sign'
            }
        },
        textfields: {
            title: {
                model: "product._contract_name"
            },
            text_area: {
                id: "tinymce"
            }
        }
    },
    folders: {
        buttons: {
            createNewFolder: {
                css: '[ng-click="createNewFolder()"]'
            },
            createFolder: {
                xpath: ".//*[@id='folderForm']/div/div/div/span/button"
            }
        },
        textfields: {
            folderName: {
                css: '[ng-model="folderName"]'
            }
        }
    },
    signature: {
        textfields: {
            signatureContainer: {
                xpath: "(//BODY[@id='tinymce']//SPAN[@contenteditable='false'])[2]"
            }
        },
        tab: {
            typeSignature: {
                id: "typedTab"
            }
        },
        buttons: {
            submitSignature: {
                id: 'apply-sign'
            },
            action: {
                id: 'Ready-Button'
            },
            dropdownSend: {
                id: 'Send-Button'
            }
        }
    }

}