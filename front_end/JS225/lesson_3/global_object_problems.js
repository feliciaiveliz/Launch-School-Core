// 1) With strict mode not enabled, what object serves as the implicit execution context? What happens when strict mode is enabled?
// The global object - window in the browser - global in Node 

// 2) What does the code below log?
a = 10;
console.log(window.a === a); // true, initializing an undeclared variable automatically creates that variable as a property on the global object, since the implicit context for evaluated expressions is window

// 3) What does the code below log?
"use strict";
a = 10;
console.log(window.a === a); // ReferenceError: a is not defined: in strict mode, all undeclared variables are not allowed.

// 4) What does the code below do?
function func() {
  let b = 1;
}
func(); 
console.log(b); // ReferenceError: it declares and initializes a function-scoped variable that is only accessible to 'func'. We can try to log the value of 'b', but will only get a ReferenceError, that 'b' is not defined

// 5) What does the code below do?
function func() {
  b = 1;
}
func();
console.log(b); // 1, not declaring a variable automatically sets it as a property on the global object, making it accessible everywhere

// 6) What does the code below log?
"use strict"
function func() {
  b = 1;
}
func();
console.log(b); // ReferenceError, 'b' is not defined, in strict mode we aren't allowed to initialize undeclared variables. We don't have access to the global object as the implicit execution context.
