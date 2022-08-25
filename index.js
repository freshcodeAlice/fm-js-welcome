/* 
Задача - факторіал числа
5! = 1*2*3*4*5 = (1*2*3*4) * 5

*/

function factorial(number) {
  if(number === 1) {
    return 1
  }
  return number * factorial(number-1);
}


// const factorial = (number) => number === 1 ? 1 : number * factorial(number-1);

factorial(5);


/*
Напишіть функцію зведення у ступінь за допомогою рекурсії

pow(3, 3) // 27
pow(4, 2) // 16
pow(2, 10) // 1024

*/

function pow(base, power) {
  if (power === 1) {
    return base;
  } else if (power === 0) {
    return 1;
  } else {
    return base * pow(base, power-1);
  }

}

pow(4,2);


/*

Дано ціле число. Виведіть його цифри задом наперед, не використовуючи масиви. 
Використовувати цілочислений поділ і рекурсію.

1234 // 4321


*/


function reverseNumber(number) {
    if(Math.floor(number / 10) === 0) {
      return number
    }
    return '' + number % 10 + reverseNumber(Math.floor(number / 10));
}


/*

Задачка простіша:
знайти максимальне число у масиві, який містить числа та інші масиви

const array = [2, 1, 2, [4, 1, 1, 6, [3, 1, 7], 2], [3, 2, [3, 4, [2, 7]]]];

*/


function maxInArray(arr) {
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      item = maxInArray(item);
    } 
      if (item > maxValue) {
        maxValue = item;
      }    
  }
  return maxValue
}


/*

Написати функцію, що обчислює ряд Фібоначчі
F(n) = F(n-2) + F(n-1)

1, 1, 2, 3, 5, 8, 13, 21, 34 ....

*/