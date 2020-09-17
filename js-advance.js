// var a = 1;
// let b = 2;
// const c = 3;

// console.log(a, b, c);

// var a = 2;
// console.log(a);  //declare again

// function foo() {
//     var a = 5;
// }
// console.log(a); //var not block scope

// var a = {
//     foo: 'bar',
//     run: function () {
//         setTimeout(() => {
//             console.log(this.foo);
//         }, 2000);
//     }
// }
// a.run();

// function foo(name) {
//     console.log(`Hi 
//     ${name}!`); //template string
// }
// foo('Jack');

// const name = ['Marry', 'Jane', 'Violet'];
// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }
// //array-like object
// const obj = {
//     0: 'Marry',
//     1: 'Jane',
//     2: 'Violet',
//     length: 3
// };

// for (let i = 0; i < obj.length; i++) {
//     console.log(obj[i]);
// }

// function sum() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// }
// console.log(sum(1, 2, 10, 15));

// function sum2() {
//     const numbers = Array.from(arguments);
//     return numbers.reduce((sum, number) => sum + number, 0);
// }
// console.log(sum2(1, 2, 10, 15));

// //default parameters
// function greeting(name = 'friend', language) {
//     if (language === 'en'){
//         return `Hi, ${name}`;
//     }
//     if (language === 'ja'){
//         return `Konichiwa, ${name}`;
//     }
//     return 'Chào bạn';
// }
// console.log(greeting('Minh', 'ja'));

// //call
// function run(params) {
//     console.log(`My name is ${this.name}. I\'m ${this.age}. Parameters: ${params}`);
// }
// let Hoang = {
//     name: 'Hoang',
//     age: 20
// };
// run.call(Hoang, 100);

//apply

// function sum() {
//     const numbers = Array.from(arguments);
//     return numbers.reduce((sum, number) => sum + number, 0);
// }

// function average() {
//     const x = sum.apply(null, arguments);
//     return x/arguments.length;
// }

// console.log(average(2, 5, 9, 10));

// //enhance object literal
// const name = 'Tom';
// const cat = {
//     name,
//     run() {
//         console.log(`${this.name} is chasing`);
//     }
// };
// cat.run();

// class Mouse {
//     constructor(name) {
//         this.name = name;
//     }
//     run() {
//         console.log(`${this.name} is running`);
//     }
// }

// const mouse = new Mouse('Jerry');
// mouse.run();

//extends
// function Animal(name) {
//     this.name = name;
// }
// Animal.prototype.eat = function() {
//     console.log(`${this.name} is Eating`);
// }
// function Bird(name) {
//     Animal.apply(this, arguments);  //extends properties
// }
// Bird.prototype = new Animal();  //extends methods

// bird = new Bird('Rio');
// bird.eat();