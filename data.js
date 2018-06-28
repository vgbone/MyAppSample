module.exports = {
    url: 'https://secure.paperlts.com/static/#/login',
    application: {
        title: 'Paper',
        waitTime: {
            default: 5000
        }
    },
    outlook: {
        url: 'https://mail.pqatesting.com/owa/#path=/mail',
        credentials: {
            username: "autotest1",
            password: "Pq@1997"
        },
        expectedResult: {
            title: 'autotest1 - Outlook Web App'
        }
    },
    credentials: {
        one: {
            username: "paperautotest1@outlook.com",
            password: "Paperpassword1!"
        },
        two: {
            username: "paperautotest2@outlook.com",
            password: "Paperpassword1!"
        },
        three: {
            username: "paperautotest3@outlook.com",
            password: "Paperpassword1!"
        },
        four: {
            username: "paperautotest4@outlook.com",
            password: "Paperpassword1!"
        },
        five: {
            username: "autotest1@pqa.ca",
            password: "AUTO12test"
        }
    },
    signature: {
        one: "AutoTest2",
        two: "AutuTest1"
    },
}