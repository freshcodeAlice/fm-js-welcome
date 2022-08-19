function t(){
    console.log(arguments); // Arguments - псевдомасив зі всіма аргументами функції, які були реально передані у функцію при її виклику
}


console.log(t);
console.dir(t); // консолить об'єкт з його властивостями і методами


t(1, 2, 3, 4, 5);





/*

Напишіть функцію, яка повертає суму БУДЬ-ЯКОЇ кількості переданих їй аргументів


sum(2, 3) // 5
sum(4, 7, 2, 1) // 14

*/



function sum() {
    const arrayArgs = Array.from(arguments); // нормальний масив з об'єкту arguments
    let sum = 0;
    for (let i = 0; i < arrayArgs.length; i++) {
        sum += arrayArgs[i]
    }
    return sum;
}

console.log(sum(2, 6, 23, 65, 123, 3432));