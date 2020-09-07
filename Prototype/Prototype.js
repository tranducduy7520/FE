var Student = require('./Student.js');

Student.prototype.goToSchool = function() {
    console.log("Going to school...");
}
//make color =]]
console.log(Student.prototype.constructor);

var student = new Student();

delete student.externalInfo;
console.log(student);
student.goToSchool();