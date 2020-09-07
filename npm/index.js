var readlineSync = require('readline-sync');
var passwordGenerator = require('password-generator');
var markDown = require('markdown').markdown;


var txtUserName = readlineSync.question('Enter User Name: ');
console.log('Hi ' + txtUserName +'!');

console.log(passwordGenerator(8, true));

var markdownText = 'Hello *Coders.Tokyo*!';
console.log(markDown.toHTML(markdownText));