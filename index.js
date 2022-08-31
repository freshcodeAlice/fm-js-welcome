/*
Є ферма.
На фермі в нас є свійські тварини (корови, кози).
Є домашні тварини (кошки і собаки).

В кожної тварини є діти. В кожного з дітей може бути певна кількість дітей.

Реалізувати класи всіх тварин і додати тваринам рандомну кількість дітей.

Реалізувати функцію, яка підрахує кількість тварин на фермі.


створити масив
зробити Н кількість ітерацій
на кожній ітерації створювати нову тварину, їй теж створити кілька дітей і додавати її в масив

const ferma = [cats, dogs, cows]

*/


class Animal {
  constructor(){
    this.childs = null;
  }

}


class Cat extends Animal{
  constructor(){
    super();
  }
}

class Dog extends Animal{
  constructor(){
    super();
  }
}

class Cow extends Animal{
  constructor(){
    super();
  }
}

class Goat extends Animal{
  constructor(){
    super();
  }
}


/**
 * 
 * @param {Animal (or Cat, Dog, Cow, Goat)} Type 
 * @param {number} quantity 
 */


function createFamily(Type, quantity) {
    const animals = new Array(quantity).fill(new Type());
    animals.forEach(animal => {
      const childs = new Array(quantity).fill(new Type());
      animal.childs = childs;
    })
    return animals;
}


/*   Функція підрахунку кількості дітей */

/**
 * 
 * @param {Array of Animals} farm 
 */

function countFarm(farm) {
  let sum = 0;
    for (let i = 0; i < farm.length; i++) {
      const item = farm[i];
      if (item instanceof Animal) {
          if (item.childs) {
            sum+= item.childs.length;
          } else {
            return;
          }
      }
    }
    return sum;
}


const farm = [...createFamily(Cat, 3), ...createFamily(Dog, 2), ...createFamily(Cow, 5), ...createFamily(Goat, 1)];