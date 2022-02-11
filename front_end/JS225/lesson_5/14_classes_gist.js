// class syntax for definitions and expressions

// pseudo-classical pattern

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle); // function
console.log(rec instanceof Rectangle); // true
console.log(rec.constructor); // [Function: Rectangle]
console.log(rec.getArea());  // 50

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle); // function
console.log(rec instanceof Rectangle); // true
console.log(rec.constructor); // [class Rectangle]
console.log(rec.getArea()); // 50

// class expressions

let Rectangle = class {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getArea() {
    return this.width * this.length;
  }
};

// classes as first-class citizens
// first class citizen is a value that can be passed into a function, returned from a function and assigned to a variable
// like functions, classes are first-class citizens
// you can pass classes into functions as arguments
// classes are first-class objects

function createObject(classDef) {  // returns a new class object -> new variable is an object of the class Foo
  return new classDef();
}

class Foo {
  sayHi() {
    console.log('Hi');
  }
}

let obj = createObject(foo);
obj.sayHi(); // Hi!
typeof Foo; // function

// static methods and properties

Array.isArray([1, 2, 3]); // true
[1, 2, 3].isArray();      // TypeError

// Define static methods on custom constructor function

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.getDescription = function() {
  return 'A rectangle is a shape with 4 sides';
}

console.log(Rectangle.getDescription()); //  // A rectangle is a shape with 4 sides

// or use static keyword

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  static getDescription() {
    return 'A rectangle is a shape with 4 sides';
  }

  getArea() {
    return this.length * this.width;
  }
}

console.log(Rectangle.getDescription()); // A rectangle is a shape with 4 sides.

// set static property after defining class 
Rectangle.description = 'A rectangle is a shape with 4 sides';

// do the same thing with static keyword inside of class
class Rectangle {
  static description = 'A rectangle is a shape with 4 sides';
}

