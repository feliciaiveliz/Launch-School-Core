// The sliding window is a technique used to simplify complex data problems. A window that slides over the data to examine different sections of it.

// Your challenge is to create a sliding window that traverses the array and returns the maximum value in each window.

// Example:

// [4, 5, 6, 7, 8, 9]

// Our function would start by examining the first two elements of the array and pushes the max value to a new array.

// [**4, 5**, 6, 7, 8, 9]

// ... then the window slides to examine the next two, in this case 5 and 6, and pushes the max value to the array.

// [4, **5, 6**, 7, 8, 9]

// The window will examine the entire length of the array until the maximums for each window have been added to the new array.

// Arguments
// Array:The array over which you are traversing.
// windowLength: The length of the window you will be using to do the search.
// Returns Array: A new array containing the maximums for each window.
// You are given this array and a window length of 2.

/*
Understand the Problem
----------------------
- Input:
  - array of numbers
  - number: window length
- Output: 
  - new array of numbers with each number being the maximum value in a particular window
- Rules:
  - 'n' represents the window length
  - return a new array, do not modify the original
  - return the maximum value in each window
  - return an empty array if the original array is empty
  - duplicate numbers may appear in the window, still return maximum number
Examples/Test Cases:
--------------------
console.log(windowMaxes([], 3)); // []
console.log(windowMaxes([4, 5, 6, 7, 8, 9], 2)); // [5, 6, 7, 8, 9]
console.log(windowMaxes([5, 2, 3, -1, 9, 2 ,5, 4], 1)); // [5, 2, 3, -1, 9, 2, 5, 4]
console.log(windowMaxes([-4, -6, -7, 2, 4, 3], 2)); // [-4, -7, 2, 4, 4]
console.log(windowMaxes([1, 2, 3, 4, 5, 6, 7, 8, 9], -2)); [2, 3, 4, 5, 6, 7, 8, 9]
console.log(windowMaxes([3, 8, 5, 7])); // [8, 8, 7]
console.log(windowMaxes([7, 3, 5, 2, 1, 6], 0)); []
Mental Model:
-------------
Traverse the array and create a window the size of length. In each window, find the maximum value and put that value into a result array. Return array.

Data Structure:
---------------
- array of numbers -> new array of maximum values for each window
  - slice out a portion of the array with an index and 'n'
  - stop last slice at length - 3
  
Algorithm:
----------
- If n is equal to 0, or if the array is empty, return an empty array
- if n is negative, find its positive value
- define 'result' as []
- loop until 'n' value is less than or equal to length of the array
  - for each loop, create a slice of the array and find the maximum value
    - start slice at current index (starting at 0) and end at 'n'
      - the starting slice index will increase by 1
      - increment 'n' by 1
    - push max value to result
  - end loop when 'n' is equal to length of array
- return array
*/

function windowMaxes(array, n) {
  let result = [];
  if (array.length === 0 || n === 0) return [];
  if (n === undefined) n = 2;
  if (n < 0) n = Math.abs(n);
  
  for (let i = 0; n <= array.length; i += 1) {
    let window = array.slice(i, n);
    result.push(Math.max(...window));
    n += 1;
  }
  
  return result;
}

console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3)); // [3, 4, 4, 4, 3, 2, 5]
console.log(windowMaxes([], 3)); // []
console.log(windowMaxes([4, 5, 6, 7, 8, 9], 2)); // [5, 6, 7, 8, 9]
console.log(windowMaxes([5, 2, 3, -1, 9, 2 ,5, 4], 1)); // [5, 2, 3, -1, 9, 2, 5, 4]
console.log(windowMaxes([-4, -6, -7, 2, 4, 3], 2)); // [-4, -6, 2, 4, 4]
console.log(windowMaxes([1, 2, 3, 4, 5, 6, 7, 8, 9], -2)); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(windowMaxes([3, 8, 5, 7])); // [8, 8, 7]
console.log(windowMaxes([7, 3, 5, 2, 1, 6], 0)); []
console.log(windowMaxes([1, 2, 3, 4], 4)); // [4]