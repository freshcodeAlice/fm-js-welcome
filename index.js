function MyArray(){
    this.length = 0;
  
}

function MyProtoArray() {
    this.push = function() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
    },
    this.pop = function(value) {
        let lastItem = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastItem;
    },
    this.forEach = function(fn) {
        for (let i = 0; i < this.length; i++) {
            fn(this[i]);
        }
    }
}


MyArray.prototype = new MyProtoArray();



/*

Задача: створити функцію-конструктор для сходів (Ladder).
Об'єкт має властивість 
currentStair // сходинка, на якій ми зараз знаходимось. Початково = 0

Має методи:
up() - піднімає на сходинку вище
down() - опускає на сходинку нижче
showStair() - показує, на якій сходинці ми зараз знаходимось


*/


function Ladder() {
    this.currentStair = 0;
}

function LadderProto () {
    this.up = function() {
        this.currentStair++;
        return this;
    }

    this.down = function() {
        this.currentStair--;
        return this;
    }

    this.showStair = function() {
        return this.currentStair;
    }
}

Ladder.prototype = new LadderProto();

const lad = new Ladder();
lad.up();

// Перепишіть методи таким чином, щоб можливо було використання чейнінгу, тобто щоб можна було об'єднати виклик методів у ланцюжок


/*

Зробити функцію-конструктор об'єкту Accumulator, який приймає певне початкове значення при створенні

new Accumulator(startingValue)
має властивість
value

має метод read(), який за допомогою prompt приймає від користувача число та додає його до value, повертає значення поточного value
(Перевірка на число)

*/

function Accumulator(startingValue) {
    this.checkNumber(userValue);
}


function AccumulatorProto() {
    this.read = function() {
        const userValue = Number(prompt('Введіть число'));
        this.checkNumber(userValue);
    }

    this.checkNumber = function (num) {
        if(Number.isNaN(num)) {
            console.log('Це не число');
        } else {
            this.value = num;
        }
    }
}

Accumulator.prototype = new AccumulatorProto();

/* Таска самостійна: передбачити перевірку початкового значення при створенні аккумулятору І при додаванні нового значення методом read. При цьому не дублювати код
*/