# Project Title

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
# Athennian Automated Test Suite

Table of contents
=================

<!--ts-->
   * [Getting Started](#getting-started)
      * [Prerequisites](#prerequisites)
      * [package.json](#package)
      * [Installation](#installation)
      * [Configuration](#configuration)
   * [Tests](#tests)
      * [Draft Spec](#draft-spec)
      * [Template Spec](#template-spec)
   * [Running the tests](#running-the-tests)
      * [webdriver-manager update](#webdriver-manager-update)
      * [Standalone](#standalone)
         * [webdriver-manager start](#webdriver-manager-start)
         * [Chrome](#chrome)
            * [Configuration](#chrome#configuration)
            * [Run](#chrome#run)
         * [Firefox](#firefox)
            * [Configuration](#firefox#configuration)
            * [Run](#firefox#run)
      * [Zalenium](#zalenium)
         * [Launch](#launch)
         * [Dashboards](#dashboards)
            * [Grid](#grid)
            * [Live Preview](#live-preview)
            * [Playback](#playback)
         * [Run](#zalenium#run)
   * [Docker](#docker)
      * [Individual Container](#individual-container)
         * [Dockerfile](#dockerfile)
         * [docker-compose](#docker-compose)
         * [CLI](#cli)
      * [Zalenium Container](#zalenium-container)
         * [Dockerfile](#dockerfile)
         * [docker-compose](#docker-compose)
         * [CLI](#cli)
   * [BitBucket Pipeline](#bitbucket-pipeline)
   * [Built With](#built-with)
   * [Authors](#authors)
<!--te-->

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

[Install NodeJS](https://nodejs.org/en/)

#### package

Create a file called package.json with the following contents:

```
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

Run this command to install dependant packages in the folder with package.json:

```
npm install
```

### Installation

A step by step series of examples that tell you how to get a development env running

Say what the step will be:

```
cd <directory>/<of>/<project>
npm install
```

### Configuration

```
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    allScriptsTimeout: 99999,
    getPageTimeout: 30000,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        count: 1,
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
## Tests

### Draft-Spec

### Template-Spec

## Running the tests

Explain how to run the automated tests for this system

### webdriver-manager update

To get the latest chromedriver and gecko driver, run the following command:

```
webdriver-manager update
```

### Standalone

#### webdriver-manager start

webdriver-manager needs to be running for tests to run:

```
webdriver-manager start
```

#### Chrome

Using the above configuration, the following command will run against the Chrome browser:

```
protractor conf.js
```

##### Configuration

In conf.js, update the capabilities to:

```
    capabilities: {
        browserName: 'chrome',
        count: 1,
        shardTestFiles: true,
        maxInstances: 2
    },
```

##### Run:

```
protractor conf.js
```

#### Firefox

With Firefox, I have found that the install directory has to be included in the machines PATH variable:

```
PATH=C:\Program Files (x86)\Mozilla Firefox
```

##### Configuration

In conf.js, update the capabilities to:

```
    capabilities: {
        browserName: 'firefox',
        count: 1,
        shardTestFiles: true,
        maxInstances: 2
    },
```

##### Run:

```
protractor conf.js
```

### Zalenium

Explain what these tests test and why

#### Launch

```
docker run --rm -ti --name zalenium -p 4444:4444 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/videos:/home/seluser/videos --privileged dosel/zalenium start --timeZone "US/Mountain" --desiredContainers 4
```

#### Dashboards

##### Grid

```
http://localhost:4444/grid/console#

OR

http://<Zalenium_Host>:4444/grid/console#
```

##### Live Preview

```
http://localhost:4444/grid/admin/live

OR

http://<Zalenium_Host>:4444/grid/admin/live
```

##### Playback

```
http://localhost:4444/dashboard/

OR

http://<Zalenium_Host>:4444/dashboard/
```

#### Run

```

```

## Docker

### Individual Container

#### Dockerfile

```
Give an example
```

#### docker-compose

```
Give an example
```

#### CLI

```
docker run -it --rm --name protractor-runner -v C:/Users/sysadmin/Documents/GitHub/paper/athenian/final-docker-solution:/protractor/project johnwwm/athennian e2e.conf.js
```

### Zalenium Containers

#### Dockerfile

```
Give an example
```

#### docker-compose

```
Give 
```

#### CLI

```

```

## BitBucket Pipeline

Add additional notes about how to deploy this on a live system

## Built With

* [NodeJS](https://nodejs.org/en/) - The backbone
* [ProtractorJS](http://www.protractortest.org/#/) - The driving framework
* [Jasmine](https://jasmine.github.io/) - The testing framework

* [Docker](http://get.docker.com) - Containerization


## Authors

* **John McLaughlin** - *Initial work* - [johnwwm](https://github.com/johnwwm)