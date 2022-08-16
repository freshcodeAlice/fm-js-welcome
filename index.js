/*

Задача: вивести користувачу привітання, залежно від значення, яке він ввів

*/
let greets = {
    15: 'Hi',
    17: 'Ya, whats up',
    18: 'Hello',
    30: 'Good morning!'
}

let valueFromUser = 18;

greets[18]; // Hello


let obj1 = {
    [valueFromUser]: 'Hello'
}



/*

Задача: прийняти від користувача (через промпт) назву дня тижня і видати в алерт що заплановано у користувача у цей день. Об'єкт з планами виглядає так:


const obj = {
    Mon: 'drive lesson',
    Tue: 'dantist visit',
    Wed: 'go to party',
    Thu: 'hard work',
    Fri: 'chill',
    Sat: 'go to park'
}


*/



const obj = {
    Mon: 'drive lesson',
    Tue: 'dantist visit',
    Wed: 'go to party',
    Thu: 'hard work',
    Fri: 'chill',
    Sat: 'go to park'
}

let userValue = prompt('Type your week day to get your plan: \n Monday = Mon, \n Tuesday = Tue');
alert(obj[userValue] ? obj[userValue] : 'Nothing planned' );