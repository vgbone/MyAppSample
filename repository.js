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
            minutebookIcon: {
                xpath: "//*[@uib-tooltip='Minute Book']//i"
            },
            peopleButtonSidebar: {
                xpath: '//span[contains(.,"People")]'
            },
            newPeopleButton: {
                xpath: '//*[@id="Main-MB"]/div/div[2]/div/div[1]/div/div/button'
            },
            dropdownButton: {
                xpath: '/html/body/div[1]/div/div/div[2]/h4/div/div[2]'
            },
            confirm: {
                xpath: '/html/body/div[1]/div/div/div[2]/h4/div/div[2]/ul/li[2]/a/span'
            },
            create: {
                xpath: '//*[@id="block"]/div[2]/button[1]/span'
            },
            cancel: {
                xpath: '//*[@id="block"]/div[2]/button[2]/span'
            },
            import: {
                xpath: '//*[@id="block"]/div[2]/button[3]/span'
            },
            importPerson: {
                xpath: '//*[@id="folderTreeView"]/div[2]/div/div[2]/a/div/div[1]/div/div[1]/span/strong'
            },
            modifyNewPersonInfo: {
                xpath: '//*[@id="Document-List"]/tbody/tr[3]/td[2]/strong'
            },
            deletesPerson: {
                xpath: '//*[@id="Document-Filters"]/div/div/div/div[2]/div[2]/ul/li[4]/a/span'
            },
            modifiesStatus: {
                xpath: '//*[@id="profileForm"]/div/div/div/div[2]/div[1]/div/div/ul/li[3]/a'
            },
            addresses: {
                xpath: '//*[@id="mb-side-menu"]/li[2]/a/span'
            },
            opensAddressSelection: {
                xpath: '//*[@id="Document-List"]/tbody/tr/td[2]'
            },
            attention: {
                xpath: '//*[@id="wrapper"]/form/div/input[2]'
            },
            primaryNumber: {
                xpath: '//*[@id="wrapper"]/form/div/input[8]'
            },
            emailTextarea: {
                xpath: '//*[@id="wrapper"]/form/div/input[9]'
            },
            notesArea: {
                xpath: '//*[@id="wrapper"]/form/div/div[13]/textarea'
            },
            adminstration: {
                xpath: '//span[contains(., "Administration ")]'
            },
            plusSignAdmin: {
                xpath: '//*[@id="cancel-sign"]/i'
            },
            selectMemberDD: {
                xpath: '//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[1]/div/button'
            },
            selectMember: {
                xpath: '//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[1]/div/ul/li[4]/a'
            },
            officeDropdown: {
                xpath: '//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[2]/div/button'
            },
            selectsOffice: {
                xpath: '//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[2]/div/ul/li[4]/a'
            },
            roleDropdown: {
                xpath: '//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[3]/div/button'
            },
            selectsRole: {
                xpath: '//*[@id="profileForm"]/div/div/div/div[4]/div[1]/div/div[3]/div/ul/li[2]/a'
            },
            selectsHistory: {
                xpath: '//*[@id="mb-side-menu"]/li[5]/a/span'
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
            },
            //added
            lastName: {
                xpath: "//*[@id='personForm']/div/div[1]/p[1]/input"
            },
            modifiesLastName: {
                model: 'person._profile.lastName'
            },
            firstName: {
                xpath: "//*[@id='personForm']/div/div[1]/input[1]"
            },
            modifiesFirstName: {
                xpath: '//*[@id="input_5"]'
            },
            modifiesMiddleName: {
                model: 'person._profile.middleName'
            },
            email: {
                xpath: "//*[@id='personForm']/div/div[1]/p[7]/input"
            },
            modifiesEmail: {
                model: 'person._profile.emails.primary'
            },
            bioSection: {
                model: 'person._ext.bio'
            },
            modifiesBioSection: {
                xpath: "//textarea[@ng-model='person._profile.bio']"
            },
            street: {
                xpath: '//*[@id="personForm"]/div/div[2]/input[1]'
            },
            city: {
                xpath: '//*[@id="personForm"]/div/div[2]/input[2]'
            },
            province: {
                xpath: '//*[@id="personForm"]/div/div[2]/input[3]'
            },
            country: {
                xpath: '//*[@id="personForm"]/div/div[2]/input[4]'
            },
            postalCode: {
                xpath: '//*[@id="personForm"]/div/div[2]/input[5]'
            },
            addsPrimaryNumber: {
                model: 'person._profile.contact_numbers.primary'
            },
            addsOccupation: {
                model: 'person._profile.occupation'
            },
            addsResidency: {
                model: 'person._profile.residency'
            },
            addsExecution: {
                model: 'person._profile.execution'
            },
            savedModifiedPerson: {
                xpath: '//*[@id="Documents-Main"]/div/div/div/div/div/div/div/div/div/button'
            },
            modifiyStatus: {
                xpath: '//*[@id="profileForm"]/div/div/div/div[2]/div[1]/div/div/button'
            },
            modifiedStatus1: {
                xpath: '//*[@id="menu1"]/span'
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
}