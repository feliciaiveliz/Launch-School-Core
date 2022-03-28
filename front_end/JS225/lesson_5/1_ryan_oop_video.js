// (1) What is Object Oriented Programming in context of JavaScript?
// Object oriented programming in javascript utitilizes objects to organize behaviors. Objects can be created from other objects and those new objects can inherit behaviors and attributes from their prototype object.

// (2) Is javascript object oriented or not? 
// Yes, Javascript is an object oriented language in that it uses objects and prototypes to establish and create inheritance. 

// (3) What are the advantages of OOP?
// OOP programming allows us to easily organize code into objects. Changes to a specific object can be contained within that object and it won't affect the rest of the program.
// It's also a more effiecient way to program because we can create behaviors and properties for individual objects in one place without having to define them on each individual object.

// (4) What are the disadvantages of OOP? 
// ?

// (5) What is encapsulation in context of OOP? Present an example that illustrates this concept.

// (6) In JavaScript, how does encapsulation differ from encapsulation in most other OO languages?

// (7) What is inheritance in context of JS?
// Inheritance is carried out through the use of prototype objects. Objects can inherit from other objects that create them, and inherit any behaviors defined in that prototype object.
// An object doesn't have to have any behaviors or states defined on itself, but can delegate these to the prototype object.

// (8) What makes JavaScript different from other OOP languages?
// Javascript uses prototypes to establish inheritance and relationships between objects
// While some other languages use classes to acheive OOP

// (9) What is prototypal inheritance? Present an example that illustrates this concept.

const obj = {
  monkey: 'yep',
};

console.log(typeof obj === 'object');   // true
console.log(typeof obj === 'function'); // false

console.log(obj.hasOwnProperty('monkey'));   // true
console.log(obj.hasOwnProperty('elephant')); // false

console.log(typeof Object); // function

console.log(obj.__proto__ === Object.prototype); // true
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

console.log(obj.constructor === Object); // true
console.log(obj.prototype);              // undefined

// __proto__ is what JS uses to keep lookinh up prototype chain to for properties it doesn't find in the object we're looking at