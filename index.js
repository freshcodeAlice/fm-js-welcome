/* Тернарний оператор 

let result = умова ? операнд1 : операнд2;

*/

let age = 18;
let isAdult = age < 16 ? 'not adult' : 'adult'; 


/* 
(булева змінна login - true/false)
Створіть змінну viewMode, яка у випадку авторизованного користувача має містити рядок 'authMode', а у випадку неавторизованого - 'unauth'

*/


let login = true;

let viewMode = login ? 'authMode' : 'unauth';


/*

Якщо число входить в діапазон від 6 до 12, то у змінній результат має міститись рядок 'in', в протилежному випадку - рядок 'out';


*/
let number;

let result = (number >= 6 && number <= 12) ? 'in' : 'out';