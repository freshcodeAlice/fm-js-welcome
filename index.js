const cat = {
    name: 'Murzik',
    color: 'Red',
    breed: 'Dvorovyi osobluvij',
    age: 2,
    eat: function() {
        return 'I am eating'
    },
    sleep: function() {
        return 'zzzzzz'
    }
} 

// Функція-конструктор

function Cat(name, color, breed, age) { /* Угода: функції-конструктори називаються з великої літери */
    this.name = name; //this - посилання на ось цього новоствореного кота
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.run = function() {
        return this.name + ' is running'
    }
}

const cat1 = new Cat('Bublik', 'red', null, 2);
const cat2 = new Cat('Murz', 'black', 'Siam', 4);



/*
Функція-конструктор Country, яка приймає в якості аргументів:
- назва країни
- популяція (population)
- площа (area)
- плотність населення (density): популяція цієї країни / площу цієї ж країни

*/


function Country(name, population, area) {
    this.name = name;
    this.population = population;
    this.area = area;

    this.getDensity = function(){
        return this.population / this.area;
    }
}


const UK = new Country('United Kingdom', 67.22, 243610);



/*

Функція-конструктор Авто, яке має:
- назву
- максимальну швидкість
- поточну швидкість
- метод прискорення (accelerate) - приймає в якості аргумента певне прискорення
- метод сповільнення (deaccelerate) - приймає в якості аргумента певне сповільнення
- метод зупинки (stop)


*/


function Auto(name, maxSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.speed = 0;

    this.accelerate = function (accelValue) {
        this.speed = this.speed + accelValue;
        if(this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        return this.speed;
    }


    this.deaccelerate = function (deaccelValue) {
        this.speed = this.speed - deaccelValue;
        if (this.speed < 0) {
            this.speed = 0;
        }
        return this.speed;
    }

    this.stop = function () {
        this.speed = 0;
        return this.speed;
    }
}


const auto1 = new Auto('BMV', 220);
const auto2 = new Auto('Mersedes', 150);

auto1.accelerate(40);
auto2.accelerate(50);
