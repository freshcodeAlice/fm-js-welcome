/*

Задачка з *: написати функцію, яка перевіряє об'єкт на пустоту (тобто відсутність властивостей чи методів). Повертає Boolean
const a ={
    key: value
}

isEmpty(a) // false

const b = {
}

isEmpty(b) // true
*/


function isEmpty(obj) {
    for (let key in obj) {
        if(key) {
            return false;
        }
    }
    return true;
}

const a ={
    key: 'value'
}

console.log(isEmpty(a)) // false

const b = {
}

console.log(isEmpty(b)) // true