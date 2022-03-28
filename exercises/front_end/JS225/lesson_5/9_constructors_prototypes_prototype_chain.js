function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  };
}

let maxi = new Dog('Maxi', 'German Shepard', 32);
let dexter = new Dog('Dexter', 'Rottwieler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // Woof!

// verify that every dog has a copy of the bark method

maxi.hasOwnProperty('bark');   // true
dexter.hasOwnProperty('bark'); // true
biggie.hasOwnProperty('bark'); // true

// prototypes are useful because we can share methods between objects of the same type
// all objects of a particular type share the same prototype object
// delegation means we can put shared methods in the prototype object
// if javascript needs access to a method that doesn't exist on a particular object, it searches up the chain for it
// property access

let DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'woof' : 'yip');
  }
};

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  // remove bark method
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'

maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false
Object.getPrototypeOf(maxi).bark === DogPrototype.bark;

///

Dog.prototype // The prototype object referenced by the .prototype property on Dog
// constructor prototype is an object referenced by .prototype that contains all shared methods or object instances
// object prototype is next object in the lookup chain that the current object is inheriting behavior from


function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'woof!' : 'yip');
};

let maxi = new Dog('Maxi', 'German Shepard', 32);
maxi.bark(); // woof
let dexter = new Dog('Dexter', 'Rottweiler', 12);
dexter.bark(); // yip

Dog.prototype.constructor; // [Function: Dog]

let maxi = new Dog('Maxi', 'German Shepard', 32);
maxi.constructor; // Dog
maxi.__proto__; // Dog.prototype
Object.getPrototypeOf(maxi); // Dog.prototype
maxi [[Prototype]] -> Dog.prototype

Dog.prototype.constructor = function() {};
maxi.constructor === Dog; // false
maxi instanceof Dog; // true

// overriding prototype

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);

dexter.bark = function() {
  console.log('WOOF');
}

maxi.bark(); // woof!
dexter.bark(); // WOOF