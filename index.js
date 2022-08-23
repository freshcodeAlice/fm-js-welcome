'use strict'

// rest operator - ...

function sum(a,b, ...arrayOfRestArguments) {
    console.log(arrayOfRestArguments);
    return a+b;
}

sum(3, 4); // 7
sum(1, 2, 3); //3
sum(3, 2, 5, 2345, 123, 12);

const arrowSum = (...restArray) => restArray.reduce((accum, current) => accum+current)

/*

Напишіть варіант цієї функції через метод reduce

*/
