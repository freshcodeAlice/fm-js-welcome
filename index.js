// function sum(a, b){
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function multy(a, b) {
//     return a * b;
// }

// function div(a, b){
//     return a / b;
// }


// function calculator(){
//     let a = Number(prompt('Введіть перше число'));
//     let b = Number(prompt('Введіть друге число'));

//     let action = prompt('Введіть потрібну дію: +, -, *, /');
//     let result;
//     switch (action) {
//         case '+':
//             result = sum(a,b);
//             break;
//         case '-':
//             result = sub(a,b);
//             break;
//         case '*':
//             result = multy(a,b);
//             break;
//         case '/':
//             result = div(a,b);
//             break;
//         default:
//         result = 'Введіть правильну дію';
//     }
//     console.log(result);

// }


// calculator();




//////////


function sum(a, b){
    return a + b;
}

let superFunction = sum;
sum(2, 2);
superFunction(2,4);


function doingSomething(arg1, arg2, fun) {
    /////////////
   let result = fun(arg1, arg2);
   return result;
}

/* High Order Function (HOF) - Функція вищого порядку (Функция высшего порядка) - це функція, яка приймає іншу функцію в якості аргументу.

Callback - Коллбек (функція зворотнього виклику) (функция обратного вызова) - це функція, ЯКУ передали як аргумент іншій функції
*/

doingSomething(2, 4, sum);

doingSomething(3, 5, function (a, b) {
    return a*b
})
