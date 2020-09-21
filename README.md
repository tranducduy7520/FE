# JavaScript Tutorial
Welcome to JavaScript Tutorial!
## Introduction
- JavaScript is the world's most popular programming language.

- JavaScript is the programming language of the Web.

- JavaScript is easy to learn.

- This tutorial will teach you JavaScript from basic to advanced.
## Why Study JavaScript?
JavaScript is one of the **3 languages** all web developers **must** learn:

   1. **HTML** to define the content of web pages

   2. **CSS** to specify the layout of web pages

   3. **JavaScript** to program the behavior of web pages
## JavaScript Advanced
### var, let, const
```
var a = 1;
let b = 2;
const c = 3;

console.log(a, b, c);

var a = 2;
console.log(a);   //declare again

function foo() {
    var a = 5;
}
console.log(a);   //var -> not block scope
```
### this
```
var a = {
    foo: 'bar',
    run: function () {
        setTimeout(() => {
            console.log(this.foo);
        }, 2000);
    }
}
a.run();
```
### Template Literal
```
function foo(name) {
    console.log(`Hi 
    ${name}!`); //template string
}
foo('Jack');
```
### Array-like Object
```
const obj = {
    0: 'Marry',
    1: 'Jane',
    2: 'Violet',
    length: 3
};

for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);

function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
console.log(sum(1, 2, 10, 15));

function sum2() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(sum2(1, 2, 10, 15));
```
### Default Parameters
```
function greeting(name = 'friend', language) {
    if (language === 'en'){
        return `Hi, ${name}`;
    }
    if (language === 'ja'){
        return `Konichiwa, ${name}`;
    }
    return 'Chào bạn';
}
console.log(greeting('Minh', 'ja'));
```
### Call
```
function run(params) {
    console.log(`My name is ${this.name}. I\'m ${this.age}. Parameters: ${params}`);
}
let Hoang = {
    name: 'Hoang',
    age: 20
};
run.call(Hoang, 100);
```
### Apply
```
function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, number) => sum + number, 0);
}

function average() {
    const x = sum.apply(null, arguments);
    return x/arguments.length;
}

console.log(average(2, 5, 9, 10));
```
### Enhance Object Literal
```
class Mouse {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running`);
    }
}

const mouse = new Mouse('Jerry');
mouse.run();
```
### Extends
```
function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function() {
    console.log(`${this.name} is Eating`);
}
function Bird(name) {
    Animal.apply(this, arguments);  //extends properties
}
Bird.prototype = new Animal();  //extends methods

bird = new Bird('Rio');
bird.eat();
```