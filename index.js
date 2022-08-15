/* Objects 

Об'єкти мають:
- властивості
- методи

*/

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

//alert(cat); // [object Object]

cat.age++;

// console.log(cat);

cat.sleep = undefined; // BAD PRACTICE

delete cat.sleep; // Good practice

/// Adding properties

cat.girlfriend = 'Murka';

/*

Визначте у себе кота, опишіть його властивості і декілька методів - бігти, спати, нявкати

*/
