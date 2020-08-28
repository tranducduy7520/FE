var students = [];
var readlileSync = require('readline-sync');
function Student (name ,age) {
    this.name = name,
    this.age = age
}
function interface () {
    console.log('\n1. Show all student');
    console.log('2. Create a new student');
    console.log('3. Save & Exit');
    var answer = readlileSync.question('-> Enter number: ');
    if (answer === '1')   listStudent();
    else if (answer === '2')   addNewStudent ();
    else return 0;
}
function addNewStudent () {
    var name = readlileSync.question('\nName: ');
    var age = readlileSync.question('Age: ');
    var student = new Student(name, age);
    students.push(student);
    interface();
}
function listStudent () {
    for (var value of students)
        console.log('1. Name: ' + value.name + ', age: ' + value.age);
    interface();
}
interface();