/* Об'явлення функції
function ім'я_функції(argument1, argument2) {
    тіло функції
}
*/


function greetingUser(userName){
    console.log('Привіт, ', userName);
}

/* Використання функції */
greetingUser('Alex'); // аргумент функції
greetingUser('Queen');
greetingUser('Bly sky');


/* Створіть функцію, яка приймає число, додає до нього 5 і виводить результат на консоль
*/

function addFiveToNumber(number) {
    let result = Number(number) + 5;
    console.log(result);
}

addFiveToNumber(5);


/*   Функція, яка складає два числа і повертає результат розрахунку */

function addTwoNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}


let functionResult = addTwoNumbers(2, 5);
console.log(functionResult);