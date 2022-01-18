// Reverse It Part 2
// Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

/*
Understand the Problem
----------------------
- Input:
  - string of one or more words seperated by one space
- Output:
  - new string with words that are five or more letters reversed, and words that are less as is
- Rules:
  - there will be only letters and spaces in the string
  - return a new string
- Questions/Clarifications:
  - Can I assume that the string will always contain at least one word?
    - Yes
Examples/Test Cases:
--------------------
- 'Professional' -> 'lanoisseforP'
- 'Walk around the block' -> 'Walk dnuora the kcolb'
- '' -> ''

Problem:
--------
Given a string, reverse the words that are 5 letters or longer, while keeping the words that have a length of less than 5 as is.

Mental Model:
-------------
Map over the string of words and perform a check. If the string length is equal to 5 or greater, reverse the word. Otherwise, leave the word as is. Return string.

Data Structure:
---------------
- Input: 
  - string -> array of strings -> string
- Rules: 
  - split the string into array of words to iterate and perform a length check.
  
Algorithm:
----------
- return: 
  - map over the words of the string and check if the length is 5 or greater
    - if it is, reverse word
    - if it is not, leave as is
- join array into a string seperated by a single space and return string
*/

function reverseWords(string) {
  return string.split(' ').map(word => { 
  	return word.length >= 5 ? word.split('').reverse().join('') : word 
  }).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"