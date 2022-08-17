const array = [7,3,5,2,5];


for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


/*

Дан масив [3, 6, 8, 2, 3, 5, 1]. Напишіть функцію, яка приймає масив в якості аргументу і повертає суму всіх елементів масиву 

*/


function sumArray(array) {
    let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
    return sum;
}


const arr = [3, 6, 8, 2, 3, 5, 1];
console.log(sumArray(arr));


/*

Дан масив [3, 6, 8, 2, 3, 5, 1]. Написати функцію, яка знаходить найбільше значення серед елементів масива.

1. Десь запам'ятати найбільше число, яке ми зустріли.
2. Порівняти його з наступним елементом масиву. Якщо елемент масиву опиниться більшим ні те число, що ми запам'ятали, то саме цей елемент масиву стає нашим найбільшим запам'ятованим.


let num = 5;
let num2 = 4;

if (num > num2) {
    /// ідемо далі 
} else {
    num = num2;
}

*/


function maxArray(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
    //    if (max >= array[i]) {
    //     continue;
    //    } else {
    //     max = array[i];
    //    }

        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

console.log(maxArray(arr));



/*

Написати функцію, яка знаходить середнє арифметичне всіх елементів масиву.
Середнє арифметичне = сума всіх елементів / кількість елементів


[3, 6, 8, 2, 3, 5, 1] // 4
*/

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       sum += array[i];
    }
    let result = sum / array.length;
    return result;
}

console.log(average(arr));