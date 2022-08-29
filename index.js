/*

Напишіть клас RangeValidator
дві властивості:
from, to

Обидва числа
From не може бути більше ніж to

Завдання: реалізувати сеттери для обох властивостей
Геттер getRange, який має повертати масив цілих чисел цього діапазону


from = 2; to = 5
getRange() // [2, 3, 4, 5]


Задачка з *:
реалізувати метод validate, який приймає число і повертає true, якщо це число входить у діапазон, false якщо ні

 */

class RangeValidator {
  constructor(from, to) {
    this.to = to;
    this.from = from; // this._from
  }

  set from (value) {
    if (typeof value !== 'number') {
      throw new TypeError('From must be a number');
    } 
    if (value > this._to) {
      throw new RangeError('From must be a larger than to');
    }
    this._from = value;
  }

  set to(value) {
    if (typeof value !== 'number') {
      throw new TypeError('To must be a number');
    }
    this._to = value;
  }

  get to(){
    return this._to;
  }

  get from() {
    return this._from;
  }


  get getRange() {
    const arr = [];
    for (let i = this._from; i < this._to; i++) {
      arr.push(i);
    }
    return arr;
  }


  validate(num) {
    return this.getRange.includes(num);
  }
}