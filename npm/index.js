var readlineSync = require('readline-sync');
var passwordGenerator = require('password-generator');
var markdown = require('markdown').markdown;
var turndownService = require('turndown');
var turndownService = new turndownService();

var txtUserName = readlineSync.question('----------------------\n\n' + 'Enter User Name: ');
console.log('\nHi ' + txtUserName +'! ' + 'Your automatic password: ' + passwordGenerator(8, true));

var txtMarkdown = '*Hello World*';
var txtHTML = '<p><b>Hello World!<b></p>'
console.log('\nHTML Text: ' + markdown.toHTML(txtMarkdown));
console.log('\nMarkdown Text: ' + turndownService.turndown(txtHTML));
console.log('\n----------------------');