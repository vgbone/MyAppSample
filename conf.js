let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    allScriptsTimeout: 99999,
    getPageTimeout: 30000,
    multiCapabilities: [{
            'browserName': 'firefox',
            count: 1,
            shardTestFiles: false,
            maxInstances: 2
        },
        // {
        //     'browserName': 'chrome',
        //     count: 1,
        //     shardTestFiles: true,
        //     maxInstances: 2
        // }
    ],
    specs: ['Athennian-light-spec.js'],
    // seleniumAddress: 'http://pqa-0352lt:4444/wd/hub/',
    seleniumAddress: 'http://localhost:4444/wd/hub/',
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