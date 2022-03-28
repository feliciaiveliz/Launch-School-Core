// every function has a .prototype property
// objects created by the constructor have the constructor's prototype property assigned to the object as its prototype

let Foo = function() {};  // constructor
let obj = Foo.prototype;  // assign constructor's prototype to obj

let bar = new Foo();  // instance
let baz = new Foo();  // instance

Object.getPrototypeOf(bar) === obj;  // true
Object.getPrototypeOf(baz) === obj;  // true

bar.constructor === Foo;  // true
baz.constructor === Foo;  // true

bar instanceof Foo;       // true
baz instanceof Foo;       // true

/// deconstruct constructor function

function Foo(a, b) {
  this.a = a;
  this.b = b;
}

// when Foo is called with new, as a constructor

function Foo(a, b) {
  // this = new Object(); // this is assigned to a new object
  // Object.setPrototype(this, Foo.prototype); // sets the new objects prototype property ([[Prototype]]) to the constructors prototype

  this.a = a;
  this.b = b;

  return this; // return the newly created object
}

// another way to write it with Object.create()
function Foo(a, b) {
  // this = Object.create(Foo.prototype);

  this.a = a;
  this.b = b;

  // return this; // return the newly created object
}

// everytime we create an object from a constructor, that new object is prototype linked to the object referenced by the constructor's .prototype property
// use the constructor and it's prototype (pseudo-classical) to set up behavior delegation

let Dog = function() {};

Dog.prototype.say = function() {
  console.log(this.name + ' says woof!');
}

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
}

let fido = new Dog();
fido.name = 'Fido';
fido.say(); // Fido says woof!
fido.run(); // Fido runs away.

let spot = new Dog();
spot.name = 'Spot';
spot.say(); // Spot says woof!
spot.run(); // Spot runs away.