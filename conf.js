exports.config = {
    framework: 'mocha',
    //directConnect: true,
    // capabilities: {
    //     browserName: 'firefox',
    //     //marionette: false,
    //     // browserName: 'chrome',
    //     // chromeOptions: {
    //     //     args: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"]
    //     // },
    //     // shardTestFiles: true,
    //     // maxInstances: 4
    // },
    multiCapabilities: [{
        'browserName': 'firefox',
        count: 1,
        shardTestFiles: false,
        maxInstances: 2
    },
    {
        'browserName': 'chrome',
        count: 1,
        shardTestFiles: true,
        maxInstances: 2
    }],
    specs: ['Athennian-deep-spec.js'],
    seleniumAddress: 'http://pqa-0352lt:4444/wd/hub/',
    mochaOpts: {
        reporter: 'spec',
        timeout: 30000
    },
    seleniumSeverJar: './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.6.0.jar',
    onPrepare: function () {
        require('./lib/waitReady')
    }
};