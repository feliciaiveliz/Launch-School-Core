// all javascript objects have a internal [[Prototype]] property
// use Object.getPrototypeOf and Object.setPrototypeOf to get or set the internal [[Prototype]] property
// use Object.create to create objects -- it sets the internal [[Prototype]] property of the created object to the argument object

let foo = {};
let qux = Object.create(foo);
console.log(Object.getPrototypeOf(qux) === foo); // true
console.log(foo.isPrototypeOf(qux)); // true

///

let foo = {};
let bar = {};

let qux = Object.create(foo);
console.log(Object.getPrototypeOf(qux) === foo); // true
console.log(foo.isPrototypeOf(qux)); // true

Object.setPrototypeOf(qux, bar);
console.log(Object.getPrototypeOf(qux) === bar); // true
console.log(bar.isPrototypeOf(qux)); // true

/// prototype chain and Object.prototype Object

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

Object.getPrototypeOf(qux) === baz;  // true
Object.getPrototypeOf(baz) === bar;  // true
Object.getPrototypeOf(bar) === foo;  // true

foo.isPrototypeOf(qux); // true

/// problems

// (1) Use the method we learned above to assign foo below to a new Object with prot as its prototype.

let prot = {};
let foo = Object.create(prot); 

// (2) Use getPrototypeOf to demonstrate the prototypal relationship between prot and foo.

let prot = {};
let foo = Object.create(prot); 
console.log(Object.getPrototypeOf(foo) === prot); // true

// (3) Use isPrototypeOf to demonstrate the prototypal relationship between prot and foo.

let prot = {};
let foo = Object.create(prot);
console.log(prot.isPrototypeOf(foo)); // true

// (4) What will the last two lines of the code below return? Why?

let prot = {};
let foo = Object.create(prot);
prot.isPrototypeOf(foo);             // true
Object.prototype.isPrototypeOf(foo); // true
// Object.prototype is the default prototype of all objects
// Object.prototype is prot's prototype object since prot was created as an object literal
// Object.prototype is on foo's prototype chain



