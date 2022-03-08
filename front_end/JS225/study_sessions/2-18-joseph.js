*/

// object factory
// function cat() {
//   return {
//     species: 'feline',
//     speak() {
//       console.log('meow');
//     }
//   }
// }

// let cat1 = cat();
// let cat2 = cat();

// console.log(cat1);
// console.log(cat2);
// console.log(cat1.speak === cat2.speak); // false

// 2 disadvantages:
// 1. there's no way to determine an object's type
//    - you can't test to see if an object is created from a particular factory function
// 2. all properties and methods are copied into all objects -- increasing redundancy in a program

// constructor pattern
// function Cat() {
//   this.species = 'feline';  
  
//   this.speak = function() { // on each object instance, not on .prototype
//     console.log('meow');
//   }
// }


// let cat1 = new Cat();
// let cat2 = new Cat();

// console.log(Object.getPrototypeOf(cat1) === Cat.prototype);
// console.log(Object.getOwnPropertyNames(Cat.prototype))
// console.log(cat2.__proto__ === Cat.prototype); // true

// create an empty object
// set this to point to the new object
// executes the constructor
// sets the internal [[Prototype]] property of the new object to .prototype property of the constructor function
// returns the new object, unless explicitly told otherwise

// // pseudo-classical
// function Animal() {
//   this.kingdom = "Animalia";
// }

// Animal.prototype.speak = function() {
//   console.log('speak');
// }


// // // console.log(cat1);
// // // console.log(cat2); 
// // // console.log(Object.getOwnPropertyNames(Cat.prototype));
// // // console.log(cat1.speak === cat2.speak); // true

// // // sub-class from Cat
// function Cat() {
  
// }

// // console.log(Kitten.prototype.__proto__ === Function.prototype);
// // console.log(Object.getOwnPropertyNames(Animal.prototype));


// Cat.prototype = Object.create(Animal.prototype); // creating an instance or a copy of Animal.prototype
// Cat.prototype.constructor = Cat;
// Cat.prototype.meow = function() { return 'meowing' }

// let someAnimal = new Animal();
// let cat1 = new Cat();
// let cat2 = new Cat();

// // console.log(Object.getPrototypeOf(Cat.prototype) === Animal.prototype); // ['constructor', 'speak']]
// // console.log(Cat.prototype.hasOwnProperty('speak')); // false;
// //console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Cat.prototype))) 
// console.log(Object.getOwnPropertyNames(Cat.prototype));  //instanceof Animal.prototype
// // console.log(Cat.prototype.__proto__ === Animal.prototype)


// function Animal() {
//   this.kingdom = 'Animalia';
// }

// Animal.prototype.breathe = function() {
//   console.log("I'm breathing.");
// }

// function Dog() {}

// let spot = new Dog();

// let sword = {weapon: 'general sword'};
// let longsword = Object.create(sword);

// console.log(longsword.weapon)

// // console.log(Object.getOwnPropertyNames(Dog.prototype)); // ['constructor']
// // console.log(Object.getOwnPropertyNames(Animal.prototype)); // ['constructor', 'breathe']
// // console.log(spot.breathe()); // error
// // we don't want 'breathe' on Dog.prototype, but we want access to it through Animal.prototype by making Dog's .prototype an instance of Animal.prototype
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// console.log(Dog.prototype.__proto__ === Animal.prototype); // ['constructor']

class Animal {
  constructor(name) {
    this.name = name;
    this.kingdom = "Animalia";
  }
  
  breathe() { // on Animal.prototype
    console.log("I'm breathing");
  }
}

let someAnimal = new Animal('Animal Name');

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.species = 'canine';
  }
  
  bark() {
    //...
  }
}

let spot = new Dog('Spot');
console.log(spot); // { name: "Spot", kingdom: "Animalia", species: "canine" }
console.log(Object.getOwnPropertyNames(Dog.prototype)); // { constructor, bark }
console.log(Object.getOwnPropertyNames(Animal.prototype)); // { breathe }
console.log(spot.breathe()); // i'm breathing
//console.log(someAnimal)

// function Animal() {
//   this.kingdom = "Animalia";
// }

// Animal.prototype.breathe = function() {
//   console.log("I'm breathing");
// };

// console.log(Animal.prototype.constructor === Animal);