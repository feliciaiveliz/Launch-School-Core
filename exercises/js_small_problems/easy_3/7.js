// Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

/*
Understand the Problem
----------------------
Input:
- array of numbers or empty array
Output:
- array of numbers or empty array
Rules:
- the elements in the array are the running totals from the previous number
Questions:
- What is a running total?
  - a total that is computed by increment a starting number with the sequence of numbers following it
  - ex: [2, 5, 13] -> (2), 2 + 5 (7), 7 + 13 (20)
- What if the array contains negative numbers?
  - compute the running total without special handling
Requirements:
- if array is empty, return []
- if array contains one digit, return one element array of that digit
- all other input is "Invalid input"
- all first elements of output array will match first element of input array
Examples/Test Cases:
- [3]: [3]
- [7, 9, 1] -> (7), 7 + 9 (16), 16 + 1 (17)
Data Structure:
---------------
- Input: 
  - array of numbers
- Rules: 
  - for each element in the array, compute the running total: current number + running total
Algorithm:
----------
- create a 'result' array
- create a 'runningTotal' variable 0
- iterate over array of numbers:
  - push to 'result':
    - currentNumber + runningTotal
  - runningtotal = currentNumber + runningTotal
- return 'result'
*/

function runningTotal(array) {
  let result = [];
  let runningTotal = 0;
  if (!Array.isArray(array)) return "Invalid input";

  array.forEach(currentValue => {
  	result.push(currentValue + runningTotal);
  	runningTotal = currentValue + runningTotal;
  });

  return result;
}

function runningTotal(array) {
  let total = 0;
  return array.map((number) => total += number);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
console.log(runningTotal([7, 9, 1]));              // [7, 16, 17]
console.log(runningTotal(4378));                   // Invalid input
console.log(runningTotal([-2, 5, 9]));             // [-2, 3, 12]