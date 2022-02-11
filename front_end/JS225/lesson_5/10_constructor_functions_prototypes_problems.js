// (1) What does the following code log to the console?

let a = 1; // declare global scoped variable 'a' set to 1
let foo;   // declare foo, set to undefined
let obj;   // declared obj, set to undefined

function Foo() {            // constructor function Foo
  this.a = 2;               // create property a, set to 2 (execution context tbd)
  this.bar = function() {   // create property bar method, log value of this.a
    console.log(this.a);
  };
  this.bar();               // return value of Foo() call is execution of bar(), which logs this.a
}

foo = new Foo();            // create foo instance of Foo() // executes Foo(), which sets properties of 'a' on foo to 2
// also logs 2

foo.bar();     // 2
Foo();         // executes Foo as a regular function in the global scope, sets 'a' as a property on the global object, 'this' is now window and references 2
 
obj = {};      // create empty object
Foo.call(obj); // 2
obj.bar();     // 2

console.log(this.a);
// 2
// 2
// 2
// 2
// 2
// 2

// (2) What does the following code log to the console?

let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);       // NaN -- this is set to RECTANGLE object when called, but the object doesn't define width and height properties
console.log(rect1.perimeter);  // NaN

// How do you fix this problem?

let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);

// (3) Write a constructor function Circle, that takes a radius as an argument. You should be able to call an area method on the created objects to get the circle's area. Test your implementation with the following code:

function Circle(radius) {
  this.radius = radius,
  this.area = function() {
    return Math.PI * (this.radius ** 2);
  }
}

Circle.prototype.radius = function() {
  return Math.PI * (this.radius ** 2);
};

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // 28.27
console.log(b.area().toFixed(2)); // 50.27

// (4) What will the following code log out and why?

let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype.swingSword = function() { // swingSword method is defined on prototype after ninja is created, but ninja objects have access to this method
  return this.swung;                      // prototype chain lookup happens when JS calls swingSword on object and it can delegate behaviors to the prototype object
};

console.log(ninja.swingSword()); // true

// (5) What will the following code log out and why?

let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja(); // ninja object is inheriting methods from the original prototype object, can't find swingSword method on prototype chain

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword()); // undefined or error

// (6) Implement the method described in the comments below:

let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};

console.log(ninjaA.swing().swung); // true
console.log(ninjaB.swing().swung); // true

// In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

let ninjaB = new ninjaA.constructor;