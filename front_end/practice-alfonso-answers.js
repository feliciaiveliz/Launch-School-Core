// (1) What is sloppy mode and how does it cause errors?

// (2) What does this code log to the console and why?
console.log(a);
let a = 1;
// This code raises an Error, cannot access 'a' before initialization
// This is because the 'let a' declaration is hoisted above the call to 'console.log', and 'a' is not given a value
// Variables declared by 'let' are not given a value at all when they're hoisted; they are unset. 
// Variables like this are said to be in the temporal dead zone, or TDZ.

// (3) What does this code output and why? 
// (4) What does this code look like after hoisting?

console.log(number);
var number = 7;
// undefined. This is because 'var' variables are initialized to a value of 'undefined' when they are hoisted.
// After hoisting, the code will look like this:
var number;
console.log(number);
number = 7;

//
// True or False
// There are 3 globally scoped variables (false 4 number, pets, lastName, things), 1 function scoped variable (false 2 age, name)
