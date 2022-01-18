// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

/*
Understand the Problem
----------------------
Input:
- number
- input will be positive
- input will not be negative or 0
Output:
- string
- output will contain 1s and 0s
Rules:
- string will contain 1s and 0s
- string will start with 1
- the length of the string will match the number input
Requirements:
- string will alternate between 1 and 0, starting at 1
- if number is even, output string will be even, same rules for odd
- if number is even, string will start at 1 and end with 0
- if number is odd, string will start at 1 and end with 1
Examples/Test Cases:
- stringy(6) -> "101010" -> length of 6, ends in 0
- stringy(7) -> "1010101" -> length of 7, ends in 1
Data Structure:
---------------
- Input: 
  - string  
- Rules: 
  - use the input number as a limit
  - use an index to keep track of counting
  - iterate starting at 0: add 1 when the index is 0
  - add 0 to the string when the index is odd
Algorithm:
----------
- create a result string ''
- loop from 0 to less than 'number'
  - on even indexes, add 1
  - on odd indexes, add 0
- return 'result'
*/

function stringy(number) {
	let result = '';

	for (let i = 0; i < number; i += 1) {
		i % 2 === 0 ? result += '1' : result += '0';
	}

	return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"