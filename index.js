/// sort()

const array = [5, 3, 9, 21, 5, 1, 2, 4];

//array.sort(); // default sort


const arrayWords = ['bbb', 'abb', 'aaa', 'aba' ];
//arrayWords.sort(); // default sort


function compareFunction(a, b){ // функція-компаратор
    if (b > a) {
        return -1
    } else {
        return 1;
    }
}  
/* returning:
-1 - спочатку а, потім b
0 - елементи залишаються на місці
1 - спочатку b, потім а

а і b - два сусідні елементи

*/

array.sort(compareFunction);

/* Написати функцію-компаратор, яка відсортує масив з числами у ЗВОРОТНЬОМУ порядку */