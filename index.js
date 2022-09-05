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


/*
Написати функцію, яка приймає два зв'язаних списка та повертає новий список, який складається з двох переданих
*/

const list1 = new LinkedList(2, 3, 4);

const list2 = new LinkedList(8, 9, 10);

function concatList(list1, list2) {
    return new LinkedList(...list1, ...list2);
}

// 2, 3, 4, 8, 9, 10

/*
Написати функцію, яка приймає значення і список, і шукає елемент списку з цим значенням, повертає ListItem з таким значенням
*/

function searchItem(list, value) {
   for (let i = 0, item = list.head; i < list.length; i++) {
        if (item.value === value) {
            return item;
        } else {
            item = item.nextItem;
        }
   }
   return null;
}