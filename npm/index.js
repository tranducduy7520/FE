var readlineSync = require('readline-sync');
var username = readlineSync.question('Username: ');
var password = readlineSync.question('Password: ',{
    hideEchoBack: true
});
console.log('Hi ' + username + '!\n' + 'The password \''+ 
password + '\' is old. You need to change it !!!');