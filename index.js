/*
Set - множина (множество)
набір унікальних значень

*/


const set = new Set();

set.add(1)
// Set(1) {1}
set.add(4)
// Set(2) {1, 4}
set.add('hello')
// Set(3) {1, 4, 'hello'}[[Entries]]0: 11: 42: "hello"size: 3[[Prototype]]: Set
set.add('hello')
// Set(3) {1, 4, 'hello'}[[Entries]]0: 11: 42: "hello"size: 3[[Prototype]]: Set
set.add(1)
// Set(3) {1, 4, 'hello'}
set.add(5)
// Set(4) {1, 4, 'hello', 5}[[Entries]]0: 11: 42: "hello"3: 5size: 4[[Prototype]]: Set
set.has(1)
// true
set.has(12)
// false
set.delete(1)
// true
set.has(1)
// false
set;
// Set(3) {4, 'hello', 5}[[Entries]]0: 41: "hello"2: 5size: 3[[Prototype]]: Set
const set2 = new Set([2,3,4,5]);
// undefined
set2;
// Set(4) {2, 3, 4, 5}[[Entries]]0: 21: 32: 43: 5size: 4[[Prototype]]: Set
const arrFromSet = [...set.values()]
arrFromSet
// (3) [4, 'hello', 5]



/*

Дан масив: [2, 3, 3, 5, 6, 6, 6, 6, 6, 7, 7, 1, 1, 1, 1];
Повернути масив без повторень

*/

const arrWithoutDoubles = arr => [...new Set(arr)];


/*
Дано два масива: 
arr1 = [4, 3, 7, 5, -11]
arr2 = [3, 4, 8, 7, 2, -11]

Повернути з функції масив, що складається з різниці двох масивів (тобто, з тих значень, які не повторюються в обох масивах)

*/

const twoArraysWithoutDoubles = (arr1, arr2) => [...new Set([...arr1, ...arr2])];