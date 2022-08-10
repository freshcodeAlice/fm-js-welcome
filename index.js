let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть друге число'));

function addTwoNumbers(arg1, arg2){

        console.log(num2);
        num2 = 5;
    debugger;
    const result1 = arg1 + arg2;
   return result1;
}


function hello() {
    
}

let result2 = addTwoNumbers(num1, num2);

console.log(result2);


/* Scope - область видимости
(це всі наші змінні, об'єкти, і т.д., які нам доступні)

Local Scope (локальна область видимості) - це всі наші змінні, об'єкти і т.д. ВСЕРЕДИНІ нашої функції

Global Scope - глобальна область видимості - це наші змінні, об'єкти і т.д. з поточного коду
*/