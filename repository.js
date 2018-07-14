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

     //2. document settings
     documents: {
        buttons: {
            new:{
                id: "newItem"
            },
            draft:{
                id: "NewDraft-Documents"
            },
            exit_upload_popup: {
                id: 'cancel-sign'
            }
        },
        textfields:{
            title:{
                model: "product._contract_name"
            },
            text_area:{
                id: "tinymce"
            }
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
            }
        }
    }

    } 
}  
