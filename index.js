
/*

function MyArray(){
    this.length = 0;

    this.push = function() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
    }

    this.pop = function(value) {
        let lastItem = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastItem;
    }


    this.forEach = function(fn) {
        for (let i = 0; i < this.length; i++) {
            fn(this[i]);
        }
    }
}


const arr = new MyArray();





*/


const cat = {
    name: 'Barsik',
    color: 'red',
    age: 1
};

const cat2 = {
    name: 'Murzik',
    color: 'black',
    age: 5
}

const catMethods = {
    run: function() {
        console.log('Cat is running');
    },
    meow: function () {
        console.log('Meow!');
    }
}


cat.__proto__ = catMethods;
cat2.__proto__ = catMethods;