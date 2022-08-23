/*
Вивести на консоль таблицю множення від 1 до 5 у вигляді:
1х1 = 1
1х2 = 2
.....
2х1 = 2
2х2 = 4
.....
5х1=5
5х2=10
5х3
5х4
5х5

*/

for (let i=1; i <= 5; i++) { // 2
    for(let j=1; j<= 5; j++) { // 1...2...3...4...5
       // console.log(`${i} x ${j} = ${i*j}`);
    }
}


const number = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/* 
Напишіть функцію, яка знайде суму масива number
*/

function sumArray (array) {
    // array = [1, 2, 3, 4, 5, 6];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for(let j=0; j <= 2; j++) {
             sum += array[i][j]
        }
    }
    return sum
}

sumArray(number)


/*

Намалювати в консолі таку фігуру:

*
**
***
****
*****
******
*******
********

*/


function drowFigure(dimension) {
    let figure = '';

    for (let i = 1; i <= dimension; i++) {
      for( let j = 0; j < i; j++) {
        figure+='*'
      }    
      figure+='\n'
    }
    
    console.log(figure)
}


drowFigure(8);


/*

Написати функцію, яка приймає розмір фігури в аргументи і виводить ось таку фігуру:

**************
* *          *
*   *        *
*     *      *
*       *    *
*         *  *
*           **
**************


*/