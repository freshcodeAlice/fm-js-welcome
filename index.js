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

function checkSequence(str) {
    
}


