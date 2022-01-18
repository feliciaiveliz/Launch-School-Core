
let obj1 = {
  a: 1,
  b: 2,
  f1: function () {
    console.log(this.b);
  }
};

let obj2 = {
  a: 11,
  b: 22,
  f2: function (func) {
    func();
  }
};

obj2.f2(obj1.f1); 
// undefined
// want to return 22
/////////////////////////////////////////////////////////

"use strict";
let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);
console.log(foo()); // logs
console.log(bar()); // logs

///////////////////////////

function bar() {
  console.log('good morning');
}

window.inner = {
  bar() {
    console.log('good afternoon');
  },
};

let obj = {
  inner: {
    bar() {
      console.log('good night');
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log('wake up');
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  }
};

obj.foo(); 
// good night
// good afternoon
// good morning

///////////////////////////////////////////

let obj = {
  a : 'Hello',
  b : 'World',
  func : () => console.log(this.a)
};

let someVar = obj.func;

function anotherFunc(foo) {
  foo();
  foo();
}

anotherFunc(someVar);

// arrow functions
// let, const, var
// 