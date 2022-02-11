// Not added as properties of global object -> not global variables
let a = 2; // not added as property to global object
console.log(window.a); // undefined

const b = 4; // not added as property to global object
console.log(window.b); // undefined

// Added as properties of global object -> global variables (functions, undeclared, var)
function c() {
  return 5;
}
console.log(window.c); // f c() { return 5 } 
console.log(window); // Window { ... }

a = 1; // this does not declare a variable, but only adds it as a property to the global object
window.a = 1; 
console.log(window.a); // 1

var c = 3; // added as property to global object
console.log(window.c); // 3

/////

// Deleted (undeclared global variables)
// (1)
a = 1;
delete window.a;     // deleted
console.log(a);      // error: a is not defined
console.log(window); // Window { ... does not include a }
console.log(window.hasOwnProperty('a')); // false

// Not deleted (var and function declarations/expressions)
// (2) var
var a = 1;
delete window.a;     // not deleted
console.log(a);      // 1
console.log(window); // Window { ... includes a }
console.log(window.hasOwnProperty('a')); // true

// (3) function expression
var a = function() {
  return 1;
};
delete window.a;     // not deleted
console.log(a);      // f () { return 1; }
console.log(window); // Window { ... includes a }
console.log(window.hasOwnProperty('a')); // true

// (4) function declaration
function c() {
  return 5;
}
delete window.c;       // not deleted
console.log(window.c); // f c() { return 5 } 
console.log(window);   // Window { ... includes c }
console.log(window.hasOwnProperty('c')); // true


