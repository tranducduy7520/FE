var readlineSync = require('readline-sync');

var txtUserName = readlineSync.question('Enter User Name: ');
console.log('Hi ' + txtUserName + ' !');
