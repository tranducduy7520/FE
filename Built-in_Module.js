var fs = require('fs');
fs.writeFileSync('href','Content.....');    //ghi file

var text = fs.readFileSync('href',{encoding: 'utf8'});  // doc file
console.log(text);