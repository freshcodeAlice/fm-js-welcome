/* DRY 
Don`t 
repeat
yourself
*/

// Loops - Цикли

// while (умова) {
//     код повторюється, поки умова = true
// }


let iterator = 0;
/* Прохід циклу (коло) наз. ітерація */
while (iterator < 10 ) {
    console.log(iterator);
    iterator++;
}
//iterator
/* Break зупиняє цикл */

while(true) {
    console.log('Не вірно');
    break;
}


/* Задача: зробити 10 повторів циклу, вивести на консоль парні значення лічильника */

/* Continue - перехід одразу на наступну ітерацію */

let i = 0;
while (i++<10) {
    if(i % 2) {
        continue;
    }
    console.log(i);

}


/*
Дан пароль = qwerty1234

Запитуйте у користувача пароль через prompt, поки він не співпаде з тим, що лежить в змінній

*/

let pass = qwerrt1234;


while(true) {
    let userPass = prompt('Введіть свій пароль');
    if(userPass === pass) {
        break;
    }
}



//////


// do {
//     тут блок коду, який буде повторювано виконуватись
// } while (умова)


do {
    let userPass = prompt('Введіть свій пароль');
} while (userPass !== pass)