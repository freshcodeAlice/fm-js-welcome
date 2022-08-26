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


/*

Задача: порахувати загальну вагу автомобіля

Клас авто
Клас паливо

*/

class Fuel {
    constructor (volume, density) {
        this.volume = volume;
        this.density = density;
    }

    getWeight() {
        return this.volume * this.density;
    }
}

const benzin = new Fuel(50, 0.9);

const MIDDLE_WEIGHT_PASSANGER = 80;

class Auto {
    constructor(name, ownWeight, fuel, passangers) {
        this.name = name;
        this.ownWeight = ownWeight;
        this.fuel = fuel;
        this.passangers = passangers;
    }

    /// метод, що обчислює повну вагу авта на основі його власної ваги + ваги палива
    getFullWeight() {
        return this.ownWeight + this.fuel.getWeight() + (this.passangers * MIDDLE_WEIGHT_PASSANGER)
    }
}


const auto = new Auto('BMV', 2500, benzin);
auto.getFullWeight();


/*

Клас Friend
У об'єкта є ім'я і кількість грошей, і друг
Завдання - порахувати спільну кількість грошей


*/

class Friend {
    constructor(name, amount, friend){
        this.name = name;
        this.amount = amount;
        this.friend = friend;
    }

    getFullAmount() {
        if (this.friend === null) {
           return this.amount;
        } 
        if (Array.isArray(this.friend)) { // [{}, {}, {}, {}]
          return this.amount + this.friend.reduce((sum, friend)=> sum+friend.getFullAmount(), 0);
        }  
        return this.amount + this.friend.getFullAmount();
    }
}
const friend1 = new Friend('Alex', 5, null);
const friend2 = new Friend('Sasha', 10, null);

const myFriend = new Friend('Daria', 30, [friend1, friend2]);

const me = new Friend('Alisa', 20, myFriend);