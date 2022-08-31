class MyArray {
    constructor() {
        this.length = 0;
    }

    static isMyArray(obj) {
        return obj instanceof MyArray; 
    }

    push(...rest) {
        for (let i = 0; i < rest.length; i++) {
            this[this.length] = rest[i];
            this.length++;
        }
    }

    pop () {
        let lastItem = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastItem;
    }

    forEach (fn) {
        for (let i = 0; i < this.length; i++) {
            fn(this[i]);
        }
    }

    map(fn) {
        const newArr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArr.push(fn(this[i], i, this));
        }
        return newArr;
    }
  
}

/* 
Напишіть реалізацію методу map()

*/