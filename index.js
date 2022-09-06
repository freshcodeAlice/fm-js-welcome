const arr = [2, 4, 1, 3, 7, 3, 2, 1, 3, 5, 2, 8, 2, 4, 1];

function linearSearch(array, value) { // лінійна складність алгоритму
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }        
    }
    return -1;
}


//linearSearch(arr, 9);


function multyTable(limit) { //квадратична (парабола)
    const table = [];
    for (let i = 1; i <= limit; i++) {
        for (let j = 1; j <= limit; j++) {
            const number = i*j;
            table.push(`${i}*${j} = ${number}`);
        }        
    }
    return table;
}

// multyTable(9)


const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


function binarySearch(array, whatToFind) { // логаріфмічна складність
    let start = 0;
    let end = array.length - 1;
    let middle = Math.round(start+end/2);
    while(true) {
        debugger;
        if (array[middle] === whatToFind) {
            return middle;
        }
        if(array[middle] < whatToFind) {
            start = middle;
            middle = Math.ceil((start+end)/2);
        } else {
            end = middle;
            middle = Math.ceil((start+end)/2);
        }
    }
}

/*
Переписати бінарний пошук з циклу на рекурсію

*/

function binarySearchRecursive(array, whatToFind) {
    const middle = Math.floor(array.length/2);

    if (array[middle] === whatToFind) {
        return middle;
    } else if (array[middle] > whatToFind) {
        return binarySearchRecursive(array.slice(0, middle), whatToFind);
    } else if (array[middle] < whatToFind) {
        return middle + 1 + binarySearchRecursive(array.slice(middle+1, array.length), whatToFind);
    } else {
        return -Infinity;
    }
}