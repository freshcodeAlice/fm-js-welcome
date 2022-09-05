/*
Linked List (зв'язаний список)

*/


class ListItem {
    constructor(v) {
        this._value = v;
        this.nextItem = null;
        this.prev = null;
    }

    set value(v){
        this._value = v;
    }

    get value() {
        return this._value
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
            this.tail.nextItem = newItem;
            newItem.prev = this.tail;
            this.tail = newItem;
        }
        return ++this.length;
    }

    [Symbol.iterator]() {
        return new LinkedListIterator(this)
    }

}


class LinkedListIterator {
    constructor(list){
        this.list = list;
        this.currentNode = null;
    }

    next() {
        this.currentNode = this.currentNode ? this.currentNode.nextItem : this.list.head;

        return {
            done: !this.currentNode,
            value: this.currentNode ? this.currentNode.value : undefined
        }
    }
}