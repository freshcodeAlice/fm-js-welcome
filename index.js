/* 

1. Напишіть функцію, яка приймає два числа і повертає те, що більше

2. Напишіть іншу функцію, яка знаходить середнє аріфметичне з двох чисел.
Середнє аріфметичне значення = одне число + друге число / кількість чисел

3. Функція, яка приймає одне число і визначає, чи є воно парним (четным)

*/

//1

let value1 = Number(prompt('Введіть перше число')); // String
let value2 = Number(prompt('Введіть друге число'));

function getBigger(num1, num2) {
    if(num1 > num2) {
        return num1; 
    } else {
        return num2;
    }
}

let result = getBigger(value1, value2);
console.log(result);


//2

function average(num1, num2) {
    let avrg = (num1 + num2) / 2;
    return avrg;
}


let res2 = average(value1, value2);
console.log(res2);

// 3

function isEven(num) {
    // if (num % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    return num % 2 === 0 //скорочений результат


    return !(num % 2) //дуже скорочений результат

}