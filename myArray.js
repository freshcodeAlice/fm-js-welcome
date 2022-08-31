class MyArray {
    constructor() {
        this.length = 0;
        // TODO: реалізувати додавання елементів масиву при створенні екземпляру
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
   
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => ({
                    done: i > this.length - 1,
                    value: this[i++]
                })
        }
    }
}

const myarr = new MyArray();
myarr.push(1, 2, 3, 4);


/* 
ДЗ: написати реалізацію методу flat() для MyArray()

new MyArray(42,2,3, 1, new MyArray(3, 2, 1, 2, new MyArray(4, 2, 1, 2)));

*/