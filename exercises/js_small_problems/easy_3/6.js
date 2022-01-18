// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

/*
Understand the Problem
----------------------
Input:
- number greater than or equal to 0
- all other input is invalid
Output:
- true or false
Rules:
- a palindrome can be a string or number that reads the same forwards or backwards
Requirements:
- if number is a single digit, number is palindrome
- if number is 0, return true
- if input is not a number, return "Invalid input"
Examples/Test Cases:
- 34543 -> 34543 -> true
- 123210 -> 012321 -> false
-> 0 -> true 
-> 5 -> true 
-> 'snacks' -> "Invalid input"
Data Structure:
---------------
- Input: 
  - number to string
- Rules: 
  - converting the number to a string will make it easier to compare
Algorithm:
----------
- create a reversed copy of the number:
  - convert to string
  - convert to array of string characters
  - reverse the array
  - join it into a string
- for the non-reversed string:
  - convert to string
- compare both strings and check if they are equal
  - if so, they are palindromes
  - if not equal, they are not palindromes
*/

function isPalindromicNumber(number) {
	if (String(number).match(/[^0-9]/g)) return "Invalid input";
	let reversedNumber = String(number).split('').reverse().join('');
	return String(number) === reversedNumber;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(0));            // true
console.log(isPalindromicNumber('snacks'));     // Invalid input