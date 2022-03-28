var animal = {
  type: 'mammal',
  breathe() {
    console.log("I'm breathing");
  },
}

var dog = Object.create(animal);
var terrier = Object.create(dog);

console.log(dog);      // {}
console.log(dog.type); // mammal
console.log(dog.__proto__); // { type: 'mammal', breathe: f }
console.log(dog.__proto__ === animal); // true

console.log(terrier.type);  // 'mammal'
console.log(terrier.__proto__); // {}
console.log(terrier.__proto__ === dog); // true
console.log(terrier.__proto__ === animal); // false

console.log(animal.isPrototypeOf(terrier)); // true
console.log(animal.isPrototypeOf(dog));     // true
console.log(dog.isPrototypeOf(terrier));    // true

console.log(Object.getPrototypeOf(terrier) === dog);    // true
console.log(Object.getPrototypeOf(terrier) === animal); // true

dog.speak = function() {
  console.log('woof woof');
};

terrier.speak(); // 'woof woof'

/// adding reptiles and mammal

var Animal = {
  init(type) {
    this.type = type;
  },

  breathe() {
    console.log("I'm breathing");
  },
}

var Dog = Object.create(Animal);
var Terrier = Object.create(Dog);

var rex = Object.create(Terrier);
rex.init('canine');  
var mammal = Object.create(Animal);
mammal.init('mammal');
var reptile = Object.create(Animal);
reptile.init('reptile');

console.log(mammal.type);  // mammal
mammal.breathe();          // I'm breathing
console.log(reptile.type); // reptile
reptile.breathe();         // I'm breathing

// pseudo-classical pattern

function createAnimal() {
  return {
    type: 'mammal',

    breathe() {
      console.log("I'm breathing");
    }
  }
}

var animal = createAnimal();

console.log(animal.type); // mammal
animal.breathe();         // I'm breathing
console.log(Object.getOwnPropertyNames(animal)); // ['type', 'breath']

function Animal() {
  this.type = 'mammal';

  this.breathe() {
    console.log("I'm breathing");
  };
}

var animal = new Animal();

console.log(animal.constructor === Animal); // true
console.log(animal.constructor);  // f Animal() {}
console.log(Object.getOwnPropertyNames(animal)); // ['type', 'breathe']
console.log(animal.__proto__);   // {constructor: f}
console.log(Animal.prototype); // {constructor: f}
console.log(animal.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.constructor); // f Animal() {} // the actual constructor function

///

Dog.prototype = new Animal();
var dog = new Dog();   // create new dog object from Dog that will inherit from Animal
// dog objects will now be able to inherit behaviors and even properties straight from the Animal constructor
// do this if you want all objects to inherit behaviors AND properties
console.log(dog.type); // mammal
dog.breathe();         // I'm breathing
console.log(dog.constructor); // f Animal() {}
// point the dog constructor back to Dog while still inheriting from Animal
Dog.prototype.constructor = Dog;
console.log(dog.constructor); // f Dog() {}

/// redirecting Terrier prototype to point to object referenced by Dog.prototype -- Animal.prototype

function Animal() {
  this.type = 'mammal';
}

Animal.prototype.breathe = function() {
  console.log("I'm breathing");
}

function DOg() {
  this.legs = 4;
}

function Terrier() {}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

Terrier.prototype = Object.create(Dog.prototype);
