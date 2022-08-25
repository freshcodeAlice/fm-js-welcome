/* Exceptions */


/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Sum of a and b
 * @throws {RangeError} If a or b is not a positiv number
 * @throws {TypeError} If a or b is not a number
 */

function sumOfPositiveNumber(a, b) {
  if (a < 0 || b < 0) {
    // треба сповістити користувача, що число не підходить
    const error = new RangeError('Число менше нуля!');
    throw error; // return, тільки для помилок
  }
  if( typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('а і б мають бути числом!');
  }
  return a+b;
}


try {
  sumOfPositiveNumber(2, -2);
  // щось робимо, очікуючі, що тут може виникнути помилка
} catch (error) {
  console.log(error.message);
}



console.log('Usual code flow');