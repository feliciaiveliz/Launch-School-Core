let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo); // foo is prototype of bar
let baz = Object.create(bar); // bar is prototype of baz

bar.a; // 1
baz.a; // 1
baz.c; // undefined

///

let foo = {
  hello() {
    return 'hello ' + this.name;
  },
};

let bar = Object.create(foo);
bar.name = 'world';
bar.hello(); // returns hello world

// the hello method is found on bar's prototype object foo
// creating an object behavior prototype chain gives us the ability to store data and behavior anywhere on an object's prototype chain

let dog = {
  say() {
    console.log(this.name + ' says Woof!');
  },

  run() {
    console.log(this.name + ' runs away');
  },
};

let fido = Object.create(dog);
fido.name = 'Fido';
fido.say(); // Fido says Woof!
fido.run(); // Fido runs away

// this approach is useful because we don't have to duplicate say and run methods on every dog
// if we need to modify any behavior for dogs, we only have to modify the prototype object and all dogs will pick up the changed behavior automatically
// prototypal inheritance

let dog = {
  say() {
    console.log(this.name + ' says woof!');
  },
};

let fido = Object.create(dog);
fido.name = 'Fido';
fido.say = function() {
  console.log(this.name + ' says woof woof!');
};

fido.say(); // Fido says woof woof!
let spot = Object.create(dog);
spot.name = 'Spot';
spot.say(); // Spot says woof!

///

let foo = {
  a: 1,
};

let bar = Object.create(foo);
bar.a = 1;
bar.b = 2;
bar.hasOwnProperty('a');         // true
Object.getOwnPropertyNames(bar); // ['a', 'b']
delete bar.a;
bar.hasOwnProperty('a'); // false
Object.getOwnPropertyNames(bar); // ['b']
bar.hasOwnProperty('c'); // false

// Object.prototype is king daddy object -- all objects inherit methods from the Object.prototype
// Object.prototype.toString() -- returns string rep. an object
// Object.prototype.isPrototypeOf(obj) -- test if object is in object's prototype chain
// Object.prototype.hasOwnProperty(prop) -- test whether property is defined on object itself

// (1) What will the code below log to the console?
// 1, because foo is the prototype object of bar, and any behaviors on foo added even after we create an object from it will automatically inherit those behaviors from it
let foo = {};
let bar = Object.create(foo); 
foo.a = 1;
console.log(bar.a); // 1

// (2) What will the code below log to the console?
// 2, because it is possible to override behaviors or properties for particular objects without it affecting all objects on the prototype chain
let foo = {};
let bar = Object.create(foo);
foo.a = 1;
bar.a = 2;
console.log(bar.a); // 2

// (3) Given the code below, do we know for certain that on the last line we are ultimately referencing a property owned by boo? How can we test that far is not delegating to boo?

let boo = {};
boo.myProp = 1;
let far = Object.create(boo);
// code
far.myProp; // 1
console.log(far.hasOwnProperty('myProp')); // false
console.log(far.getOwnPropertyNames()); // []
console.log(far); // {}

