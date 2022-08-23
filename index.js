'use strict'

// rest operator - ...
// .., .., .., .., -> []

function sum(a,b, ...arrayOfRestArguments) {
    console.log(arrayOfRestArguments);
    return a+b;
}

sum(3, 4); // 7
sum(1, 2, 3); //3
sum(3, 2, 5, 2345, 123, 12);

const arrowSum = (...restArray) => restArray.reduce((accum, current) => accum+current)


// spred - ...
// [] -> .., .., .., ..,

const numbers = [1, 2, 32, 112, 32, 45];
sum(...numbers);


/* Швидкий спосіб копіювання масиву */
const newNumber = [...numbers]


/* 
Склейте два масива в один, не використовуючи метод concat
*/


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 11, 12, 13, 14, 15]; // [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15];

const concatArray = [...arr1, ...arr2];