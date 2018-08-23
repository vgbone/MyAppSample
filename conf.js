let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    allScriptsTimeout: 99999,
    getPageTimeout: 30000,
<<<<<<< HEAD

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
            browserName: 'firefox',
            count: 1,
            marionnette: true,
            shardTestFiles: false,
            maxInstances: 2,
        },
        {
            browserName: 'chrome',
            count: 1,
            chromeOptions: {
                args: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"]
            },
            shardTestFiles: true,
            maxInstances: 2
        }
    ],

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['Athennian-light-spec.js'],

    // The address of a running selenium server.
    seleniumAddress: 'http://199.116.235.89:4444/wd/hub/',
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub/',
    // seleniumAddress: 'http://localhost:4444/wd/hub/',
    // seleniumAddress: 'http://172.17.0.2:4444/wd/hub',
    // seleniumAddress: 'http://c5ea589c.ngrok.io/wd/hub',
=======
    multiCapabilities: [{
            'browserName': 'firefox',
            count: 1,
            shardTestFiles: false,
            maxInstances: 2
        },
        //     //{
        //     'browserName': 'chrome',
        //     count: 1,
        //     shardTestFiles: true,
        //     maxInstances: 2
        // }
    ],
    specs: ['Athennian-deep-spec.js'],
    // seleniumAddress: 'http://pqa-0352lt:4444/wd/hub/',
    seleniumAddress: 'http://localhost:4444/wd/hub/',
>>>>>>> pqa-july-2018

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 120000,
        includeStackTrace: true,
        isVerbose: true,
        print: function() {}
    },

    seleniumSeverJar: './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.6.0.jar',

    onPrepare: function() {
<<<<<<< HEAD
        require('./lib/WaitReady');

=======
        require('./lib/waitReady');
>>>>>>> pqa-july-2018
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayDuration: false,
                displayErrorMessages: true,
                displayFailed: true,
                displayPending: false,
                displayStacktrace: false,
                displaySuccessful: true,
            },
            colors: {
                enabled: true,
                failed: "red",
                pending: "yellow",
                successful: "green",
            },
            summary: {
                displayDuration: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayPending: true,
                displayStacktrace: false,
                displaySuccessful: true,
            },
        }));
    }
};