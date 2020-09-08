var a = [
    {
        x: 1,
        age: 2
    }
]
var b = a.filter( function(value) {
    return value.x === 1;
})
console.log(b[0].age);