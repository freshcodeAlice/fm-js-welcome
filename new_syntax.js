class User {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`
    }

    getHello() {
        return `${this.name} say: Hello!`
    }
}

const user1 = new User('Alex', 'Dane', 20);
const user2 = new User('Dari', 'Dane', 23);


/*

Написати клас Worker.
У працівника є ім'я, прізвище, ставка за робочий день і кількість відпрацьованих днів у цьому місяці
Метод, який повертає зарплатню цього робітника за поточний місяць


*/
const MIN_ZP = 6000;
const WORK_DAYS = 21;

const MIN_RATE = MIN_ZP/WORK_DAYS;


class Worker {
    constructor(name, lastName, rate = MIN_RATE, days = 0) {
        // створює {}, this = {}
        this.name = name;
        this.lastName = lastName;
        this.rate = rate; // виклик setter
        this.days = days;
    }

    getSalary() {
        return this._rate * this.days;
    }


    /*
    Сеттер - метод для встановлення значення
    Геттер - метод для отримання значення
    */

    set rate(value) {
        if (value < 0) {
            throw new RangeError('Rate must be a positive number');
        }
        this._rate = value;
    }
    
    get rate() {
        return this._rate;
    }
}

const wrkr = new Worker('','',20, 2);

wrkr.rate = 100; // setter
wrkr.rate; // getter


/*

ДЗ: переписати методи Auto and Fuel task з використанням геттерів та сеттерів
метод getFullWeight (auto), getWeight(fuel)

*/