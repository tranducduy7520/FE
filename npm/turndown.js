var turndownService = require('turndown');
var turndownService = new turndownService();

var txtHTML = '<p><b>Hello World!<b></p>'

console.log('Markdown Text: ' + turndownService.turndown(txtHTML));