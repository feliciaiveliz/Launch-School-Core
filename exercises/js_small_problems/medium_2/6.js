
// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

/*
Understand the Problem
----------------------
- Input:
  - positive numbers
- Output:
  - 0 or positive number 
- Rules:
  - return the difference between square of sum of 'n' positive numbers and sum of squares of first numbers
  - square sum of numbers from 1 to 'n' - 1 to 'n' each number squared
  - 'n' is included in both sums
  
Examples/Test Cases:
--------------------
- 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
Mental Model:
-------------
Starting at 1, loop through all numbers up to 'n'. For squared sum, sum each number and square the result. For sum of squares, square each number first then add all the numbers together. Subtract sum of squares from squared sum and return the difference.

Data Structure:
---------------
- numbers -> loop from numbers 1 to 'n'
  
Algorithm:
----------
- let sum be equal to 0
- let squares be equal to 0
- loop from 1 up to and including 'n'
  - increment squaredSum by each number from 1 to 'n'
  - increment squares by each number from 1 to 'n' squared
- let squaredSum be equal to the square of 'sum'
- return the difference of squaredSum and squares
*/


function sumSquareDifference(start, limit) {
  let sum = 0;
  let squares = 0;
  
  if (limit === undefined) {
    limit = start;
    start = 1;
  }
  
  for (let i = start; i <= limit; i += 1) {
    sum += i;
    squares += i ** 2
  }
  
  let squaredSum = sum ** 2;
  return squaredSum - squares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
console.log(sumSquareDifference(1, 3));    // 22
console.log(sumSquareDifference(3, 5));    // 94
