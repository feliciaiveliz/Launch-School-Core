// Digits List
// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

/*
Understand the Problem
----------------------
- Input:
  - number that is equal to or greater than 0
- Output:
  - array of digits that are in the number
- Rules:
  - if the number is 0, return [0]
  - place numbers in the final array in the same order as they appear in the input number
- Questions:

Examples/Test Cases:
--------------------
- 12345 -> [1, 2, 3, 4, 5]
- 0 -> [0]
- 444 -> [4, 4, 4]

Mental Model:
-------------
- Convert the number into a string. Split the string into individual numbers so that it's an array of number strings. Map over the array and convert the number strings into real numbers.
Return array.

Data Structure:
---------------
- Input: 
  - number, array, strings
- Rules: 
  - number -> string -> array of number strings -> array of numbers
  
Algorithm:
----------
- return:
  - convert the number to a string
  - split the string into individual number strings
  - map the array and convert each number string into a number
  - return the array
*/

// function digitList(numbers) {
//   return String(numbers).split('').map(number => Number(number));
// }

function digitList(numbers) {
	return [...String(numbers)].map(Number);
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
console.log(digitList(0));