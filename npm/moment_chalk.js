var chalk = require('chalk');
var moment = require('moment');
var time = moment('2020-05-07 00:00');
console.log(chalk.red(time.format('DD-MM-YYYY')));
console.log(chalk.blue(time.fromNow()));