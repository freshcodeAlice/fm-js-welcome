let value = 10; // глобальна область видимості



function wrapper(){
    let value = 20; // локальна область видимості
    console.log('WRAPPER function', value);

    return function log() {
        console.log('LOG function', value);
    }
}


//const fun2 = wrapper();

//fun2();



/* */


// function counter() {
//     let i = 0;
//     i++;
//     return i;
// }



function makeCounter() {
    let i = 0;
    return function() {
        return i++;
    }
}

 const fn = makeCounter();
 fn();


 const fn2 = makeCounter();


 ////////////


 function makeCounter2() {
    let counter = 0;
    return {
        increment() {
            return ++counter;
        },
        decrement() {
            return --counter;
        }
    }
 }

 const fnObj = makeCounter2();




 /////////////


 function outer(arg) {
        return function() {
            return arg;
        }
 }

const inner = outer();
inner();

 /*

Написати функцію, яка приймає параметр і повертає іншу функцію, 
що очікує другий параметр і повертає суму двох параметрів

 */


function createAdder(n) {
    return function (m){
        return n=m+n;
    }
}


// const adder = createAdder(5);
// adder(10);


////////URL/////////
// protocol - https
// - ://
//hostName - developer.mozilla.org
// path - ru/docs/Learn/

const createURL = function (protocol) {
    return function (hostName) {
        return function (path) {
            return `${protocol}://${hostName}/${path}`
        }
    }
}

const rememberHost = createURL('http');
    const site1 = rememberHost('test.org');
    const site2 = rememberHost('site.com');
    const site3 = rememberHost('wiki.org');


site1();