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
    },
    ///new repository based on document name
    paperlight: {
        document: {
            newdraft: {
                xpath: '(//DIV[@class="navbar-btn-container hidden-xs"])[2]'
            }

        }
    },
    paperdeep: {
        checkbox: {
            clickedcheckbox: {
                xpath: '(//DIV[@class="_md-container md-ink-ripple"])[2]'
            }
        },
        document: {
            newdraft: {
                xpath: '(//A[@ui-sref="projects.workspace.documents"])[2]'
            }
        },
        documentsettings: {
            newdraft: {
                xpath: '(//A[@ui-sref=projects.workspace.documents"])[2]'
            }
        },
        logout: {
            document: {
                xpath: '(//A[@ui-sref="projects.workspace.documents"])[2]'

            },
            navbar: {
                xpath: '//a[@class="dropdown-toggle"]'
            },
            textedlink: {
                xpath: '//i[@class="fa fa-sign-out"]'
            }
        },
        newdraft: {
            button: {
                xpath: '(//DIV[@class="navbar-btn-container hidden-xs"])[2]'
            }
        },
        email: {
            sent: {
                xpath: '(//div[@autoid="_lv_i"]//span[contains(.,"Document has been sent!")])[1]'
            },
            completed: {
                xpath: '(//div[@autoid="_lv_i"]//span[contains(.,"Document has been marked as comp")])[1]'
            }
        },
        login: {
            button: {
                xpath: '//a[contains(., "Login")]'
            }
        },
        button: {
            pdf: {
                xpath: '//table/tbody//a[1]/span[contains(@title, "Untitled")]'
            }
        }

    }

}