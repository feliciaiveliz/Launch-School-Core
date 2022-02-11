// (1) Write a function named makeMultipleLister that, when invoked and passed a number, returns a function that logs every positive integer multiple of that number less than 100. Usage looks like this:

function makeMultipleLister(number) {
  let originalNumber = number;
  return function() {
    while (number <= 100) {
      console.log(number);
      number += originalNumber;
    }
  };
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91

// (2) Write a program that uses two functions, add and subtract, to manipulate a running total value. When you invoke either function with a number, it should add or subtract that number from the running total and log the new total to the console. Usage looks like this:

let total = 0;

function add(number) {
  total += number;
  return total;
}

function subtract(number) {
  total -= number;
  return total;
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10

// (3) How can you set the value of systemStatus to the value of the inner variable status without changing startup in any way?

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready');
  };
}

let ready = startup();
let systemStatus = // you can't
// you cannot access a variable that was declared within the local scope of a funciton definition
// that variable is inaccessible -- only through the closure -- only the closure itself can update the value

