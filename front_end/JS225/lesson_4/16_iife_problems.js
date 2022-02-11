// (1) Will the code below execute?

function() {
  console.log("Sometimes, syntax isn't intuitive!");
}();

// Syntax error because we are missing the outer parentheses that form the expression 
// around the function declaration

// (2) Will the code below execute?

(function() {
  console.log("Sometimes, syntax isn't intuitive");
})();

// (3) What kind of problem does this error highlight? Use an IIFE to address it, so that code runs without error.

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
}, numbers)();

// Implement a function countdown that uses an IIFE to generate the desired output.

let countdown = (function() {
  return function(number) {
    while (number >= 0) {
      console.log(number);
      number -= 1;
    }
    console.log('Done!');
  };
})();

console.log(countdown(7));
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!

function countdown(count) {
  (function(number) {
    while (number >= 0) {
      console.log(number);
      number -= 1;
    }
  })(count);
}

// (5) Is the named function in this IIFE accessible in the global scope?

(function foo() {
  console.log('Bar');
})();

foo(); // Error

// we cannot access the named function expression from outside of its scope, only from its outside

// (6) For an extra challenge, refactor the solution to problem 4 using recursion, bearing in mind that a named function created in an IIFE can be referenced inside of the IIFE.

function countdown(count) {
  (function recursiveSub(number) {
    console.log(number);

    if (n === 0) {
      console.log('Done!');
      break;
    } else {
      recursiveSub(n - 1);
    }
  })(count);
}

countdown(7);