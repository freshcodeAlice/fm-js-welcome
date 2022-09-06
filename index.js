/* Stack */

class Stack {
    constructor (maxSize) {
        this._maxSize = maxSize;
        this._size = 0;
    }

    get isEmpty() {
        return this._size === 0;
    }

    get size(){
        return this._size;
    }

    push(value) {
        if(this.size >= this._maxSize) {
            throw new Error('Stack overflow');
        }
        this[`_${this.size}`] = value;
        this._size++;
        return this._size;
    }

    pop() {
        const lastItem = this[`_${this.size-1}`];
        delete this[`_${this.size-1}`];
        this._size--;
        return lastItem;
    }

    pick() {
        return this[`_${this.size-1}`];
    }
}