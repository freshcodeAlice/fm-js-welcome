/*

Реалізувати клас Student, який наслідується від класу User 
User має ім'я прізвище, метод getFullName(), який повертає повне ім'я.

В студента має бути рік вступу до Вузу.
метод getCourse(), що повертає курс, на якому вчиться студент (курс має бути вирахуваним з 2022)

Частина з *: 
зробити розрахунок не через 2022, а через об'єкт Date().
Якщо курс > 6, вивести "випустився"

*/

class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}

class Student extends User {
    constructor(name, lastName, enterYear) {
        super(name, lastName);
        this.enterYear = enterYear;
    }

    getCourse() {
        const year = new Date().getFullYear();
        return (year - this.enterYear > 6) ? 'graduated' : year - this.enterYear;
    }
}