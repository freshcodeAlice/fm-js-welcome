/*
Задача: написати функцію, яка приймає рядок і повертає кількість голосних літер, що містяться в рядку.

Голосні: ['a', 'e', 'i', 'o', 'u'];

*/

const countVowels = (str) => str.toLowerCase().split('').filter((ltr) => ['a', 'e', 'i', 'o', 'u'].includes(ltr)).length;


