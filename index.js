/*
Написати функцію, яка приймає розмір фігури в аргументи і виводить ось таку фігуру:
***************
* *           *
*   *         *
*     *       *
*       *     *
*         *   *
*           * *
***************

*/

function drowSquareWidthDiagonal(dimension){
    let str = '';
    for (let i = 0; i < dimension; i++) {
            for (let j = 0; j < dimension; j++) {
                if(i === 0 || i === dimension - 1 || j === 0 || j === dimension - 1 || i === j) {
                    str += '*'
                } else {
                    str += ' '
                }
            }
            str += '\n';        
    }
    return str;
}

console.log(drowSquareWidthDiagonal(10))


/*

Зворотня діагональ 

*/

function drowSquareWidthBackDiagonal(dimension){
    let str = '';
    for (let i = 0; i < dimension; i++) {
            for (let j = 0; j < dimension; j++) {
                if(i === 0 || i === dimension - 1 || j === 0 || j === dimension - 1 || i === dimension - j - 1) {
                    str += '*'
                } else {
                    str += ' '
                }
            }
            str += '\n';        
    }
    return str;
}


console.log(drowSquareWidthBackDiagonal(10));