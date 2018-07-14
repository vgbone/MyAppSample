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
 
gulp.task('fet', function(){ 
    runSequence('setFrontTestFlags', 'protractor-install', 'frontTests', 'stop'); 
}) 
 
//Sets testing Suite flags 
gulp.task('setFrontTestFlags', function () { 
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
gulp.task('frontTests', function () { 
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

gulp.task('protractor-install', function(done){ 
    child_process.spawn(getProtractorBinary('webdriver-manager'), ['update'], { 
        stdio: 'inherit' 
    }).once('close', done); 
}); 
 
function getProtractorBinary(binaryName){ 
    var winExt = /^win/.test(process.platform)? '.cmd' : ''; 
    var pkgPath = require.resolve('protractor'); 
    var protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin')); 
    return path.join(protractorDir, '/'+binaryName+winExt); 
} 
 
////////////////////////////////////////////////////////////////////////////////////////////////////// 
//  END FRONT END TESTING 
////////////////////////////////////////////////////////////////////////////////////////////////////// 
 

//////////////////////////////////////////////////////////////////////////////////////////////////////
//  SMS NOTIFICATION ERROR HANDLING
//////////////////////////////////////////////////////////////////////////////////////////////////////
//This will prevent hanging builds and allow for faster failure/feedback 
function swallowError (error) { 
    // If you want details of the error in the console 
    console.log("THE ERROR: ", error.toString()) 

    var accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
    var authToken = process.env.TWILIO_TOKEN;   // Your Auth Token from www.twilio.com/console
    var twilioNumber = process.env.TWILIO_NUMBER;
    var opsContact = process.env.OPS_CONTACT;
    var opsContact2 = process.env.OPS_CONTACT2;
    var client = new twilio(accountSid, authToken);

    client.messages.create({
        body: "It's Paige Turner - something is wrong with the system: " + error.toString(),
        to: opsContact,  // Text this number
        from: twilioNumber // From a valid Twilio number
    })
    .then(message => {
        console.log(message.sid)
        client.messages.create({
            body: "It's Paige Turner - something is wrong with the system: " + error.toString(),
            to: opsContact2,  // Text this number
            from: twilioNumber // From a valid Twilio number
        })
        .then(message => {
            console.log(message.sid)
            process.exit.bind(process, 1)
        });
    });
}