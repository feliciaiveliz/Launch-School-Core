// Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

/*
Understand the Problem
----------------------
- Input:
  - empty array or array of numbers
- Output:
  - new array of two subarrays
- Rules:
  - the first subarray contains the first half of the original array
  - the second subarray contains the second half of the original array
  - if the array length is odd, put middle element in the first array
- Questions:
  - What if array
Examples/Test Cases:
--------------------
- [1, 2, 3, 4] -> [[1, 2], [3, 4]]
- [1, 5, 2, 4, 3] -> [[1, 5, 2], [4, 3]]
- [[], []]
- [5] -> [[5], []]

Mental Model:
-------------
- Create a result array. Find the length of the input array. If the length is even, save the result of array length / 2 to a variable.
If the length is odd, save the result of array length / 2 rounded up to the nearest whole to a variable. With the 'even' middle variable,
create two slices. The first one will start from index 0 of the array up to the middle - 1. Put these numbers into a subarray and push to the result array.
The second slice will start from the middle and go to the end of the array. Put these numbers into a subarray and push to result. 
For the odd length arrays, create two subarrays and slice: the first slice will start from 0 up to the middle number - 1. The second slice will 
start from middle to the end of the array. Push these arrays into the result array.


Data Structure:
---------------
- Input: 
  - array of subarrays
  - numbers 
- Rules: 
  - calculate the middle number index and use it to determine where to slice the arrays in half.
  
Algorithm:
----------
- create a 'result' array []
- if array length is 0, return [[], []]
- if array length is even:
  - array length / 2 -> save to variable 'middle'
  - push to result: [array slice from 0 to middle - 1, middle]
- if array length is odd:
  - array length / 2 ceil -> save to variable 'middle'
  - push to result: [array slice from 0 to middle - 1, midde to -1]
- return 'result'
*/

function halvsies(array) {
  let result = [];
  if (array.length === 0) return [[], []];

  if (array.length % 2 === 0) {
    let middle = array.length / 2;
    result.push(array.slice(0, (middle)), array.slice(middle));
  } else {
    let middle = Math.ceil(array.length / 2);
    result.push(array.slice(0, (middle)), array.slice(middle));
  }

  return result;
}

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]