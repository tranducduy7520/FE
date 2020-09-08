var moment = require('moment');
var time = moment('2020-05-07 00:00');
console.log(time.format('DD-MM-YYYY'));
console.log(time.fromNow());