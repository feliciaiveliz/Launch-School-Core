// delete_nth.js

/*
Given a list 'lst' and a number N, create a new list that contains each number of
lst at most N times without reordering.

For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2],
drop the next [1,2] since this would lead to 1 and 2 being in the result 3
times, and then take 3, which leads to [1,2,3,1,2,3].
/*

Understand the Problem
----------------------
- Input:
  - number, the number of times that each number in list is repeated
  - array of numbers
- Output:
  - new array of numbers that occur 'n' times without reordering
- Rules:
  - each number in the array can't occur more than 'n' times in the array
  - preserve the original order of numbers from the original array
  - the numbers in the input array are not in a certain or sorted order
  
Examples/Test Cases:
--------------------
- n = 2: [1, 2, 3, 1, 2, 1, 2, 3] -> [1, 2, 3, 1, 2, 3]
- n = 3: [5, 7, 2, 8, 7, 5, 2, 8, 5] -> [5, 7, 2, 8, 7, 5, 2, 8, 5]
- n = 0: [1, 2, 3, 4] -> []
- n = -2: [6, 7, 8, 9] -> []
- no 'n': [6, 4, 2, 2] -> []
- n = 2: [] -> []
 
Mental Model:
-------------
Iterate through a list of numbers and only add numbers that pass a check that sees if that current number doesn't occur more than 'n' times in the result array. Keep track of the counts of each different number in the array by storing the number in an object and giving it a starting value of 1. If count of the current number is less than 'n', add number to result array. Increment count by 1. On the next iteration, if count of the current number is greater than 'n', skip the number. 

Data Structure:
---------------
- object -> numbers in input array as key, starting value of 1
  - increase value by 1 
  
Algorithm:
----------
- if n is <= 0, or array is empty, return []
- create a 'result' array, set it []
- create a 'workingObj', set it {}
- iterate through the list of numbers, given number:
  - if 'workingObj' does not include the current number
    - add current number as key and set value to 0
- iterate through the list of numbers again, given number:
  - if the current numbers value is < n
    - add 1 to value
    - add current number to array
- return result
*/


function deleteNth(list, n = 0) {
  if (n <= 0 || list.length === 0) return [];
  let result = [];
  let workingObj = {};
  
  list.forEach(number => {
    if (!Object.keys(workingObj).includes(number)) {
      workingObj[number] = 0;
    }
  });
              
  list.forEach(number => {
    if (workingObj[number] < n) {
      workingObj[number] += 1;
      result.push(number);
    }
  });
  
  return result;
}

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)); // [1, 2, 3, 1, 2, 3]
console.log(deleteNth([5, 7, 2, 8, 7, 5, 2, 8, 5], 3)); // [5, 7, 2, 8, 7, 5, 2, 8, 5]
console.log(deleteNth([1, 2, 3, 4], 0)); // []
console.log(deleteNth([6, 7, 8, 9], -2)); // []
console.log(deleteNth([6, 4, 2, 2])); // []
console.log(deleteNth([], 2)); //  []

console.log(deleteNth([1,2,3,1,2,1,2,3], 2)); // => [1,2,3,1,2,3]
console.log(deleteNth([4,4], 1)); // => [4]
console.log(deleteNth([4,4,4,1], 2)); // => [4,4,1]
console.log(deleteNth([6,4,5,0,6,4,5,6], 4)); // => [6,4,5,0,6,4,5,6]
console.log(deleteNth([1,2,3])); // => []
console.log(deleteNth([], 2)); // => []
 