/*
prompt
Виведіть користувачу пропозицію меню:
1 - Сік
2 - Вода
3 - Кава
4 - Чай
5 - Лимонад

Вивести в консоль "Сік", чи "Вода"
Зробити через switch-case
*/

const userChoise = prompt('Оберіть напій:\n 1 - Сік\n 2 - Вода\n 3 - Кава\n 4 - Чай\n5 - Лимонад');

switch (userChoise) {
    case '1': {
        console.log('Сік');
        break;
    }
    case '2': {
        console.log('Вода');
        break;
    }
    case '3': {
        console.log('Кава');
        break;
    }
    default: {
        console.log('Оберіть щось із меню')
    }
}