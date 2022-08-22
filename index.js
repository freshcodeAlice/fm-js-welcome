function MyArray(){
    this.length = 0;
  
}

function MyProtoArray() {
    this.push = function() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
    },
    this.pop = function(value) {
        let lastItem = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastItem;
    },
    this.forEach = function(fn) {
        for (let i = 0; i < this.length; i++) {
            fn(this[i]);
        }
    }
}


MyArray.prototype = new MyProtoArray();

