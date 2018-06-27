exports.config = {
    framework: 'mocha',
    //chromeDriver: './node_module/.bin/chromedriver',
    // capabilities: {
    //     browserName: 'chrome',
    //     chromeOptions: {
    //         args: ["--start-maximized", "--disable-gpu"]
    //     },
    //     shardTestFiles: true,
    //     maxInstances: 4
    // },
    'autoStartStopServer': true,
    
    capabilities: {
        'browserName': 'internet explorer',
        'platform': 'ANY',
        'version': '11',
        'ignoreProtectedModeSettings': true
    },
    restartBrowserBetweenTests: false,
    specs: ['paper-deep-spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub/',
    mochaOpts: {
        reporter: 'spec',
        timeout: 30000
    },
    seleniumSeverJar: './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.6.0.jar',
    onPrepare: function() {
        require('./lib/waitReady')
    }
};