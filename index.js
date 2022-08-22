// sort, filter, map, forEach

const catArray = [
    {
        name: 'Murzik',
        color: 'black',
        weight: 3,
        age: 2
    },
    {
        name: 'Murka',
        color: 'grey',
        weight: 5,
        age: 3
    },
    {
        name: 'Barsik',
        color: 'red',
        weight: 2,
        age: 1
    },
    {
        name: 'Cookie',
        color: 'brown',
        weight: 5,
        age: 2
    },
    {
        name: 'Stus',
        color: 'grey',
        weight: 2,
        age: 5
    },
    {
        name: 'Fagot',
        color: 'black',
        weight: 5,
        age: 3
    },
    {
        name: 'Kit',
        color: 'pink',
        weight: 2,
        age: 1
    },

];


// 1

/*

Відсортувати котів за вагою на збільшення
*/


catArray.sort(function (cat1, cat2) {
   if(cat1.weight < cat2.weight) {
    return -1;
   } else {
    return 1;
   }
})

/*
-1 -> cat1, cat2
0 -> всі на місці
1 -> cat2, cat1

*/


/*
відсортувати котів від найстаршого до наймолодшого 

*/

catArray.sort(function(cat1, cat2) {
    return cat2.age - cat1.age;
});


/*

відсіяти всіх котів окрім чорних

*/

const blackCatArray = catArray.filter(function(cat) {
    return cat.color === 'black'
});

/*

створити новий масив, який складається з імен котів

*/

const catNames = catArray.map(function (cat) {
    return cat.name;
})

/*

Додати котам поле isMale
true - кіт,
false - кішка

*/


/* Рандомне число - або 0, або 1
Math.round(Math.random())
Boolean(0) - false
Boolean(1) - true
*/


catArray.forEach(function(cat){
    cat.isMale = Boolean(Math.round(Math.random()))
})