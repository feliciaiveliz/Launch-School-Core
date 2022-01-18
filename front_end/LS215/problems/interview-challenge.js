// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

/*
Understand the Problem
----------------------
- Input:
  - array of numbers
  - numbers can be positive or negative
- Output:
  - positive integer that is not included in the array
- Rules:
  - array could be empty, return 0?
  - 0 is not considered when returning a positive integer
  - N is an integer between range 1..100,000
  - range of each element of array is between -1,000,000..1,000,000
Examples/Test Cases:
--------------------
- solution(a([1, 3, 6, 4, 1, 2])); // 5
- solutinn(a([1, 2, 3])); // 4
- solution(a([-1,-3]));

Mental Model:
-------------
Sort the digits in the array from smallest to largest. Loop starting at 1. If the current number is not equal to 'count', return the number.

Data Structure:
---------------
- array of numbers -> return smallest positive integer
  
Algorithm:
----------
- If array is empty, return 0
- If array contains strings, map the array and convert strings to digits
- loop through the array
  - start a count at 1
  - if the current number does not match 'count', return current number
  - otherwise continue looping until we find a number that is not included in the array
*/

function solution(A) {
  if (A.length === 0) return 0;
  let sortedA = [...new Set(A.sort((a, b) => a - b))];
  let count = 1;
  let result;

  for (let i = 0; i < sortedA.length; i += 1) {
  	if (sortedA[i] === count) {
      count += 1;
  	} else {
  		result = count;
  	}
  }

  if (result === undefined) {
  	result = sortedA[sortedA.length - 1] + 1;
  } 
  return result;
}

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1,-3])); // 1