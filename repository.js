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
            dropdownSend: {
                id: 'Send-Button'
            }
        }
    },
    upload: {
        buttons: {
            upLoad: {
                css: '[ng-click="uploadSingleWordDoc()"]'
            },
            close: {
                xpath: "//BUTTON[@aria-label='close']"
            },
        }
    },

    // Generic Share documents.js
    edit: {
        buttons: {
            collaborates: {
                xpath: "//DIV[@class='img-circle-bg invite-icon pull-left']"
            },
            email: {
                model: 'newUser'
            },
            permission: {
                dropdown: {
                    xpath: "//STRONG[@class='ng-binding'][text()='Permission']"
                }
            },
            viewOnly: {
                xpath: "(//A[@ng-click='setPermission(item)'])[1]"
            },
            invite: {
                xpath: "//BUTTON[@aria-label='confirm']"
            },
            canEdit: {
                xpath: "(//A[@ng-click='setPermission(item)'])[2]"
            },
            allAccess: {
                xpath: "(//A[@ng-click='setPermission(item)'])[3]"
            },
            invite: {
                xpath: "//BUTTON[@aria-label='confirm']"
            },
            apply: {
                xpath: "//BUTTON[@aria-label='save']"
            }
        },
        editAssertion: {
            assertion1: {
                xpath: "//TD[@class='ng-binding'][text()='paperautotest1@outlook.com']"
            },
            assertion2: {
                xpath: "//TD[@class='ng-binding'][text()='paperautotest2@outlook.com']"
            },
            assertion3: {
                xpath: "//TD[@class='ng-binding'][text()='paperautotest3@outlook.com']"
            },
        },
        // Shared Documents.js end of section
    },
    //Outlook "Login.js"
    outlookLogin: {
        textboxes: {
            username: {
                id: 'username'
            },
            password: {
                id: 'password'
            },
        },
        buttons: {
            signIN: {
                xpath: '//span[contains(.,"sign in")]'
            },
        },
        // Login.js end of section    
    },
    //CreateNewTemplate.js
    template: {
        dropdown: {
            id: 'NewTemplate-Documents'
        },
        iframe: {
            xpath: '//iframe'
        },
        buttons: {
            action: {
                id: 'Ready-Button'
            },
            save: {
                id: 'Save-Editor'
            },
        },
        //CreateNewTEmplate.js end of section
    },
    //Document.js
    documents: {
        addSignature: {
            css: '[ng-click="addSignature()"]'
        }
        //Document.js end of section
    },
    //DocumentSignatureCaseManager.js
    documentSignature: {
        buttons: {
            newSigner: {
                id: 'newSigner'
            },
            clickToAssign: {
                css: '.sign-field'
            },
            userSignedIn: {
                xpath: "//*[@id='testdropdown']//li[@ng-repeat='contact in contacts']"
            }
        },
        iframe: {
            xpath: '//iframe[contains(@id, "ui-tinymce")]'
        },
        // DocumentSignatureCaseManager.js end of section
    },
    //Signature.js
    signSubmitSignature: {
        buttons: {
            signature: {
                xpath: "(//SPAN[@class='sign-field assigned'])[1]"
            },
            signatureField: {
                id: 'Signature'
            },
            submit: {
                xpath: "//BUTTON[@aria-label='send']"
            },
        },
        popUp: {
            email: {
                xpath: '//div[@class="toast-message" and contains(.,"You will receive an email notification once it has been accepted")]'
            },
        },
        signatureAssertion: {
            xpath: '//div/canvas'
        },
        // Signature.js end of section
    },
}
