'use strict'

function sum(a,b) {
    return a+b;
}

const arrow = (a, b) => a + b // a+b === {return a+b}

arrow();

const pow = x => x*x //якщо 1 аргумент, то () можна опустити

const SuperFunc = () => { // Arrow Function не може бути функцією-конструктором!
    this.value = 'hello'
}


function SuperFun () {
    // this = {}
    this.value = 'hi'
}


const t1 = function () {
    console.log(arguments);
}

const t2 = () => {
    console.log(arguments); // Arrow Function не має arguments
}


console.dir(t1);

console.dir(t2);


t1(1, 2, 3);

t2(5, 6, 7);

// Функція суми всіх переданих аргументів

function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i]
    }
}


/*

1. Стрілочна функція не має власного контексту (її this буде вказувати на середовище її виконання)
2. Стрілочна функція не може бути функцією-конструктором.
3. Стрілочна функція не має колекції arguments


*/