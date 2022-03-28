let aneesh = {
  name: "Aneesh",
}

console.log(aneesh.constructor); // logs Object
console.log(aneesh.hasOwnProperty('constructor')); // false
console.log(Object.hasOwnProperty('constructor')); // false
console.log(Object.prototype.hasOwnProperty('constructor')); // true
console.log(Object.prototype.constructor === aneesh.constructor); // true
// objects have constructors even if they are not created directly from a constructor function
// Does this make Object, Array and Function constructor functions?


// Object.prototype and Array.prototype both have their __proto__ set to Function.prototype
// does this make them constructor functions?
// all functions have a .prototype property that references an object
// all of theses objects (.prototype) contain a constructor property
// even Object.prototype and Array.prototype
// __proto__ is defined on an object and tells us what the next object on the prototype chain is
// it tells us what an object's prototype is

// an object's prototype property object (Object.prototype, Array.prototype, Function.prototype, and any other constructor functions),
// itself has a __proto__ property that tells us what it's prototype object is 
// (1) (Function.prototype.__proto__ and Array.prototype.__proto__ both point to Object.prototype as their prototype object)
// (2) (We have Object.prototype, Function.prototype, Array.prototype, which is similar to any constuctor functiont that has a .prototype property ex:, function Cat() {} -> Cat.prototype
// (3) (Object.__proto__ and Array.__proto__  both point to Function.prototype)
// (4) (Array.constructor and Object.constructor both point to Function)
// (1.q) (Why does Function.prototype and Array.prototype have __proto__'s of their own? Why do these prototype objects need a prototype?)
// (2.q) (Since Object, Array, and Function have a .prototype property, does that make them constructor functions for objects, arrays and functions?)
// (3.q) (Why does Object.__proto and Array.__proto__ point to Function.prototype? I don't know what the relationship is?)
// (4.q) (Unless we explicitly create an object from a constructor that we create ourselves, does all other objects have their constructors set to Function?)
