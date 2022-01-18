// Reverse It Part 1
// Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

/*
Understand the Problem
----------------------
- Input:
  - empty string or string that contains one or more words
- Output:
  - new string that contains words in reverse order
- Rules:
  - do not reverse the word letters themselves, only the words in the position in the string
  - return '' if the input string is ''
  - preserve letter case
  - return string should have words seperated by a single space
- Questions/Clarifications:
  - What if the string contains only one word?
    - return that single word as a string
Examples/Test Cases:
--------------------
- 'Hello World' -> 'World Hello'
- '' -> ''
- 'meow' -> 'meow'

Problem:
--------
Return a string that contains the words from the input string in reverse order.

Mental Model:
-------------
Split the string on whitespace. Reverse the array of words and then join them back together with a single whitespace as a seperator.

Data Structure:
---------------
- Input: 
  - string -> array of words (reversed) -> new string
- Rules: 
  - reverse the array of words then convert them to string
Algorithm:
----------
- Split string into array of words
- reverse the array
- join back into string (' ')
*/

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"