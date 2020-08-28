var readlineSync = require("readline-sync");
var fs = require('fs');
var contacts = [];

function loadData() {
  var first = fs.readFileSync('./data.json', { encoding: 'utf8' });
  first = JSON.parse(first);
  contacts = contacts.concat(first);
}

function showContacts() {
  for (var i = 0; i < contacts.length; i++)
    console.log(i + 1, '-', contacts[i].name, contacts[i].phoneNumber);
}

function add() {
  var name = readlineSync.question('Name: ');
  var phoneNumber = readlineSync.question('Phone number: ');
  var contact = {
    name: name,
    phoneNumber: phoneNumber
  }
  contacts.push(contact);
  complete();
}

function modify() {
  showContacts();
  var answer = readlineSync.question('Enter the number to modify: ');
  contacts[answer - 1].name = readlineSync.question('Name: ');
  contacts[answer - 1].age = readlineSync.question('Age: ');
  complete();
}

function remove() {
  showContacts();
  var answer = readlineSync.question('Enter the number to delete: ');
  contacts.splice(parseInt(answer) - 1, 1);
  complete();
}

function find() {
  var answer = readlineSync.question('Enter the name or number to find: ');
  answer = answer.toLowerCase();
  for (var i = 0; i < contacts.length; i++){
    if(contacts[i].name.toLowerCase().indexOf(answer) >= 0 || contacts[i].phoneNumber.indexOf(answer) >= 0){
      console.log(i + 1, '-', contacts[i].name, contacts[i].phoneNumber);
    }
  }
  complete();
}

function saveAndExit() {
  fs.writeFileSync('./data.json', JSON.stringify(contacts), { encoding: 'utf8' });
}

function complete() {
  var input = readlineSync.question('\n1. Back to Menu\n2. Save & Exit\n-> Enter number: ');
  switch (input) {
    case '1':
      showMenu();
      break;
    case '2':
      saveAndExit();
      return 0;
  }
}

function showMenu() {
  console.log('\n0. All contacts')
  console.log('1. Add');
  console.log('2. Modify');
  console.log('3. Delete');
  console.log('4. Find');
  console.log('5. Save & Exit');
  var input = readlineSync.question('-> Enter number: ');
  switch (input) {
    case '0':
      showContacts();
      complete();
      break;
    case '1':
      add();
      break;
    case '2':
      modify();
      break;
    case '3':
      remove();
      break;
    case '4':
      find();
      break;
    case '5':
      saveAndExit();
      break;
    default:
      console.log('---Wrong!!!---');
      showMenu();
      break;
  }
}

function main() {
  loadData();
  showMenu();
}
main();


