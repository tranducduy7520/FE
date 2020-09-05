var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = ['a', 'b', 'c'];

arr2.forEach((value, index, array) => console.log('arr2[' + index + '] = ' + value));

arr1.push(0);
arr1.pop();
arr1.unshift('h');
arr1.shift();
// return the new length

arr1.indexOf(3);
//return index of the FIRST satisfying element in the array

arr1.concat(arr2);
//return array matching arr1 and arr2

arr1.slice(3, 8);
//return array has elements from 3rd place to 7rd place of arr1

arr1.splice(2, 3, '1', '2', '3', '4', '5');
//begin at 2nd place, remove 3 elements then insert 5 elements from 2nd place
//return the elements was removed