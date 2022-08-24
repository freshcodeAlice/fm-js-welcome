/* 
Задачка 1: Написати функцію, яка робить кожне слово у переданому рядку з великої літери

*/

function eachWordInUpper(str) {
  const wordArray = str.split(' ');
  const resultWordArray = [];
  for (let i = 0; i < wordArray.length; i++) {
      // wordArray[i][0] = wordArray[i].charAt(0).toUpperCase();   
      let word = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
      resultWordArray.push(word);
  }
  return resultWordArray.join(' ');
}


/*

Таска:
Написати функцію truncate, яка приймає в якості аргументів рядок (str) і довжину (strLength).
Якщо довжина > strLength, то врізати рядок до цієї довжини і в кінці додати "..."
Якщо рядок менший, нічого не робити

truncate('hello', 2) // 'he...'
truncate('hello', 10) // 'hello'
*/

function truncate(str, strLength) {
  if (str.length <= strLength) {
    return str;
  }

  const newStr = str.slice(0, strLength);
  return newStr+'...'

}


/*

Написати функцію checkSpam, яка повертає true, якщо переданий рядок містить слова 'xxx' або 'viagra', інакше false

checkSpam('buy ViAgRa now') // true
checkSpam('free xxxxxx' ) // true
checkSpam('innocent rabbit') //false


*/

//variant 1

function checkSpam(str) {
  const lowStr = str.toLowerCase();
  return lowStr.includes('viagra') || lowStr.includes('xxx')
}

//variant 2


function checkSpam2(str) {
  const spamArray= ['viagra', 'xxx', 'drags'];

  let flag = false;

  for (let i = 0; i < spamArray.length; i++) {
    if(str.toLowerCase().includes(spamArray[i])) {
      flag = true
    }
  }
  return flag
}




/*

Задачка: написати функцію, яка перевіряє, чи є переданий рядок Паліндромом. не зважаючи на регістр
Паліндром - це коли рядок з обоих сторін читається однаково.

Anna - паліндром
Mama - не паліндром
Namman - паліндром
*/


function palindrom(str) {
  return str.toLowerCase().split('').reverse().join('') === str.toLowerCase()
}