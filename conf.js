exports.config = {
    framework: 'mocha',
    chromeDriver: './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.40',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"]
        },
        shardTestFiles: true,
        maxInstances: 4
    },
    'autoStartStopServer': true,

    // capabilities: {
    //     'browserName': 'internet explorer',
    //     'platform': 'ANY',
    //     'version': '11',
    //     'ignoreProtectedModeSettings': true
    // },
    restartBrowserBetweenTests: false,
    specs: ['spec.js'],
    mochaOpts: {
        reporter: 'spec',
        timeout: 30000
    },
    directConnect: true
};