/*

Зробити калькулятор =)

Користувач послідно (одне за одним) вводить
- Перше число
- Друге число
- Один з варіантів: +, -, *, /

Кожну дію зробити окремою функцією. Весь калькулятор - це теж окрема функція, роль якої - спитати у користувача два числа і дію і повернути йому результат в якості alert

*/

function sum(a, b){
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multy(a, b) {
    return a * b;
}

function div(a, b){
    return a / b;
}


function calculator(){
    let a = Number(prompt('Введіть перше число'));
    let b = Number(prompt('Введіть друге число'));

    let action = prompt('Введіть потрібну дію: +, -, *, /');
    let result;
    switch (action) {
        case '+':
            result = sum(a,b);
            break;
        case '-':
            result = sub(a,b);
            break;
        case '*':
            result = multy(a,b);
            break;
        case '/':
            result = div(a,b);
            break;
        default:
        result = 'Введіть правильну дію';
    }
    console.log(result);

}