module.exports = {
    url: 'https://secure.athennian.com/static/#/login',
    mailURL: 'https://secure.pqatesting.com/owa/#path=/mail',
    title: 'Athennian',
    credentials: {
        "username": "paperautotest1@outlook.com",
        "password": "Paperpassword1!",

        "emailOne": "paperautotest1@outlook.com",
        "emailOnePass": "Paperpassword1!",

        "emailTwo": "paperautotest2@outlook.com",
        "emailTwoPass": "Paperpassword1!",

        "emailThree": "paperautotest3@outlook.com",
        "emailTwoPass": "Paperpassword1!",

        "emailFour": "paperautotest4@outlook.com",
        "emailTwoPass": "Paperpassword1!",
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
    signature3: {
        "signedSignature3": "hdhdhd",
    },
    emailNotification: {
        exp_title: '//div[@class="toast-message" and contains(.,"You will receive an email notification once it has been accepted")]'
    },
    templateTitle: {
        title: 'Template-Title'
    },
    templateBody: {
        input: 'Template test'
    }
}