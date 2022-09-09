/* Деструктуризація об'єктів */


const monitor = {
    sizes: {
        height: {
            value: 30,
            scale: 'cm'
        },
        width: {
            value: 50,
            scale: 'cm'
        }
    },
    brightness: 750,
    refresh: {
        value: 144,
        scale: 'Ggrc'
    },
    color: 'black',
    resolution: '4K'
}


monitor.color; // колір
monitor.sizes.height.value; // значення висоти

// const height = monitor.sizes.height.value;

//const {resolution, color: monitorColor} = monitor; //витягли значення monitor.resolution в нову змінну resolution, значення monitor.color в змінну monitorColor

const {sizes: {height: {value: heightValue}, width: {value: widthValue}}} = monitor;

//heightValue, widthValue - звичайні змінні
const {sizes:{height: {scale: heightScale}, width: {scale: widthScale}}} = monitor;

const {color, brightness, resolution, ...restOfMonitor} = monitor;



const options = {
    braces: {
        ///
    },
    settings: '...'
}

const {braces} = options;


/*



*/


const userObj = {
    name: {
        first: 'John',
        last: 'Doe'
    },
    address: {
        city: 'Dnipro',
        street: 'Centralna'
    },
    auth: {
        login: 'johndoe@test.mail',
        pass: 'qweerty'
    },
    favorites: {
        dish: {
            eat: 'sandwich',
            drink: 'tea'
        }
    }
}


/*
Витягти з об'єкта ім'я юзера і перейменувати його на firstName, 
улюблений напій і перейменувати його на favoriteDrink
логін і перейменувати на email


*/


const {
    name: {
        first: firstName
    }, 
    auth: {
        login: email
    }, 
    favorites: {
        dish: {
            drink: favoriteDrink
        }}} = userObj;




/* Деструктуризація масивів */


const arr = [1, 2, 3, 4, 5, 6];

const [firstElement, secondElement] = arr;

const [first, second, ...restOfArr] = arr;


/* Деструктуризація вхідних параметрів */

function getFullName({firstName, lastName, ...rest}) { //все інше окрім firstName, lastName ігнорується
    return `${firstName} ${lastName}`
}


const user = {
    firstName: 'John',
    lastName: 'Doe'
}


getFullName(user)


/*

Написати функцію, яка приймає об'єкт монітора, виймає з нього розміри висоти і ширини і на їх основі повертає розмір діагоналі

*/



function getDiagonal({sizes: {height: {value: a}, width: {value: b}}}) {
    return Math.sqrt(a*a+b*b);
}


///////


const userArr = [{
    userName: 'John Doe'
}, {
    userName: 'Jane Smith'
}];


const [{userName: firstUserName}] = userArr;