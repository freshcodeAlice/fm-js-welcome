const array = [23, 'Hi!', {user: 'John Doe'}, true];

// concat

const arr6 = [1, 2, 3, 4];
arr6.concat([2, 6, 8]);

// fill

const arrFive = new Array(5);
arrFive.fill(1);


/// includes

const arr2 = [2, 4, 1, 5, 1, 3, 7];
arr2.includes(5);


// indexOf

arr2.indexOf(8);

// join

const newArr = ['Hello', 'world', 4, 2, 'hi'];
console.log(newArr.join(' ')); // default separator - ','


/// push

const oldArray = [2, 3, 4, 5];
oldArray.push(6); // додає елемент в кінець масива, повертає нову довжину масива

// pop

const anotherArray = [5, 6, 7, 8];
const lastElem = anotherArray.pop(); // видаляє останній елемент масива і повертає його значення

// shift

const firstElem = anotherArray.shift(); // видаляє перший елемент масива і повертає його значення

/// unshift - додає 1 або більше елементів на початок масива, повертає його нову довжину

anotherArray.unshift(3, 6);


// reverse

const arr = [1, 2, 3, 4, 5, 6];
arr.reverse(); // перегортає масив від останнього до першого елемента



/*


1. Дано два масиви: [1, 2, 3] i [4, 5, 6]. Об'єднайте їх у масив [1, 2, 3, 4, 5, 6] ---> concat
2. Даний масив [1, 2, 3]. Зробіть з нього масив [3, 2, 1] --> reverse
3. Даний масив [3, 4, 5]. Додайте йому в кінець елементи 4, 8, 10 ---> push
4. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль останній елемент та видаліть його з масива --> pop
5. Даний масив ['3', 7, 10]. Додайте йому на початок елементи 2, 8 ---> unshift




*/