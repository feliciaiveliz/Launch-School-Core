// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

/*
Understand the Problem
----------------------
Input:
- string
- string can be empty or contains one or more letters or words
- string does not contain puncuation
Output:
- number
- sum of all UTF-16 string values of every character
Rules:
- allowed to use String.prototype.charCodeAt() for each characters
Requirements:
- the program should be able to handle non-ASCII characters
- ASCII characters use UTF-16 character encoding
- use UTF-16 (decimal)
- if input is not a string or ASCII (or non-ascii) character from character set, return 0
Examples/Test Cases:
- 'A' -> 65
- 'a' -> 97
- '' -> 0
- '\u03A9' -> 937
Data Structure:
---------------
- Input: 
  - number
  - array of string characters
- Rules: 
  - use the number variable to add char value on each iteration
  - use array to hold all string characters
Problem:
- get the ascii character value for each character in the string
- add each value to the total sum value and return the sum
- if the input is invalid -> anything but letters, numbers, \, return false
Algorithm:
----------
- create a sum variable and use it to increment ascii values
- split the string into an array of characters
- iterate over the array of characters, given character:
  - find the character code 
  - increment sum variable with character code
- return character code
*/

function utf16Value(characters) {
  // if (characters.match(/[^a-z0-9\/ ]/gi) || characters.length === 0) {
  // 	return 0;
  // }

  let sum = 0;

  characters.split('').forEach((char, index) => {
  	sum += characters.charCodeAt(index);
  });

  return sum;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0
console.log(utf16Value('_+..#@'));             // 0
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811