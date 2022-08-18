const array = [1, 2, 3, 4, 5];
array[0] // 3
// length = 5
array[array.length-1];


for (let i = array.length - 1; i >= 0; i--) {
  //  console.log(array[i]);
}


////  slice
// Копіює масив з індекса M (включно) до індекса N (не включаючи)
// arr.slice(M, N);

array.slice(2); // slice не мутує масив


/// Мутація даних
// Мутабельний - це той, який може змінюватись (або той, який можна змінювати)
// Немутабельний - це той, який не можна змінювати
// Мутуючий метод - метод, який впливає на початкові дані, змінює їх у пам'яті


const users = [
    {
        name: 'John',
        lastName: 'Doe'
    },
    {
        name: 'Jane',
        lastName: 'Doe'
    },
    {
        name: 'Jack',
        lastName: 'Dosh'
    }
]


/// splice
// splice(M, L, ......) - мутує (змінює) початковий масив, видаляючи (та) додаючи нові елементи
// M - з якого індекса починати
// L - скільки елементів видалити

const arr = [1, 2, 3, 4, 5];

console.log(arr.splice(2, 2));
console.log(arr);
console.log(arr.splice(1, 1, 'hello', 456));
console.log(arr);


/*

1. З масиву [1, 2, 3, 4, 5] зробіть масив [1, 4, 5]

2. З масиву [1, 2, 3, 4] запишіть в новий масив [2, 3, 4]

3. З масиву [1, 2, 3, 4, 5] зробіть масив [1, 'w', 'tr-td', 2, 3, 4, 'vv', 5, 'aa'];


*/

//1

const arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2);

//2
const arr2 = [1, 2, 3, 4];
const newArray = arr2.slice(1);

//3
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 0, 'w', 'tr-td');
//variant 1
// arr3.splice(6, 0, 'vv');
// arr3.push('aa');
//variant 2
arr3.splice(-1, 1, 'vv', 5, 'aa')


/*

Напишіть функцію, яка перевіряє, чи є в масиві два однакових елемента поспіль.
Масив приймаємо як аргумент функції, ф. повертає true, якщо є два елемента однакових поспіль, false

[1, 2, 3, 4, 5] // false
[1, 2, 2, 3, 4] // true

*/

function isDoubledElement(array) {
    for (let i = 0; i < array.length-1; i++) {
        if(array[i] === array[i+1]){
            return true
        }
    }
    return false;
}




