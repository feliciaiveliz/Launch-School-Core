// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

/*
Understand the Problem
----------------------
- Input:
  - two numbers
  - number and length
- Output:
  - array of multiples of 'number'
- Rules:
  - array length of multiples needs to be equal to length
Examples/Test Cases:
--------------------
console.log(arrayOfMultiples(4, 0)); // []
console.log(arrayOfMultiples(1, 7)); // [1, 2, 3, 4, 5, 6, 7]

Mental Model:
-------------
Create an empty array. Starting with the number, increment 'number' by 'number' and add the result to the array. Do this until the array length is the same as 'length'.

Data Structure:
---------------
- array of integers
  
Algorithm:
----------
- define 'result' as []
- loop until 'result' is the same as 'length'
  - increment 'number' by 'number
  - push to result
  - break when result length is the same as length
- return result
*/

function arrayOfMultiples(number, length) {
  let result = [];
  let n = number;
  
  while (result.length < length) {
    result.push(n);
    n += number;
  }
  
  return result;
}

console.log(arrayOfMultiples(7, 5)); // [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)); // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)); // [17, 34, 51, 68, 85, 102]
console.log(arrayOfMultiples(4, 0)); // []
console.log(arrayOfMultiples(1, 7)); // [1, 2, 3, 4, 5, 6, 7]

