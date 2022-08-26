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
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}


