// Symbol


const bl = true; // false - boolean
const b1 = new Boolean({});


const str = 'hello';
const str2 = new String('hello'); 


const mySymbol = Symbol(); // без new!!

// const symb2 = Symbol('My first symbol'); // label for human


const obj = {
  test: 1,
  [mySymbol]: 123,
  abradabra: '2123'
}