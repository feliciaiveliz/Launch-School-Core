// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

/*
Understand the Problem
----------------------
Input:
- string 
- string can contain letters, numbers, empty, and other characters
Output:
- new string
- new string contains value of original string with consecutive characters collapsed
into a single character
Rules:
- collapse characters into single character if they occur more than once in a sequence
- strings can contain any input
- empty string will be returned if original string is empty
- return error message if input is not a string
Requirements:
- return a string with no consecutively occurring characters
- if string contains only 1 character, return that character
- if string is empty, return empty string
- if input is a digit or anything other than string, return "Invalid input"
- consecutively occurring spaces will also be collapsed into one space
Examples/Test Cases:
- 'a' -> 'a'
- '4444abcabcabccba' -> '4abcabcba'
- '' -> ''
- 5 -> 'Invalid input'
- 'one and  two and   three' -> 'one and two and thre'
Data Structure:
---------------
- Input: 
  - string
- Rules: 
  - add new characters to new string on each iteration
  - if the last character is equal to the current chacter, skip character
Algorithm:
----------
- create a 'result' string
- if input is not a string, return "Invalid input"
- split string into an array of characters, given char:
  - if the last character of the 'result' is not the same as the current char:
    - add current character to the 'result' string
  - otherwise skip character
- return 'result'
*/

function crunch(string) {
  let result = '';
  if (String(string) !== string) return "Invalid input";

  string.split('').forEach(character => {
  	if (result[result.length - 1] !== character) result += character;
  });

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
console.log(crunch(5));                            // "Invalid input"
console.log(crunch('one and  two and   three'));   // "one and two and thre"
