// (1) Follow the steps below:

// Create an object called shape that has a getType method.
// Define a Triangle constructor function whose prototype is shape. Objects created with Triangle should have four own properties: a, b, c (representing the sides of a triangle), and type.
// Add a new method to the prototype called getPerimeter.
// Test your implementation with the following code:

let shape = {
  getType() {
    return this.type;
  }
}

function Triangle(a, b, c, type) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}
Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function() {
  return (this.a + this.b + this.c);
};



let t = new Triangle(3, 4, 5);
console.log(t.constructor === Triangle);          // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t)); // true
console.log(t.getPerimeter());       // 12
console.log(t.getType());            // 'triangle'

// (2) Since a constructor is just a function, it can be called without the new operator, and this can lead to unexpected results and errors especially for inexperienced programmers.
// Write a constructor function that can be used with or without the new operator, and return the same result in either form. Use the code below to check your solution:

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);       // Jane Doe
console.log(user1.name); // John Doe
console.log(user2.name); // John Doe

// (3) Create a function that can create an object with a given object as its prototype, without using Object.create.

function createObject(obj) {
  return Object.setPrototypeOf({}, obj);
}

// or

function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
foo.isPrototypeOf(bar);        // true

//  (4) Similar to the problem above, without using Object.create, create a begetObject method that you can call on any object to create an object inherited from it:

function begetObject() {
  return Object.setPrototypeOf({}, Object.prototype);
}

let foo = {
  a: 1,
};

let bar = foo.begetObject();
foo.isPrototypeOf(bar);

// (5) Create a function neww, so that it works like the new operator. For this practice problem, you may use Object.create.

// sets the value of this to the newly created object
// creates a new object 
// return this, or another object
// executes the constructor function

function neww(constructor, args) {
  let object = Object.create(constructor.prototype);
  let result = constructor.apply(object, args);
  return typeof result === 'object' ? result : object;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
console.log(john.greeting());  // Hello, John Doe
console.log(john.constructor); // Person(firstName, lastName) {...}
