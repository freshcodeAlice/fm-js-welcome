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


class Cat {
}

class Dog{
}

class Cow{
}

class Goat {
}


/**
 * 
 * @param {Animal (or Cat, Dog, Cow, Goat)} Type 
 * @param {number} quantity 
 */

function createChilds(Type, quantity) {
  const arr = [];
  for (let i = 0; i < quantity; i++) {
    const child = new Type();
    arr.push(child);
  }
    return arr
}

function createCatFamily() {
    const cats = [new Cat(), new Cat(), new Cat()];
    cats.forEach(cat => {
      const childs = createChilds(Cat, 3);
      cat.childs = childs;
    })
    return cats;
}


function createDogFamily() {
  const dogs = [new Dogs(), new Dogs(), new Dogs()];
  dogs.forEach(dog => {
    const childs = createChilds(Dog, 2);
    dog.childs = childs;
  })
  return dogs;
}


/*   Функція підрахунку кількості дітей */

function countFarm(farm) {  // [[cat[cat, cat], cat[cat], cat[cat,cat,cat]], [dog[dog, dog], dog[dog]], ....]
    // повернути кількість тварин
}