// 1. What is the value of `this` here? Why is that?

// "use strict";

// function example() {
//   return this;
// }

// console.log(example());


// 2. Demonstrate how we can use `call` and `apply` to get a total of `10`.

// function add(three, four) {
//   console.log(this.one + this.two + three + four);
//   //return args.reduce((sum, num) => sum += num) + this.one + this.two
// }

// let digits = {
//   one: 1,
//   two: 2,
// };

// console.log(add.call(digits, 3, 4));
// console.log(add.apply(digits, [3, 4])); 
// call  (log 10)
// apply (log 10)

// // 3. What concept does this code example demonstrate? Show at least 2 ways to fix the problem.

let coordinates = {
  x: 0,
  y: 0,
  display() {
    console.log(`(${this.x}, ${this.y})`);
  },
}

let point = coordinates.display;
console.log(point());       // (undefined, undefined)

// // code below this line -- log (0, 0)

// // 4. Why is it that we can log the sentence `Howdy from Texas!`, even though `greet` is out of scope after `greeting` returns and finishes executing?

// function greeting(greet) {
//   return function() {
//     console.log(greet + " from Texas!");
//   }
// }

// let texasGreeting = greeting('Howdy');
// console.log(texasGreeting()); // Howdy from Texas!


// // 5. Using an IIFE, create a `todos` object that creates a private array called `list`. The only access we have to `list` is through a few methods, `addTodo` and `displayList`. We should not be able to access `list` outside of the function expression. Add as many todo items as you wish and demonstrate that the methods work as intended.

// // 6. Is `song` eligible for garbage collection on line 11? Why or why not?

// function bird() {
//   let song = { tweet: 'tweet tweet' };
  
//   return function() { 
//     console.log(song.tweet);
//   }
// }

// let cardinal = bird(); 
// cardinal(); // tweet tweet


// // 1. There are 4 concepts demonstrated in this code. What are they? What concept makes logging `Howdy friend!` possible? 


// function concat(a, b) {
//   return a + ' ' + b;
// }

// function makeGreeting(one) {
//   return function(two) {
//     return concat(one, two);
//   }
// }

// let texasGreet = makeGreeting('Howdy');
// console.log(texasGreet('friend!'));     // Howdy friend!


// // 1. This code example runs without errors, even though there is a mistake in the code. Find where the mistake is, and show a better way to write this code. (Hint: `animal` should not have access to `bird` methods, but here is does.)


// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function() {
//   console.log("I'm an animal!");
// }

// function Bird(name) {
//   this.name = name;
// }

// Bird.prototype = Animal.prototype;
// Bird.prototype.constructor = Bird;

// Bird.prototype.describe = function() {
//   console.log(`Hi! I'm ${this.name} the bird!`);
// }

// let bubbles = new Bird("Bubbles");
// bubbles.describe(); // Hi! I'm Bubbles the bird!

// let animal = new Animal('Sparkles'); // error
// animal.describe(); // Hi! I'm Sparkes the bird!


// // 1. The value of `this` on **line 2** is equal to `window`. Is this statement correct, why or why not? 


// function scare() {
//   console.log(this === window); // ?
//   console.log('Boo!');
// }

// scare(); // ?
