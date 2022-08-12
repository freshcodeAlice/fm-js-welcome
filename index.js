function sum(a, b){ // determinated function
    return a + b;
}

/*   
Детермінована функція - це функція, яка при одних і тих же аргументах ЗАВЖДИ повертає один і той самий результат

*/

sum(2,2);

let variable = 5;

function addToNumberSomeVariable(a) { // НЕДЕТЕРМІНОВАНА ФУНКЦІЯ
    return a + variable;
}

addToNumberSomeVariable(5);

variable = 20;

addToNumberSomeVariable(5);


////

/* Side effect - Побічний ефект чи Побочный еффект */

console.log('Hello');
alert();
fetch(); // Запити на сервер або будь-які міжмережеві запити

/* Чиста функція (Pure function):
1. Детермінована функція
2. Не має побічних ефектів

*/