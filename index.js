// reduce
// зводить якусь кількість елементів до одного результуючого значення

const array = [2, 3, 1, 2, 34, 21];

function reducer (accumulator, elem) {
    return accumulator + elem
}


const sum = array.reduce(reducer, 0);

// array.reduce((acc, el) => acc+el, 0);