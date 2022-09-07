/* Stack */

class Stack {
    constructor (maxSize) {
        this._maxSize = maxSize;
        this._size = 0;
    }

    get isEmpty() {
        return this._size === 0;
    }

    get size(){
        return this._size;
    }

    push(value) {
        if(this.size >= this._maxSize) {
            throw new Error('Stack overflow');
        }
        this[`_${this.size}`] = value;
        this._size++;
        return this._size;
    }

    pop() {
        const lastItem = this[`_${this.size-1}`];
        delete this[`_${this.size-1}`];
        this._size--;
        return lastItem;
    }

    pick() {
        return this[`_${this.size-1}`];
    }
}

/*

(2+2) + [2*(2/4)]
() [({})] // true

(2+2) + [2*(-1] + 5]
 
    () [(]]
((}[)]} // false


Задача: написати функцію, яка приймає рядок, що містить дужки і повертає true, якщо дужки правильно парно відкриваються і закриваються, і false, якщо порядо нарушений
(), {}, [], <>
*/

/*
1. Створюємо структуру, де будемо зберігати всі оці дужки.
2. Перебираємо рядок.
3. Якщо ми зустріли дужку, яка відкривається, покласти її в стек.
4. Якщо ми зустріли дужку, що закривається, проаналізувати її:
        - порівняти, чи є оця закриваюча дужка парною до останнього елементу стеку
            - якщо так, то видалити відкриваючу зі стеку
            - якщо ні, то повертаємо помилку
5. Проаналізувати, чи залишилось щось у стеку. Якщо рядок (цикл) закінчився, а в стеку щось залишилось, то порядок був неправильний. Якщо стек пустий, то все ок.

Іллюстрація
https://site.ada.edu.az/~medv/acm/Docs%20e-olimp/Volume%2054/5327_files/image002.gif


Додатково: ігнорувати всі символи окрім дужок
*/

/**
 * 
 * @param {String} str - Рядок, який аналізується
 * @param {Object} options - Об'єкт налаштувань, всередині якого ми очікуємо об'єкт braces
 * @param {Object} options.braces - Об'єкт з парами символів, які перевіряються
 */

/*
     braces: {
        '(': ')',
        '[':']',
        '{':'}',
        '<':'>'
    }
*/

function checkSequence(str, options) {
    const stack = new Stack();
    const braces = options.braces;
    const closeBraces = Object.values(braces); // [')', ']', '}', '>']
    // const arr = [...Object.keys(braces), ...Object.values(braces)]
    // const newStr = str.split(['']).filter((sym)=> arr.includes(sym)); // фільтрація рядка, яка прибирає все окрім дужок
    
    for (const symbol of str) {
        if (!(braces[symbol] && closeBraces.includes(symbol))) {
           continue;
        } 
        if (braces[symbol]) { // тоді це відкриваюча дужка
            stack.push(symbol);
            continue;
        }
        if (stack.isEmpty && closeBraces.includes(symbol)) {
            return false;
        }
        const lastItemFromStack = stack.pick();
        const correctCloseBrace = braces[lastItemFromStack];
        if( correctCloseBrace === symbol) {
            stack.pop();
        } 
    }

    return stack.isEmpty;
}




const options = {
    braces: {
        '(': ')',
        '[':']',
        '{':'}',
        '<':'>'
    }
}

console.time('Timecheck');
console.log(checkSequence('(2+2)[3-1]2(*3[9/1])', options)) //true
console.timeEnd('Timecheck');

