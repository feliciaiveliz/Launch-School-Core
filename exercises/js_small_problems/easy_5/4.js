// Get the Middle Character
// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

/*
Understand the Problem
----------------------
- Input:
  - string of uppercase/lowercase letters, spaces
  - a non-empty string
- Output:
  - empty string or string of either 1 or 2 length
- Rules:
  - if the string length is even, return 2 characters
  - if the string length is odd, return 1 character
- Questions:
  - What if the string only contains one character?
    - return that character
Examples/Test Cases:
--------------------
- 'I Love Javascript' -> 'a'
- 'Launch School' -> ' '
- 'x' -> 'x'

Mental Model:
-------------
- Get the length of the string. If the string length is odd, save to a variable the result of string length divided by 2 when rounded down. If the string length is even, 
save to variable the string length divided by 2. For even, slice out the middle character. For odd, slice out from middle - 1 to middle + 1. 

Data Structure:
---------------
- Input: 
  - string
  - number
- Rules: 
  - Calculate the middle indexes by dividing the length of the string by 2, and rounding the result down if the length is odd. 
  - Use the middle index to return the middle character.
  
Algorithm:
----------
- if length is odd
  - save to 'middle' string length - 1 / 2
  - return string [middle]
- else if length is even
  - save to 'leftIndex' string length / 2 - 1
  - return a substring of leftIndex and leftIndex + 2
*/

function centerOf(string) {
  if (string.length % 2 === 1) {
  	let centerIndex = (string.length - 1) / 2;
  	return string[centerIndex];
  } else {
  	let leftIndex = string.length / 2 - 1;
  	return string.substring(leftIndex, leftIndex + 2);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"