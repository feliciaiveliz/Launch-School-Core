class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this); // object instance?
    console.log(Object.getOwnPropertyNames(proto)); // global object?
    
  }

  first() {}        // instance function
  second() {}       // instance function
  static third() {} // class function
}

let example1 = new Example(); // ['constructor', 'first', 'second']
console.log(Object.getOwnPropertyNames(example1));

// the value of 'this' is set to a new object instance of a class
// 'this' does not have a value that is set to the class itself
// static properties do not have a this value
// static methods are not properties of 'this'
// static methods are properties of the class itself

/// this in function contexts
var obj = { a: 'custom' };
var a = 'global';

function whatsThis() {
  return this.a;
}

whatsThis();                  // global
whatsThis.call(obj);          // custom
whatsThis.apply(obj, [1, 2]); // custom

// this and object conversion
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// first argument is object context to use as value of this
// other arguments are passed as args in the function call

// first argument is object context to use as value of this
// other argument is array whose elements are used in the function call
console.log(add.call(o, 5, 7)); // 16
console.log(add.apply(o, [10, 20])); // 34

// with call and apply, if value is passed as this is not an object, js will attempt to convert it to an object
// null and undefined become global object
// primitives will be converted to object using their constructor

function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);         // [object Number]
bar.call('foo');     // [object String]
bar.call(undefined); // [object global]

/// bind returns a new function with the passed in object set permanently to the calling function

function f() {
  return this.a;
}

var g = f.bind({ a: 'hello' });
console.log(g()); // hello

var h = g.bind({ a: 'hi' });
console.log(h()); // hello

var o = { a: 1, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 1, 1, hello, hello 

// arrow functions

// arrow functions -- this does not apply to arrow functions -- arrow functions use the lexical scope to determine the value of this 

let globalObject = this;
let foo = (() => this);
console.log(foo() === globalObject); // true

// if using call, apply or bind on an arrow function, 'this' should be passed 'null'

let obj = { func: foo }; // foo is arrow function
console.log(obj.func() === globalObject); // true

// attempting to set this using call
console.log(foo.call(obj) === globalObject); // globalObject

// attempting to set this using bind
foo == foo.bind(obj);
console.log(foo() === globalObject); // true

// no matter what, foo's this value is always set to the global object or the object in its lexical scope in creation
// you cannot change it

// arrow function's value of this is set to the enclosing lexical context when defined inside of another function

// create an obj object with bar that returns a function, which returns an arrow function
// this in the arrow function is bound to the this of the enclosing function
// the value of the returned arrow function becomes the return value of bar method

let obj = {
  bar() {
    let x = (() => this);
    return x;
  }
};

// call bar as a method of obj, setting 'this' to obj
// assign a reference to the returned function to 'fn'
let fn = obj.bar();
// calling fn() as a standalone function normally would result in the value of this referring to the global object or undefined in strict mode
console.log(fn() === obj); // true
// if you referenc the method on obj without actually calling it, the value of this is global
let fn2 = obj.bar; // set fn2 to a function whose this is global
console.log(fn2() === obj); // false
console.log(fn2()() === global); // true

///

//class is just a fast way to do the exact same thing Psudo Classical Pattern does.

class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this); 
    //They are just recreating a ressemblance of the [[Prototype]] Object that holds the behaviours
  }
  
  first(){ return "I come from the prototype obj 1" }   // instance method defined on the [[Prototype]]
  second(){ return "I come from the prototype obj 2 " }  // instance method defined on the [[Prototype]]
  static third(){}  // we didn't cover it in 225, but yes a class property
}


let someInstance = new Example(); // ['constructor', 'first', 'second']);

console.log(someInstance.first());  // I come from the prototype obj 1
console.log(someInstance.second()); // I come from the prototype obj 2 

console.log(Object.getOwnPropertyNames(someInstance)); // []
console.log(Object.getOwnPropertyNames(Example.prototype)); //[ 'constructor', 'first', 'second' ]
console.log(Object.getOwnPropertyNames(Example))  // [ 'length', 'name', 'prototype', 'third' ]