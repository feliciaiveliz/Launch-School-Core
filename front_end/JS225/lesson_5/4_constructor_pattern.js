// constructor function
// only use constructor functions to create objects

function Person(firstName, lastName = '') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

let john = new Person('John', 'Doe');
let jane = new Person('Jane');

john.fullName(); // John Doe
jane.fullName(); // Jane

john.constructor; // function Person(...)
jane.constructor; // function Person(...)

john instanceof Person; // true
jane instanceof Person; // true

/// without new operator

function Person(firstName, lastName = '') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

Person('John', 'Doe'); 
window.fullName(); // John Doe

// the global object is being used as the value of 'this', therefore we have created properties on the global object

/// implication if this is not returned from a constructor function

function Person(firstName, lastName) {
  if (!lastName) {
    return 'Please provide a last name';
  }

  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName);
  };
}

let noLastName = new Person('John');
console.log(noLastName); // logs instance of Person object
console.log(noLastName instanceof Person); // true

// (1) What naming convention separates constructor functions from other functions?
// Capitlizing the constructor function name

// (2) What will the code below output? Why?

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // TypeError because scamper is an undefined property on lizzy

// (3) What will the code below output? Why?

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // I"m scampering!