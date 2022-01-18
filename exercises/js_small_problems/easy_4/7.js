// Multiply Lists
// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

/*
Understand the Problem
----------------------
- Input:
  - two arrays of numbers
- Output:
  - new array of numbers
- Rules:
  - each number in the returned array is the product of each pair of numbers from the arguments that have the same index
  - assume that the length of both arrays are the same
- Questions:
  - What is a product?
    - the result of multiplying numbers together
Examples/Test Cases:
--------------------
- [3, 5, 7], [9, 10, 11] -> [27, 50, 77]

Mental Model:
-------------
- Iterate over the first array with an index. Multiply the current number times the number at the same index as the curent number.
- Push the product into a result array. Continue this for the whole array. Return the array of products.

Data Structure:
---------------
- Input: 
  - array of numbers
- Rules: 
  - Iterate over the first array and perform multiplication
  
Algorithm:
----------
- create a 'result' array []
- iterate over the first array with an index, given number and index:
  - push to result: number * array2 number at that index
- return 'result'
*/

function multiplyList(array1, array2) {
  let result = [];

  array1.forEach((number, index) => {
  	result.push(number * array2[index]);
  });

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]