var markdown = require('markdown').markdown;

var txtMarkdown = '*Hello World*';

console.log('HTML Text: ' + markdown.toHTML(txtMarkdown));
