var fs = require('fs');
var path = require('path');

var txtIntro = fs.readFileSync('./async/intro.txt', {encoding: 'utf8'});
console.log(txtIntro);

fs.writeFileSync('./async/outro.txt', "Hi World!");

console.log(path.extname('test.doc'));