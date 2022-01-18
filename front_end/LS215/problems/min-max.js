// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

/*
Understand the Problem
----------------------
- Input:
  - array of numbers
- Output:
  - array of two numbers
    - min and max numbers
- Rules:
  - return the min and max numbers in order of min max
  - if the array holds 1 number, return that number for both min and max
  - if the array is empty, return empty []
Examples/Test Cases:
--------------------
console.log(minMax([-2345, 3, 6, 8, 4])); // [-2345, 8]
console.log(minMax([0, 0, 0, 0])); // [0, 0]
console.log(minMax(['1', '2', '3', '4', '5'])); // [1, 5]
Mental Model:
-------------
Convert the array of elemnts into an array of numbers (this will only change elements that are strings into numbers). Find the min value and the max value. Put the min value in the array first, followed by the max value. Return the result array.

Data Structure:
---------------
- array of numbers -> array of min and max value numbers
  
Algorithm:
----------
- map over the array of numbers and convert all elements to numbers
- find the minimum value and put into result array
- find the max value and put into result array
- return array
*/

function minMax(array) {
  array = array.map(Number);
  return [Math.min(...array), Math.max(...array)];
}

console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]
console.log(minMax([2334454, 5])); // [5, 2334454]
console.log(minMax([1])); // [1, 1]
console.log(minMax([-2345, 3, 6, 8, 4])); // [-2345, 8]
console.log(minMax([0, 0, 0, 0])); // [0, 0]
console.log(minMax(['1', '2', '3', '4', '5'])); // [1, 5]