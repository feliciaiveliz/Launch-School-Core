// Double Char Part 1
// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

/*
Understand the Problem
----------------------
- Input:
  - empty string or string that contains at least one character
- Output:
  - new string that contains every character doubled
- Rules:
  - preserve letter case
  - if the string is empty, return an empty string
  - if the character is a non-letter, still double the character
  - assume that the input is a string
  - spaces are also doubled
- Questions:
  - 
Examples/Test Cases:
--------------------
- "Hello" -> "HHeelloo"
- "" -> ""
- "Hey!" -> "HHeeyy!!"

Mental Model:
-------------
- Create a result string. Iterate over the input string as an array of characters. Double the character, add the two characters to the result string.

Data Structure:
---------------
- Input: 
  - input string
  - array of characters 
  - result string
  Rules:
  - push each doubled character set into a 'result' string
Algorithm:
----------
- Create a 'result' string' ''
- Split input string into an array of characters, given char:
  - repeat the character twice, and add to 'result' string
- return 'result'
*/

function repeater(string) {
  let result = '';

  string.split('').forEach(char => {
  	result += char.repeat(2);
  });

  return result;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""