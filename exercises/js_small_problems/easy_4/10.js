// Array Average
// Write a function that takes one argument, an array containing integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

/*
Understand the Problem
----------------------
- Input:
  - array of numbers
- Output:
  - number
- Rules:
  - the number returned in the average of all integers in the array
  - round the number down to the nearest integer component of the average
  - the array will never be empty
  - numbers will always be positive
- Questions:
  - What is an integer component?
    - The whole number part of a number that could be a float
    - 25.6667 -> 25
Examples/Test Cases:
--------------------
- [1, 5, 87, 45, 8, 8] -> 154 / 6 -> 25.66667 -> 25

Mental Model:
-------------
- Reduce the numbers in the array down to a single number by adding them together. Divide that result by the length of the array.
Floor the result so that it becomes the integer component of the number.

Data Structure:
---------------
- Input: 
  - array of numbers -> number -> integer component average
- Rules: 
  - add all numbers in the array, divide by length of array, floor the result
  
Algorithm:
----------
- return:
  - reduce the number in the array by adding them
  - divide result by array length
  - use floor to get whole number or integer componenet
*/

function average(array) {
  return Math.floor(array.reduce((accum, value) => accum + value) / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40