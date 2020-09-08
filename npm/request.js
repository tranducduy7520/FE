var request = require('request');
console.time('Time this: ');
request('https://randomuser.me/api/', function (error, respone, body) {
    console.error('error: ', error);
    console.log('statusCode: ', respone && respone.statusCode);
    console.log('body: ', body);
});
console.timeEnd('Time this: ');