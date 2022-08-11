// const value = Number(prompt('Введіть число'));


// if (monthNumber === 1) {
//     //
// } else if(monthNumber === 2) {
//     //
// } else if (monthNumber === 3) {
//     ///
// } else {
//     /////
// }

// switch (вираз) {
//     case значення_виразу: робимо щось одне;
//     case значення2_виразу: робимо щось інше;
//     case значення3_виразу: робимо щось інше;
//     default: робимо щось, якщо інші значення не підійшли
// }


let monthNumber = Number(prompt('Введіть число'));

switch (monthNumber) {
    case 1: 
    case 2: 
    case 12: {
        console.log('зима'); 
        break;
    }
    case 3: 
    case 4: 
    case 5: {
        console.log('весна');
        break;
    }
    case 6: 
    case 7: 
    case 8: {
        console.log('літо');
        break;
    }
    case 9: 
    case 10: 
    case 11: {
        console.log('осінь');
        break;
    }
    
    default: {
        console.log('Введи число від 1 до 12')
    }
}