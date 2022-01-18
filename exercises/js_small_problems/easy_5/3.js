// Reverse Number
// Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

/*
Understand the Problem
----------------------
- Input:
  - positive number that could be zero or contain 0s
- Output:
  - number with the digits in the original input number reversed
- Rules:
  - there should be no leading zeros in the returned number
  - if there is only one digit in the number, return the number
- Questions:
 
Examples/Test Cases:
--------------------
- 12345 -> 54321
- 12000 -> 21 -> not 00021
- 1 -> 1

Mental Model:
-------------
- Convert the number into a string and then split into an array of digits. Reverse the array. Join the array into a string and convert to a number.

Data Structure:
---------------
- Input: 
  - number -> string -> array of digits -> string -> number
- Rules: 
  - convert the number into a string then convert to array to reverse it, then convert back to number
  
Algorithm:
----------
- return:
  - convert number to string then split string into array of characters
  - reverse the array, then join back to string
  - convert the result to a number
*/

function reverseNumber(number) {
  return Number(String(number).split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1