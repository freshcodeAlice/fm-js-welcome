//alert('Hello'); // alert - вікно з повідомленням
let a = Number(prompt('Введіть перше число')); // Вікно з формой для вводу певного рядка
let b = Number(prompt('Введіть друге число'));
let result = a+b;

if(Number.isNaN(result)) {
    console.log('Ти не правий, введи число')
} else {
    console.log(result);
}