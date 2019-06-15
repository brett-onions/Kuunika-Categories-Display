let request = require('request');
let fs      = require('fs');
let path    = require('path');


function createTestCaseFile()
{
    request.get('http://142.93.203.254:4200/test-case-1')
    .on('error', (err) =>{
        console.log(err);
    }).pipe(
        fs.createWriteStream(path.join(__dirname,'/jsondata/test-case-1.json'))
        
    );
    console.log('Test case 1 created');

    request.get('http://142.93.203.254:4200/test-case-2')
    .on('error', (err) =>{
        console.log(err);
    }).pipe(
        fs.createWriteStream(path.join(__dirname,'/jsondata/test-case-2.json'))
    );
    console.log('Test case 2 created');
}
createTestCaseFile();
module.exports = {
    createTestCaseFile
}