module.exports = {
    url: process.env.URL,
    mailURL: 'https://secure.pqatesting.com/owa/#path=/mail',

    credentials: {
        //"username": "autotest2@pqa.ca",
        //"password": "Pq@1997",

        "username": "paperautotest1@outlook.com",
        "password": "Paperpassword1!",

        "emailOne": "paperautotest1@outlook.com",
        "emailOnePass": "Paperpassword1!",

        "emailTwo": "paperautotest2@outlook.com",
        "eamilTwoPass": "Paperpassword1!",

        "emailThree": "paperautotest3@outlook.com",
        "emailFour": "paperautotest4@outlook.com",

    },
    credentials2: {
        "username2": "autotest1@pqa.ca",
        "password2": "AUTO12test"
    },
    credentials3: {
        "username": "autotest1",
        "password": "Pq@1997"
    },
    test_OLWEB: { //had my name
        exp_title: 'autotest1 - Outlook Web App'
    },
    test_one: {
        exp_title: 'Athennian'
    },
    test_two: {
        document_title: "A_New_Title"
    },
    signature: {
        "signedSignature": "AutoTest2",
    },
    signature2: {
        "signedSignature2": "AutuTest1",
    },
    testClickSignSubmitSignature: {
        exp_title: 'Athennian'
    },
    testClickAction: {
        exp_title: 'Athennian'
    },
    testClickSubmit: {
        exp_title: 'Athennian'
    },
    testClickDropdownSend: {
        exp_title: 'Athennian'
    },
    testCanViewOnly: {
        exp_title: 'Athennian'
    },
    testCanEdit: {
        exp_title: 'Athennian'
    },
    testAllAccessd: {
        exp_title: 'Athennian'
    },
    //added
    testSelectNewDraft: {
        exp_title: 'Athennian'
    },
    //added
    testDocumentSignatureCM: {
        exp_title: 'Athennian'
    },
    testLogin: {
        exp_title: 'Athennian'
    },
    emailNotification: {
        exp_title: '//div[@class="toast-message" and contains(.,"You will receive an email notification once it has been accepted")]'
    },

}