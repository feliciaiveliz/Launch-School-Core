// (1) What is sloppy mode and how does it cause errors?

// (2) What does this code log to the console and why?

console.log(a);
let a = 1;

// (3) What does this code output and why? 
// (4) What does this code look like after hoisting?

console.log(number);
var number = 7;

// (5) Explain mutability for javascript objects. How does this differ from primitives?

// (6) True or False
// There are 3 globally scoped variables and 1 function scoped variables in this code.

number = 7;
let pets = { cat: 2, dog: 4 };

function things(name) {
  let age = 28;
  lastName = 'Bacon';
  console.log(name + ' ' + lastName + ': ' + age);
}

console.log(things('Felicia')); // Felicia Bacon: 28

// (7) Why doesn't this code output true? Would the output change if we used '=='?

[] === []; // false

// (8) Explain the difference between what happens after 'var', 'let' and 'const' variables are hoisted.

// (9) What is the difference between 'let' and 'var' variables in terms of scope?

// (10) Why can't we access the value referenced by 'friendName' declared on line 4?

function example() {
  if (true) {
    var name = 'Felicia';
    let friendName = 'Alfonso';
  }

  console.log(name); 
  console.log(friendName); 
}

example(); // ?

// (1) Is the 'reverseNumbers' function an example of a pure function? 
// (2) If not, what side effects, if any, are present?

function reverseNumbers(array) {
  let arrayCopy = array.slice(0);
  return arrayCopy.reverse();
}

let numbers = [1, 2, 3, 4, 5];
console.log(reverseNumbers(numbers));
console.log(numbers);

// (1) Is the 'reverseLetters' function an example of a pure function?
// (2) If not, what side effects, if any, are present?

function reverseLetters(array) {
  let arrayCopy = array.slice(0);
  console.log(arrayCopy); 
  return array.reverse(); 
}

let letters = ['a', 'b', 'c', 'd', 'e'];
console.log(reverseLetters(letters));
console.log(letters);

// (1) Is a closure created here? Why or why not? 
// (2) Which variable(s) is/are part of the closure's 'envelope'? ('envelope' is used as LS terminology, not an official term)

function example() {
  let number = 7;
  let letter = 'f';

  return function() {
    console.log(number + 2);
  }
}

let logNumber = example();
console.log(logNumber()); // 9

// What property or method does this definition describe? Prove your answer with an example.

// The returned value of this property is a non-negative integer that is numerically greater than the highest index in an array object.

// (1) What does this output? Why does it do that?
// (2) Fix the code to log the correct answer, 3.

let a = [1, 2, 3]
console.log(a[-1]); // ?

// What is the difference between these two code snippets?

function example1() {
  console.log('hello');
}

(function example2() {
  console.log('hello');
});

example1();    // ?
example2();    // ?



