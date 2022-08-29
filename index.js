class Test {
  constructor(value1, value2) {
    // create {} --> this
    this.key1 = value1;
    this.key2 = value2;
  }

  static newMethod2(value) {
    // щось робимо
  }

  method() {
    // todo
  }

}

Test.newMethod1 = function (value) {
}

const obj1 = new Test(); // creating new instance
obj1.method(); // метод екземпляра

/* static methods */

 Test.newMethod1();