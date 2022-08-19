/* Даний масив з числами:
[0, 2, -1, 7, 11, 23, -5]
За допомогою методу forEach виведіть на консоль тільки ті числа, які більше 0 та менше 10.
*/

const array = [0, 2, -1, 7, 11, 23, -5];

array.forEach(function(elem){
    if(elem > 0 && elem < 10) {
        console.log(elem)
    }
})


/*

Створити масив з 10 елементів та заповнити його числами від 0 до 10 за циклом.


*/


//v1
const arr = new Array(10);
for (let i = 0; i < arr.length; i++) {
  arr[i]=i;
}

//v2
const arr2 = [];
for (let i = 0; i < 10; i++) {
    arr2.push(i);
  }