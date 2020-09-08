var fs = require('fs');
var path = require('path');

//synchronous
var txtIntro = fs.readFileSync('./intro.txt', {encoding: 'utf8'});
console.log(txtIntro);
fs.writeFileSync('./outro.txt', "Hi World!");

console.log(path.extname('test.doc'));

//asynchronous
console.log('Start');
var text = fs.readFile('./intro.txt', {encoding: 'utf8'}, function (err, data) {
    console.log(data);
})
console.log('End');
