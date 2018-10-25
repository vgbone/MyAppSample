let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    allScriptsTimeout: 99999,
    getPageTimeout: 30000,

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
        //     browserName: 'firefox',
        //     count: 1,
        //     marionnette: true,
        //     shardTestFiles: false,
        //     maxInstances: 2,
        // }
        // {
        browserName: 'chrome',
        count: 1,
        chromeOptions: {
            args: ["--no-sandbox", "--disable-dev-shm-usage"]
        },
        shardTestFiles: true,
        maxInstances: 2
    }],

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    //specs: ['Athennian-light-spec.js'],
    specs: ['people-spec.js'],
    // The address of a running selenium server.
    //seleniumAddress: 'http://199.116.235.89:4444/wd/hub/',
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub/',
    // seleniumAddress: 'http://localhost:4444/wd/hub/',
    // seleniumAddress: 'http://172.17.0.2:4444/wd/hub',
    // seleniumAddress: 'http://c5ea589c.ngrok.io/wd/hub',

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 120000,
        includeStackTrace: true,
        isVerbose: true,
        print: function() {}
    },
    baseUrl: "https://labs.athennian.com",
    seleniumSeverJar: './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.6.0.jar',

    onPrepare: function() {
        require('./lib/WaitReady');

        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayDuration: false,
                displayErrorMessages: true,
                displayFailed: true,
                displayPending: false,
                displayStacktrace: true,
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
                displayStacktrace: true,
                displaySuccessful: true,
            },
        }));
    }
};