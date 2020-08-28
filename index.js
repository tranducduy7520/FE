var fs = require('fs');
var dataString = fs.readFileSync('./data.json', {encoding: 'utf8'});
console.log(dataString);
var data = JSON.parse(dataString);
console.log(data.name);
var member = [
    {
       name: 'Duy', age: 20
    }
];
fs.writeFileSync('./data.json', JSON.stringify(member[0]));
