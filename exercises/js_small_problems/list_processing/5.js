// Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

/*
Understand the Problem
----------------------
- Input:
  - string of one or more letters
- Output:
  - array of substrings
  - each substring starts with the first letter of the word
- Rules:
  - order the substrings from shortest to longest
  - if there is a single letter in the string, return single letter string in array
  - the first substring is the first letter of the string
  - the last substring is the whole string
- Questions/Clarifications:
  - What if the input is an empty string?
    - return an array with a single empty string element ['']
Examples/Test Cases:
--------------------
- 'abc' -> ['a', 'ab', 'abc']
- 'a' -> ['a']
- 'abcde' -> ['a', 'ab', 'abc', 'abcd', 'abcde']

Problem:
--------
Given a string argument, return an array that contains all substrings that be formed from the string argument. All substrings will start with the first letter of the string argument.

Mental Model:
-------------
Create an empty array to hold all substrings. Loop until the result array is equal in length to the input string. Take a slice from the string on each iteration. The substring slice
will start from index 0, up to index + 1. Increase the slicing index by 1 on each iteration to create a larger substring. Return array.

Data Structure:
---------------
- Input: 
  - string -> array of letters -> array of substrings
- Rules: 
  - take slices of input string starting from index 0 to index + 1, increment slicing index by 1 each time
  - repeat this step until the result array is the same length as the input string
  
Algorithm:
----------
- create a 'result' array []
- create an 'index' variable to 1
- while the result array length is < string length
  - take slice of string and push to result:
    - split string into array of characters to apply slice
    - index 0, index + 1
    - join back into string before pushing to result
  - index += 1
- return result
*/

function leadingSubstrings(string) {
  let result = [];
  let index = 1;

  while (result.length < string.length) {
    result.push(string.split('').slice(0, index).join(''));
    index += 1;
  }

  return result;
}

// a 1
// a b (index 2)

function leadingSubstrings(string) {    
  let substring = '';
  return string.split('').map((letter) => {
    return substring += letter;
  });
}

function leadingSubstrings(string) {    
  return string.split('').map((_, index) => {
    return string.slice(0, index + 1);
  });
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// a ab abc
// 0 01 01