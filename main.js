console.log("Starting node");

var http = require("http");
var fs = require("fs");

const Port = 8081;
const Firebase = require("firebase");
const md5 = require('md5-file');

//console.log('Firebase:', Firebase);

var fbRef = new Firebase('Firebase URL Here');

var fileName = 'AWM-Logo.png';

md5(fileName, (err, hash) => {
    if (err) throw err

    console.log('The MD5 sum of logo in function is: ' + hash);
});

const hash = md5 = md5.sync('AWM-logo.png');

fbRef.set({
    'file-hash': hash,
    'file-name': fileName,
    'other': 'Other stuff'
});
console.log('The MD5 sum of logo at end is: ' + hash);

fbRef.child('file-hash').on('value', function(resp){
    console.log('This is the Firebase response: ', resp.val());
});