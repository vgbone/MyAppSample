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
        dropDown: {
            xpath: '//a[@class="dropdown-toggle"]'
        },
        buttons: {
            signOut: {
                xpath: '//i[@class="fa fa-sign-out"]'
            }
        }
    },
    mailLogin: {
        textfields: {
            username: {
                id: "username"
            },
            password: {
                id: "password"
            }
        },
        buttons: {
            login: {
                xpath: "//span[contains(.,'sign in')]"
            }
        }
    },
    newDraft: {
        buttons: {
            blankdraft: {
                xpath: "//a[@title='New draft']/h4[contains(.,'Blank draft')]"
            }
        }
    },
    //2. document settings
    documents: {
        buttons: {
            new: {
                id: "newItem"
            },
            draft: {
                id: "NewDraft-Documents"
            },
            //added
            template: {
                id: 'NewTemplate-Documents'
            },
            exit_upload_popup: {
                id: 'cancel-sign'
            },
            //added
            upload: {
                css: '[ng-click="uploadSingleWordDoc()"]'
            },
            //added
            close: {
                xpath: '//BUTTON[@aria-label="close"]'
            },
            addSignature: {
                css: '[ng-click="addSignature()"]'
            },
            //added
            signatureContainer: {
                xpath: "(//SPAN[@class='sign-field assigned'])[1]"
            },
            canvas: {
                xpath: '//div/canvas'
            },
            elementsIcon: {
                xpath: '//span[contains(.,"Elements")]'
            },
            fieldButton: {
                className: 'side-bar-heading'
            },
            newFieldButton: {
                css: '[ng-click="insertVariableField()"]'
            },
            variable1Button: {
                css: "input[placeholder='Enter value']"
            },
        },
        textfields: {
            title: {
                model: "product._contract_name"
            },
            text_area: {
                id: "tinymce"
            },
            //added
            typedTab: {
                id: 'typedTab'
            },
            //added
            signature: {
                id: 'Signature'
            },
            //added
            applySign: {
                id: 'apply-sign'
            }
        },
        //added
        iframe: {
            xpath: '//iframe[@id="ui-tinymce-1_ifr"]'
        },
        //4. Signature Required
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
                },
                Submit: {
                    xpath: "//BUTTON[@aria-label='send']"
                },
                assign: {
                    css: '.sign-field'
                },
                signedIn: {
                    xpath: "//*[@id='testdropdown']//li[@ng-repeat='contact in contacts']"
                }
            }
        }
    },
    // Template info section
    templateInfo: {
        buttons: {
            blankTemplate: {
                xpath: "//a[@title='New template']/h4[contains(., 'Blank template')]"
            },
        },
        dropDown: {
            action: {
                xpath: '//button[contains(.,"Action")]'
            },
            save: {
                id: 'Save-Editor'
            },
        },
        textfields: {
            clear: {
                id: 'input_title'
            },
            input: {
                xpath: '//*[@id="tinymce"]'
            },
        }
    },
}