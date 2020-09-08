var Student = require('./Student.js');

Student.prototype.goToSchool = function() {
    console.log("Going to school...");
    console.log(this.age);
}
//make color =]]
console.log(Student.prototype.constructor);

var student = new Student('Duy', 20);

delete student.externalInfo;
console.log(student);
student.goToSchool();