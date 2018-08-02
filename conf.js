let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    allScriptsTimeout: 99999,
    getPageTimeout: 30000,

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [
        // {
        //     browserName: 'firefox',
        //     count: 1,
        //     marionnette: true,
        //     shardTestFiles: false,
        //     maxInstances: 2,
        // },
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
    seleniumAddress: 'https://mensa.serveo.net/wd/hub/',
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub/',
    // seleniumAddress: 'http://localhost:4444/wd/hub/',
    // seleniumAddress: 'http://172.17.0.2:4444/wd/hub',
    // seleniumAddress: 'http://c5ea589c.ngrok.io/wd/hub',

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000,
        includeStackTrace: true,
        isVerbose: true,
        print: function() {}
    },

    seleniumSeverJar: './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.6.0.jar',

    onPrepare: function() {
        require('./lib/waitReady');

        browser.manage().window().maximize();

        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
    }
};