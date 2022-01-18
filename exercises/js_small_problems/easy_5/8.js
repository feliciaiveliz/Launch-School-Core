// Sequence Count
// Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

/*
Understand the Problem
----------------------
- Input:
  - two numbers
  - positive, negative or 0
  - first argument is 'count', second argument is a starting number for a sequence
- Output:
  - array the length of 'count'
  - value of each element is a multiple of starting number
- Rules:
  - assume that the count argument is a number greater than or equal to 0
  - starting number can be any number -> positive, negative, 0
  - if count is 0, return []
- Questions/Clarifications:
  - What is a multiple?
    - a multiple is a number that can easily divide into another number without a remainder
  - Will the input always be two numbers?
    - yes
  - What happens when starting number is 0?
    - populate array to 'count' length with 0s
Examples/Test Cases:
--------------------
- 5, 1 -> 5 is length of array, 1 is starting number of sequence
  - starting from 1, get all mulitples of 1 up to and including 5
    - add 1 + 1 -> 2
  - [1, 2, 3, 4, 5]
- 4, -7 -> 4 is length of array, -7 is starting number of sequence
  - starting from -7, get all multiples of -7 down to and including -28
    - add -7 + (-1) -> -8 
    [-7, -14, -21, -28]
  - add numbers until array length is equal to 'count'
Problem:
Create a sequence of numbers from a starting point called 'startingNumber' up to a length of 'count'. Each value in the array is a multiple of 'startingNumber'.
The final array will have 'count' number of values that are all multiples of 'startingNumber' in ascending order.

Mental Model:
-------------
Return [] if the 'count' is 0. If the 'startingNumber' is 0, add 0s to add until 'count' length is reached. If the 'startingNumber' is positive, start from 1 and create a sequence up to the 'count'.
Add 1 to startingNumber to get the multiples of 'startingNumber'. If the number is a multiple of 'startingNumber', add number to array.
Return the array once the array length is equal to count. If the 'startingNumber' is negative, repeat steps for 'positive startingNumber' but instead of adding 1, add (-1). 

Data Structure:
---------------
- Input: 
  - count, startingNumber
  - array
- Rules: 
  - If count = 0, return []. If startingNumber = 0, return array of 'count' 0s
  - Find the mutliples of startingNumber and add them to a result array
  
Algorithm:
----------
- create a result array []
- if count is 0, return result
- if startingNumber is 0, push 0s to result array until length is equal to count
- if starting number is positive, loop starting at startingNumber, until result length is equal to count, incrementing by 1
  - if current number is a multiple of startingNumber, add current number to result
- if starting number is negative, loop starting at startingNumber, until result length is equal to count, incrementing by -1
  - if current number is a multiple of startingNumber, add current number to result
- return result
*/

function sequence(count, startingNumber) {
  let result = [];
  if (count === 0) return [];

  if (startingNumber === 0) {
  	while (result.length < count) {
  		result.push(0);
  	}
  } else if (startingNumber > 0) {
  	for (let i = startingNumber; result.length !== count; i += 1) {
  		if (i % startingNumber === 0) result.push(i);
  	}
  } else {
  	for (let i = startingNumber; result.length !== count; i += -1) {
  		if (i % startingNumber === 0) result.push(i);
  	}
  }
  return result;
}

function sequence(count, startingNumber) {
	let result = [];
	let sum = 0;

	for (let i = 0; i < count; i += 1) {
		result.push(sum += startingNumber);
	}

	return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []