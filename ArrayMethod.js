var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 13, 11, 10];
var arr2 = ['a', 'b', 'c'];

arr2.forEach((value, index, array) => console.log('arr2[' + index + '] = ' + value));


                                 //ARRAY VARIANT
arr1.push(0);
arr1.pop();
arr1.unshift('h');
arr1.shift();
// return the new length

arr1.splice(2, 3, '1', '2', '3', '4', '5');
//return the elements was removed
//begin at 2nd place, remove 3 elements then insert 5 elements from 2nd place of arr1


                                //ARRAY INVARIANT
arr1.indexOf(3);
//return index of the FIRST satisfying element in the array

arr1.concat(arr2);
//return new array matching arr1 and arr2

arr1.slice(3, 8);
//return new array has elements from 3rd place to 7rd place of arr1

arr1.map(function (value, index, array) {
    return value + 1;
})
//return new array after mapping

arr1.find(function (value, index, array) {
    return value % 2 === 0;
})
//return FIRST satisfying element

arr1.filter(function (value, index, array) {
    return value % 2 === 0;
})
//return new array has satisfying elements

arr1.reduce(function (preValue, curValue, curIndex, array) {
    return preValue + curValue;
}, initialValue = 3)
//return result of reduce function

arr1.join('');
//return a string concat elements of array

arr1.sort(function (a, b) {
    return a - b;
});
//return sorted array
/* return
value < 0 a stand in front of b
value > 0 b stand behind a
value = 0 keep stable a and b
*/