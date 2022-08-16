/* Обчислювальні властивості */


const user = {
    'name': 'John', // Ключ 'name', значення - 'John'
    'favorite color': 'red',
    0: 'value'
}


/* Ключем в об'єкті може бути рядок або тип даних Symbol */

// . - Оператор доступу за ім'ям властивості

user.name // 'John'
user['name'] // 'John'
// user.'favorite color' // syntax error
// user.0 // syntax error

/// [] - Оператор доступу до обчислюваної властивості (вычисляемое свойство - Computed Property), до її значення

let name = 'Sam';

user[name]; // === user.Sam
user['favorite color'] // red
user[0]; // 'value'


////


let key = 'a';


const obj = {
    a: 5
}


obj.key // undefined
obj[key] // 5




////


const someObj = {
    2: 10
}

someObj.2 // syntax error
someObj[2] //10
someObj['2'] //10

