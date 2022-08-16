/*

Створіть три різні об'єкти і функцію, яка додає кожному поле 'key1' = 'value'


*/

let cat = {
    name: 'Murzik'
};

let dog = {
    name: 'Belka'
};

let fish = {
    age: 2
};

function changeObject(obj) {
    obj.key1 = 'value';
}


changeObject(cat);
changeObject(dog);
changeObject(fish);