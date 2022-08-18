function square(a) {
   return a*a;
}

const array = [1, 2, 3, 4, 5];

array.forEach(square); // return undefined


///// map()

const fn = function (element, index) {
    return element + index
};

const newArray = array.map(fn);
console.log(newArray);


/// array.map((element, index) => element + index);



/*

1. Всім користувачам додати поле isSubscribed = false
2. Створити новий масив користувачів, об'єкти мають бути у такому вигляді:
{
    fullName: 'John Doe',
    age:...,
    email:...
}

*/


const users = [
    {
        name: 'John',
        lastName: 'Doe',
        age: 18,
        email: 'mail@com'
    },
        {
        name: 'Jane',
        lastName: 'Doe',
        age: 20,
        email: 'mail@com'
    },
        {
        name: 'Josh',
        lastName: 'Doe',
        age: 17,
        email: 'mail@com'
    },
        {
        name: 'Jake',
        lastName: 'Doe',
        age: 21,
        email: 'mail@com'
    },
        {
        name: 'Jackson',
        lastName: 'Doe',
        age: 17,
        email: 'mail@com'
    },
];

function addSubscribeField(elem) {
    elem.isSubscribed = false;
}

users.forEach(addSubscribeField);


function newUserObject(user){
    return {
        fullName: `${user.name} ${user.lastName}`,
        age: user.age,
        email: user.email
    }
}

const newUsersArray = users.map(newUserObject);

/*

const arr = [2, 44, 11, 234, 8, 2, 4, 1];

Зробити новий масив, всі елементи якого = елемент зі старого масиву + 100

*/

const arr = [2, 44, 11, 234, 8, 2, 4, 1];


const plus100 = arr.map(function (element){
    return element + 100;
})