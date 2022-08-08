let num = 0.1 + 0.2;

// console.log(num);

let num1 = NaN; // Not-a-number


let a = 1 + 2;
let b = 2 - 1;
let c = 2 * 2;
let d = 4 / 2;


let notAllowed = 5 / 0;
console.log(notAllowed);
let divTo0 = 4 / Infinity;
console.log(divTo0);

/* +
Складати числа
Зклеювати строки (конкатенація)
*/

let newLine = 'HEllo' + 'you';
console.log(newLine);

newLine = 5 + 'Hello';
console.log(newLine);

newLine = 1 + '1';
console.log(newLine);


/* Перетворення типу даних (Приведення) */

let num5 = 6 - '1';
/* Неявне перетворення типу даних
(Неявное преобразование типа данных) */
console.log(num5);
let thisIsNumber = Number('45'); // явне перетворювання
let thisIsNumber2 = '45' - 0; // неявне (автоматичне)

console.log(thisIsNumber2);

let booleandNumber = true + 1;
console.log(booleandNumber);

/* 
Boolean автоматично приводиться до типу Number
true = 1
false = 0

{} - true
'' - false
null, undefined - false
*/


/* String */

let str = String(45);
let str2 = null + '';
console.log(str2);


let notANumber = 2 * 'Hello';
console.log(notANumber); // Not a Number
Number('Hello');


/* Typeof */

let box = true;
let result = typeof box; // 'string'
console.log(result);