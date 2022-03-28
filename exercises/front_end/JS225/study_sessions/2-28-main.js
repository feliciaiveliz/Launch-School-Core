// object factory
function bird(name) {
  return {
    name,
    speak() {
      console.log("I'm a bird!");
    }
  };
}

let cardinal = bird();
let crow = bird();
console.log(cardinal.speak()); // I'm a bird!
console.log(cardinal.speak === crow.speak); // false


// pseudo classical w/ inheritance
function Animal() {
  this.kingdom = 'Animalia';
}

Animal.prototype.describe = function() {
  console.log("I'm an animal!");  
}

function Bird(name, kingdom) {
  Animal.call(this, kingdom);
  this.name = name;
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.speak = function() {
  console.log("I'm a bird!");
}

let cardinal = new Bird('Cardinal');

console.log(cardinal.speak()); // I'm a bird!
console.log(cardinal.describe()); // I'm an animal!
console.log(cardinal.kingdom); // Animalia


// oloo
let Animal = {
  init() {
    this.kingdom = "Animalia";
  }
}

let Bird = Object.create(Animal);

Bird.init = function(name) {
  this.name = name;
  this.class = 'Aves';
  return this;
};

Bird.speak = function() {
  console.log("I'm a bird!");
}

let owl = Object.create(Bird).init('Owl');
let robin = Object.create(Bird).init('Robin');


console.log(owl.speak()); // I'm a bird!
console.log(robin.speak === owl.speak); // true
console.log(Object.getOwnPropertyNames(owl)); // ['name', 'class']
console.log(robin); // { name: 'Robin', class: 'Aves' } 


                  


