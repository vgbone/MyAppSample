# Athennian Automated Test Suite

Table of contents
=================
<!--ts-->
   * [Built With](#built-with)
   * [Getting Started](#getting-started)
      * [Installation](#installation)
         * [Package](#package)
         * [NodeJS](#nodejs)
   * [System Startup](#system-startup)
      * [Stand-Alone](#standalone)
         * [Command Line](#commandline)
         * [Docker Container](#docker-container)
            * [Standalone Dockerfile](#standalone-dockerfile)
      * [Zalenium](#zalenium)
         * [Zalenium Startup Command](#zalenium-startup-command)
         * [Zalenium Configuration Flags](#zalenium-configuration-flags)
         * [Dashboards](#dashboards)
   * [Tests](#tests)
      * [Specs](#specs)
         * [Spec1](#spec1)
         * [Spec2](#spec2)
      * [Test Configuration](#test-configuration)
      * [Running Tests](#running-tests)
         * [Zalenium Direct](#zalenium-direct)
         * [Grid](#grid)
         * [BitBucket Pipeline](#bitbucket-pipeline)
            * [bitbucket-pipelines.yml](#bitbucket-pipelines)
            * [gulpfile.js](#gulpfile)
   * [Results](#results)
      * [Dashboards](#dashboards)
      * [Live Preview](#live-preview)
   * [Authors](#authors)
   * [Owner](#owner)
<!--te-->

## Built With

* [NodeJS](https://nodejs.org/en/) - The backbone
* [ProtractorJS](http://www.protractortest.org/#/) - The driving framework
* [Jasmine](https://jasmine.github.io/) - The testing framework

* [Docker](http://get.docker.com) - Containerization

## Getting Started
### Installation
#### Package

In your working directory, create a file named package.json

```json
{
    "name": "athennian",
    "version": "0.0.1",
    "description": "Package for Athennian automated solution",
    "scripts": {
        "webdriver-update": "webdriver-manager update"
    },
    "dependencies": {
        "assert": "1.4.1",
        "chai": "4.1.2",
        "child_process": "^1.0.2",
        "chromedriver": "^2.34.0",
        "geckodriver": "^1.11.0",
        "jasmine": "^3.1.0",
        "jasmine-spec-reporter": "^4.2.1",
        "path": "^0.12.7",
        "protractor": "*",
        "run-sequence": "^2.2.0",
        "selenium-server": "^3.6.0",
        "selenium-webdriver": "^3.6.0",
        "twilio": "^3.11.3",
        "yargs": "^10.0.3"
    }
}
```

#### NodeJS

```Shell
cd <directory>/<of>/<project>
npm install
```

## System Startup
### Stand-Alone

This is for running the scripts outside of Zalenium/Grid

#### Command Line

The standard protractor command to run the scripts on your local machine:

```shell
protractor conf.js
```

#### Docker Container

Run in a local docker container. This requires that the root\scripts\run_e2e_tests.sh exists

```shell
docker run -it --rm --name protractor-runner -v ${pwd}:/protractor/project johnwwm/athennian conf.js
```

#### Standalone Dockerfile

```Dockerfile
FROM ubuntu:xenial
MAINTAINER Hortonworks

# Debian package configuration use the noninteractive frontend: It never interacts with the user at all, and makes the default answers be used for all questions.
# http://manpages.ubuntu.com/manpages/wily/man7/debconf.7.html
ENV DEBIAN_FRONTEND noninteractive

# Update is used to resynchronize the package index files from their sources. An update should always be performed before an upgrade.
RUN apt-get update -qqy \
    && apt-get -qqy install \
    apt-utils \
    wget \
    sudo \
    curl

# Font libraries
RUN apt-get update -qqy \
    && apt-get -qqy install \
    fonts-ipafont-gothic \
    xfonts-100dpi \
    xfonts-75dpi \
    xfonts-cyrillic \
    xfonts-scalable \
    ttf-ubuntu-font-family \
    libfreetype6 \
    libfontconfig

# Nodejs 8 with npm install
# https://github.com/nodesource/distributions#installation-instructions
RUN apt-get update -qqy \
    && apt-get -qqy install \
    software-properties-common \
    python-software-properties
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get update -qqy \
    && apt-get -qqy install \
    nodejs \
    build-essential

# Latest Google Chrome installation package
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'

# Latest Ubuntu Firefox, Google Chrome, XVFB and JRE installs
RUN apt-get update -qqy \
    && apt-get -qqy install \
    xvfb \
    firefox=45.0.2+build1-0ubuntu1 \
    google-chrome-stable \
    default-jre

RUN sudo apt-mark hold firefox

# Clean clears out the local repository of retrieved package files. Run apt-get clean from time to time to free up disk space.
RUN apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 1. Step to fixing the error for Node.js native addon build tool (node-gyp)
# https://github.com/nodejs/node-gyp/issues/454
# https://github.com/npm/npm/issues/2952
RUN rm -fr /root/tmp
# Jasmine and protractor global install
# 2. Step to fixing the error for Node.js native addon build tool (node-gyp)
# https://github.com/nodejs/node-gyp/issues/454
RUN npm install --unsafe-perm --save-exact -g protractor@5.0.0 \
    # Get the latest Google Chrome driver
    && npm update \
    # Get the latest WebDriver Manager
    && webdriver-manager update

# Set the path to the global npm install directory. This is vital for Jasmine Reporters
# http://stackoverflow.com/questions/31534698/cannot-find-module-jasmine-reporters
# https://docs.npmjs.com/getting-started/fixing-npm-permissions
ENV NODE_PATH /usr/lib/node_modules
# Global reporters for protractor
RUN npm install --unsafe-perm -g \
    jasmine-reporters \
    jasmine-spec-reporter \
    protractor-jasmine2-html-reporter \
    jasmine-allure-reporter \
    protractor-console

# Set the working directory
WORKDIR /protractor/
# Copy the run sript/s from local folder to the container's related folder
COPY /scripts/run-e2e-tests.sh /entrypoint.sh
# Set the HOME environment variable for the test project
ENV HOME=/protractor/project
# Set the file access permissions (read, write and access) recursively for the new folders
RUN chmod -Rf 777 .
# Container entry point
ENTRYPOINT ["/entrypoint.sh"]
```

### Zalenium

[Docker Hub](https://hub.docker.com/r/dosel/zalenium/)

[GitHub](https://github.com/zalando/zalenium)

[Documentation](https://opensource.zalando.com/zalenium/)

#### Zalenium Startup Command

```shell
docker run --rm -ti --name zalenium -p 4444:4444 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/videos:/home/seluser/videos --privileged johnwwm/zalenium start --timeZone "US/Mountain" --desiredContainers 4
```

#### Zalenium Configuration Flags

| Name        | Default           | Description  |
| ----------------------------- |:-------------:| ----------------------------------------------------------------------------------:|
| --desiredContainers	        | 2	            | Number of nodes/containers created on startup.                                     |
| --maxDockerSeleniumContainers | 10	        | Maximum number of docker-selenium containers running at the same time.             |
| --sauceLabsEnabled	        | false	        | Start Sauce Labs node or not.                                                      |
| --browserStackEnabled	        | false	        | Start BrowserStack node or not.                                                    |
| --testingbotEnabled	        | false	        | Start TestingBot node or not.                                                      |
| --videoRecordingEnabled	    | true	        | Sets if video is recorded in every test.                                           |
| --screenWidth	| 1920	| Sets the screen width. |
| --screenHeight	1080	Sets the screen height. |
| --timeZone	| "Europe/Berlin"	| Sets the time zone in the containers. |
| --debugEnabled	| false	| Enables LogLevel. |
| --logJson	| false	| Output logs in json format |
| --logbackConfigFilePath	| logback.xml	| Path to a custom logback config file. |
| --seleniumImageName	| "elgalu/selenium"	| Enables overriding of the Docker selenium image to use. |
| --gridUser	| -	| Allows to specify a user to enable basic auth protection. --gridPassword must also be provided. |
| --gridPassword	| -	| Allows to specify a password to enable basic auth protection. --gridUser must also be provided. |
| --maxTestSessions	| 1	| Maximum amount of tests executed per container. |
| --keepOnlyFailedTests	| false	| Keeps only failed tests on the dashboard (you need to send a cookie with the test result). |

#### Dashboards
[Grid](http://199.116.235.89:4444/grid/console)
[VNC](http://199.116.235.89:4444/grid/admin/live)
[Playback](http://199.116.235.89:4444/dashboard)

## Tests
### Specs
#### Spec1
#### Spec2
### Test Configuration

```javascript
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    allScriptsTimeout: 99999,
    getPageTimeout: 30000,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        count: 1,
        chromeOptions: {
            args: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"]
        },
        shardTestFiles: true,
        maxInstances: 2
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['Athennian-light-spec.js'],

    // The address of a running selenium server.
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
```

### Running Tests
#### Zalenium Direct

In conf.js, update seleniumAddress:

```javascript
seleniumAddress: 'http://<Zelenium_Server>/wd/hub'
```

From the command line in the project working directory:

```shell
protractor conf.js
```

#### Grid

```
http://localhost:4444/grid/console#

OR

http://<Zalenium_Host>:4444/grid/console#
```

#### BitBucket Pipeline

##### bitbucket-pipelines

```yml
# This is a sample build configuration for JavaScript.
# Check our guides at https://confluence.atlassian.com/x/14UWN for more examples.
# Only use spaces to indent your .yml configuration.
# -----
# You can specify a custom docker image from Docker Hub as your build environment.
image: 
  name: paperapp/selenium-testing
  username: paperapp
  password: $DOCKER_PW
  email: accounts@get-paper.com

pipelines:
  default:
    - step:
        name: Default Pipeline
        caches:
          - node
        script: 
          - declare -x TWILIO_SID=$TWILIO_SID;
          - declare -x TWILIO_TOKEN=$TWILIO_TOKEN;
          - declare -x TWILIO_NUMBER=$TWILIO_NUMBER;
          - declare -x OPS_CONTACT=$OPS_CONTACT;
          - declare -x OPS_CONTACT2=$OPS_CONTACT2;
          - npm install
          - webdriver-manager update
          - webdriver-manager start & sleep 5; gulp
  
  pqa-july-2018:
    - step:
        name: Default Pipeline
        caches:
          - node
        script: 
          - declare -x TWILIO_SID=$TWILIO_SID;
          - declare -x TWILIO_TOKEN=$TWILIO_TOKEN;
          - declare -x TWILIO_NUMBER=$TWILIO_NUMBER;
          - declare -x OPS_CONTACT=$OPS_CONTACT;
          - declare -x OPS_CONTACT2=$OPS_CONTACT2;
          - npm install
          - webdriver-manager update
          - webdriver-manager start & sleep 5; gulp

  custom:
    uptime check:
      - step:
          name: Master Pipeline
          caches:
            - node
          script: 
            - declare -x TWILIO_SID=$TWILIO_SID;
            - declare -x TWILIO_TOKEN=$TWILIO_TOKEN;
            - declare -x TWILIO_NUMBER=$TWILIO_NUMBER;
            - declare -x OPS_CONTACT=$OPS_CONTACT;
            - declare -x OPS_CONTACT2=$OPS_CONTACT2;
            - npm install
            - webdriver-manager update
            - webdriver-manager start & sleep 5; gulp
```

##### gulpfile

```JavaScript
// Copyright (c) 2017 - Paper Interactive Inc. 
// Any unauthorized distribution or transfer 
// of this work is strictly prohibited. 
// All Rights Reserved. 
// 

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var runSequence = require('run-sequence'); // Run tasks sequentially 
var protractor = require("gulp-protractor").protractor;
var argv = require('yargs').argv;
var child_process = require('child_process');
var path = require('path');
var twilio = require('twilio');

var reporterOptions = {

    'mocha-junit-reporter': {
        mochaFile: './test-results.xml',
        stdout: "/tmp/mocha-multi.Progress.out",
        options: {
            verbose: true
        }
    },
    spec: "-"
};

// define the default task 
gulp.task('default', ['fet']);

gulp.task('stop', function() {
    process.env.TEST_IN_PROGRESS = "false";
    process.exit();
});

////////////////////////////////////////////////////////////////////////////////////////////////////// 
//  FRONT END TESTING 
////////////////////////////////////////////////////////////////////////////////////////////////////// 

gulp.task('fet', function() {
    runSequence('setFrontTestFlags', 'protractor-install', 'frontTests', 'stop');
})

//Sets testing Suite flags 
gulp.task('setFrontTestFlags', function() {
    //setting env vars to false to prevent test contamination 
    process.env.ALL_TESTS = "false";
    process.env.LOGIN_TEST = "false";
    process.env.EDITOR_TESTS = "false";
    process.env.TEMPLATE_TESTS = "false";
    process.env.DOCUMENT_TESTS = "false";

    switch (argv.test) {
        case 'all':
            process.env.ALL_TESTS = "true";
            break;
        case 'login':
            process.env.LOGIN_TEST = "true";
            break;
        case 'editor':
            process.env.EDITOR_TESTS = "true";
            break;
        case 'template':
            process.env.TEMPLATE_TESTS = "true";
            break;
        case 'document':
            process.env.DOCUMENT_TESTS = "true";
            break;
        default:
            process.env.ALL_TESTS = "true";
    }
})

// Runs all API tests 
gulp.task('frontTests', function() {
    return gulp.src(['./frontend.test.js'])
        .pipe(protractor({
            configFile: "conf.js",
            // args: ['--baseUrl', 'http://127.0.0.1:4444']
            // reporter: 'mocha-multi', 
            // reporterOptions: reporterOptions 
        }))
        // .on('error', gutil.log); 


    // .on('error', process.exit.bind(process, 1)); 


    // return gulp.src(['conf.js'], { 
    //         read: false 
    //     }) 
    //     .pipe(mocha({ 
    //         reporter: 'mocha-multi', 
    //         reporterOptions: reporterOptions 
    //     })) 
    //     // .on('error', gutil.log); 
    .on('error', swallowError);
})

gulp.task('protractor-install', function(done) {
    child_process.spawn(getProtractorBinary('webdriver-manager'), ['update'], {
        stdio: 'inherit'
    }).once('close', done);
});

function getProtractorBinary(binaryName) {
    var winExt = /^win/.test(process.platform) ? '.cmd' : '';
    var pkgPath = require.resolve('protractor');
    var protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'));
    return path.join(protractorDir, '/' + binaryName + winExt);
}

////////////////////////////////////////////////////////////////////////////////////////////////////// 
//  END FRONT END TESTING 
////////////////////////////////////////////////////////////////////////////////////////////////////// 


//////////////////////////////////////////////////////////////////////////////////////////////////////
//  SMS NOTIFICATION ERROR HANDLING
//////////////////////////////////////////////////////////////////////////////////////////////////////
//This will prevent hanging builds and allow for faster failure/feedback 
function swallowError(error) {
    // If you want details of the error in the console 
    console.log("THE ERROR: ", error.toString())

    var accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
    var authToken = process.env.TWILIO_TOKEN; // Your Auth Token from www.twilio.com/console
    var twilioNumber = process.env.TWILIO_NUMBER;
    var opsContact = process.env.OPS_CONTACT;
    var opsContact2 = process.env.OPS_CONTACT2;
    var client = new twilio(accountSid, authToken);

    client.messages.create({
            body: "It's Paige Turner - something is wrong with the system: " + error.toString(),
            to: opsContact, // Text this number
            from: twilioNumber // From a valid Twilio number
        })
        .then(message => {
            console.log(message.sid)
            client.messages.create({
                    body: "It's Paige Turner - something is wrong with the system: " + error.toString(),
                    to: opsContact2, // Text this number
                    from: twilioNumber // From a valid Twilio number
                })
                .then(message => {
                    console.log(message.sid)
                    process.exit.bind(process, 1)
                });
        });
}
```

##### Compose

```yml
version: '3.2'

services:
  runner:
    image: johnwwm/protractor-standalone
    volumes:
      - type: bind
        source: ./
        target: /protractor/project
```

#### Command

```shell
docker-compose run runner conf.js
```

##### Useful Args

```shell
--seleniumAddress=http://<server_location>/wd/hub
```

**Example** 

```shell
docker-compose run runner conf.js --seleniumAddress=http://127.0.0.1/wd/hub
```

## Results
### Dashboards
#### Playback

```
http://localhost:4444/dashboard/

OR

http://<Zalenium_Host>:4444/dashboard/
```

#### Live Preview

```
http://localhost:4444/grid/admin/live

OR

http://<Zalenium_Host>:4444/grid/admin/live
```

## Authors

* **John McLaughlin** - *Initial work* - [johnwwm](https://github.com/johnwwm)

## Owner

* **Athennian** - [athennian](https://bitbucket.org/get-paper/selenium)