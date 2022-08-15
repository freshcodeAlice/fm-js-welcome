/* 
Задача: написати функцію, яка обчислює факторіал переданого їй числа, результат роботи функції вивести на консоль

Факторіал - це 
5! = 1*2*3*4*5
10! = 1*2*3*4*5*6*7*8*9*10

*/

function factorial(num) {
    if (num < 0) {
        return null;
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
        
    }
    return result;
}