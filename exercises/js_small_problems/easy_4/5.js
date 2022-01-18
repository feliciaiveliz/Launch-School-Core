
// Combine Two Lists
// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

/*
Understand the Problem
----------------------
- Input:
  - two arrays of elements
- Output:
  - new array that contains elements from both arrays
- Rules:
  - take each element in alternation
  - start the alternation with the first element of the first array
  - assume that the arrays will contain the same amount of elements
  - assume that the arrays will not be empty
- Questions:

Examples/Test Cases:
--------------------
- [1, 2, 3], ['a', 'b', 'c'] -> [1, 'a', 2, 'b', 3, 'c']

Mental Model:
-------------
- Iterate over the first array. Take the current number and the number at the same index in the second array and push both numbers to the result array.
Return the result array.

Data Structure:
---------------
- Input: 
  - array of elements
- Rules: 
  - Iterate for the length of array and push two elements at a time into the 'result' array.
  
Algorithm:
----------
- create a 'result' array []
- iterate over array1 with an index:
  - push to result: current number and number at index in array2
- return 'result'
*/

function interleave(array1, array2) {
  let result = [];

  array1.forEach((number, index) => {
  	result.push(number, array2[index]);
  });
  
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]