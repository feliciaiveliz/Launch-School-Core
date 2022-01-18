// All Substrings
// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

/*
Understand the Problem
----------------------
- Input:
  - string of letters
- Output:
  - array of all substrings in the string
- Rules:
  - return all substrings in a substring set from shortest to longest
  - substrings will start at index position 0
  - the longest substring set will start from the first letter in the string up to the last
  - the shortest substring set will start from the very last letter and only include that letter
- Questions/Clarifications:
  - Will there always be a string input?
    - yes
Examples/Test Cases:
--------------------
- [ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

Problem:
--------

Mental Model:
-------------
Until the string is empty, create substrings starting at index position 0. Once all substrings have been created with the very first letter, start with the second letter and repeat steps.

Data Structure:
---------------
- Input: 
  - string -> array of substrings
- Rules: 
  - Loop until the input string is empty. Create substrings with first letter. Once all substrings have been created, slice out first letter and repeat steps.
  
Algorithm:
----------
- create a result array []
- while input string is not empty:
  - create substrings using leadingSubstrings
  - slice out first letter of string
  - repeat step 3
- return array
*/

function leadingSubstrings(string) {    
  let substring = '';
  return string.split('').map((letter) => {
    return substring += letter;
  });
}

function substrings(string) {
  let result = [];

  while (string.length !== 0) {
  	result.push(leadingSubstrings(string));
  	string = string.slice(1);
  }

  return result;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e"] 