/*
Linked List (зв'язаний список)

*/


class ListItem {
    constructor(v) {
        this._value = v;
        this.next = null;
        this.prev = null;
    }

    set value(v){
        this._value = v;
    }

    get value() {
        return this.value
    }
}


class LinkedList {
    constructor(...args) {
        this.length = 0;
        this.head = null;
        this.tail = null;

        for (const item of args){
            this.push(item);            
        }
    }

    push(v) {
        const newItem = new ListItem(v);
        if (this.length === 0) {
            this.head = newItem;
            this.tail = newItem;
        } else {
            this.tail.next = newItem;
            newItem.prev = this.tail;
            this.tail = newItem;
        }
        return ++this.length;
    }
}