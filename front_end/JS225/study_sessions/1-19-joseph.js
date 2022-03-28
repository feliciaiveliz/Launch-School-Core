/*
--Objects
. Organizing code into appropriate objects
. Object factories

--Determining/setting function execution context (this)
. Implicit function execution context
. Explicit function execution context
. Dealing with context loss
. Lexical scope

--Scope and Closures
. Creating and using private data
. Garbage collection
. IIFEs
. Partial Function Application

--Object creation patterns
. Constructor functions
. Prototype objects
. Behavior delegation
. OLOO and Pseudo-Classical patterns
. class syntax
*/

// let name = claim(5);   // Claim 5 bytes of memory for use by name
// if (memoryNotAllocated(name)) {
//   throw new Error("Memory allocation error!");
// }

// copy(name, "Sarah");  // Copies "Sarah" into claimed memory referenced by name
// console.log(name);    // Do something with object referenced by name
// release(name);        // Release memory for use by others

// let someVariable = claim(5); // claim 5 bytes of memory
// //optional
// //throw error if code not allocated
// copy(someVariable, 'some string') //copy value into variable, cant copy value directly into variable
// release(someVariable)  //release memory for other usage


// function logName() {
//   let name = 'Sarah'; // Declare a variable and set its value. The JavaScript
//                       // runtime automatically allocates the memory.
//   console.log(name);  // Do something with name
//   return name;        // Returns "Sarah" to caller
// }

// let loggedName = logName(); // loggedName variable is assigned the value "Sarah"  #21834177adf
//                             // the "Sarah" assigned to `loggedName` is NOT eligible for GC
//                             // the "Sarah" assigned to `name` IS eligible for GC
// more code below this line

// STACK (DOES NOT PARTICIPATE IN GARBAGE COLLECTION -> ALLOCATE & RELEASE SCHEME)
// - numbers
// - booleans
// - null
// - undefined
// - references to actual objects, arrays, strings in heap
// -

// HEAP
// - objects
// - arrays
// - strings (?)
// - count system, not allocate and release
           

// let obj = { a: 1 }
// let name = 'felicia'
// let number = 2
// let obj2 = obj

// HEAP
// 'felicia' <
// {a : 1} <   |
//          |  |
// STACK    |  |
// obj ------  |
// name ----|---
// 2        |  
// obj2 ----


// function logName() {
//   let name = 'Sarah'; // Declare a variable and set its value. The JavaScript
//                       // runtime automatically allocates the memory.
//   console.log(name);  // Do something with name
//   return name;        // Returns "Sarah" to caller
// }

// let loggedName = logName(); // loggedName variable is assigned the value "Sarah"  #21834177adf
//                             // the "Sarah" assigned to `loggedName` is NOT eligible for GC
//                             // the "Sarah" assigned to `name` IS eligible for GC

// function makeHello(name, age) {
//   return function() { 
//     console.log("Hello, " + name + "!");
//   };
// }

// let helloSteve = makeHello("Steve");
// helloSteve()
// // makeHello("Steve")();


// makeHello
// - name -> 'Steve'

// innerfunction()
// - closure -> name -> pointer to 'name' variable

// HEAP
// 'steve'

// STACK 
// 1 pointer to 'steve'
//   - name (parameter that references the actual 'steve' string in heap)
// - name (pointer in closure envelope referencing 'name' parameter)

// name (closure) -> name (original variable) -> 'felicia'
// /*
// variable created in function
// inner function
// variable from outer function in inner function
// inner functions saves actual outer variable in envelope 
// */



function closureExample() {
  let a = 2;
  let b = 3;
  // log a
  
  return function() {
    console.log(a);
  }
}

let example = closureExample();
example() 

//Global scope is everything accessible
//Lexical scope is how the language finds variables

What is a closure?
 - combination of a function and its lexical environment from which the closure was defined
What is in a closure?
  - A closure contains variables that are defined in it's outer scope in it's an enevlope from it's outer enviroment
When is a closure created?
  - when a function can enclose over items in it's lexical scope that it needs
  - if it's a self-contained function, there's nothing to 'close over', therefore no closure is created
  - when there are items in the function's outer scope, and the function needs access to it, the function then encloses over those items only
  - if a function doesn't need access to any particular variables, those variables are NOT part of the closure's envelope
What is the relationship between closures and scope?
  - The relationship between closures and scope is that in order to truly understand scope and closures
we need to understand that scope is created lexically at definition
  - scope makes closures possible by how lexical scope determines how to look for variables
What do we mean when we say that closures are defined lexically?
  
What is partial function application?