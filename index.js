/* новий масив, кожен елемент якого = елемент зі старого масиву, *2
*/

const array = [2, 3, 4, 5, 1, 2];

 const newArray = array.map(function(elem) {
   return elem * 2;
 }).reverse().join(','); // chaining
