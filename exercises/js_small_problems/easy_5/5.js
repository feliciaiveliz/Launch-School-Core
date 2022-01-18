// Always Return Negative
// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

/*
Understand the Problem
----------------------
- Input:
  - positive, negative or 0 number
- Output:
  - negative number
- Rules:
  - 0 is considered positive, return -0
  - if number is negative, return number
  - if number is positive, return -number
- Questions:

Examples/Test Cases:
--------------------
- 5 -> -5
- -3 -> -3
- 0 -> -0

Mental Model:
-------------
- if the number is negative, return number
- else, return -number

Data Structure:
---------------
- Input: 
  - number
- Rules: 
  - return the negative of a number if it is positive
  
Algorithm:
----------
- if number is < 0, return 0
- else, return -n
*/

function negative(number) {
	return number < 0 ? number : -number;
}

function negative(number) {
	return Math.abs(number) * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0