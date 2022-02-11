// instance properties

maxi.weight; // 32
Dog.weight;  // undefined

// instance methods
// these are methods that are stored on the instances prototype object
// methods aren't stored on the instances themselves, but the methods still operate on them

maxi.bark(); // Woof!
Dog.bark();  // TypeError

// static properties
// these are defined and accessed directly on the constructor, not on instance or prototype

Dog.species = 'Canis lupus';
console.log(`Dogs belong to the species ${Dog.species}`);

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  Dog.allDogs.push(this);
}

Dog.allDogs = [];

// static methods

Dog.showSpecies = function() {
  console.log(`Dogs belong to the species ${Dog.species}`);
};

Dog.showSpecies();
