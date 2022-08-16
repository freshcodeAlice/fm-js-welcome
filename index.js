const user = {
    name: 'John',
    lastName: 'Doe',
    age: 20,
    'favorite color': 'red',
    movie: 'Blue moon',
    avatar: 'http://....'
}


// for ... in

// НЕ ЦЕЙ for(;;)

for (let key in user) {
    console.log(`${key} --- ${user[key]}`); // key --- value
}


/*

Написати функцію, яка приймає об'єкт і виводить всі значення всіх властивостей, оформлені у *...*

obj = {
    key1: value2
}

/// "key1": *value2*



*/


function stylingConsole(obj) {
    for(let key in obj) {
        console.log(`"${key}": *${obj[key]}*`)
    }
}


/*

Task2: 

НАписати функцію, яка повертає загальну суму, витрачену на зарплатню всіх відділів

*/

const departmentSalary = {
    HR: 20000,
    Development: 30000,
    Drive: 200,
    Cleaning: null
}


function sumSalary (salaryObj) { 

    let result = 0;

    for (let key in salaryObj) {
        if( typeof salaryObj[key] === 'number') {
            result = result + salaryObj[key];
        }
    }
    return result;

}

console.log(sumSalary(departmentSalary));




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