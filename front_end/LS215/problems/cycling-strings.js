// (3) https://edabit.com/challenge/gfm9nQFzogSYTE24t

// Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

/*
Understand the Problem
----------------------
- Input:
  - string of words seperated by spaces
  - string of one string
  - empty string
- Output:
  - new string
    - all letters of first string that make the string equal to the length of the second string
- Rules:
  - if either string is empty, return empty string
  - all characters count in the length of the second string
    - puncutuation, empty spaces, capital/letters, numbers
  - if the length of the strings are the same, return the value of the first string as is
Examples/Test Cases:                         
--------------------
console.log(stringCycling("", "abc")); // ""
console.log(stringCycling("abc", "")); // ""
console.log(stringCycling("abc  123", "abc  123  123")); // "abc  123  abc"
console.log(stringCycling("abcde", "hello")); "abcde"
console.log(stringCycling("", "")); // ""

Mental Model:
-------------
If either string or both string is/are empty, return "". Find the length of the second string and save to variable. Create a result string that will be added on by each iteration. Iterate through the string of characters and add a character each time to the result string. If the result string is equal to the length of the second string, return result. If not, keep adding characters to result. If the current string (the one being iterating over) is at the end of the characters and the result is not the length of the second string, restart at the beginning of the first string and repeat the process of adding characters to result.

Data Structure:
---------------
- string of characters -> result string that is equal to length of second string
  
Algorithm:
----------
- define result as ''
- define index as 0
- if first string or second string is empty, or both strings are empty, return ''
- if the length of the second string is > than first string
  - add character to result
  - do this until the length of result is equal to second string
- else cycle through the first string until result is equal to second
  - if at the length (length - 1) and the result string is not equal to second
    - reset index to 0 and add characters to result
- return result;
*/

function stringCycling(firstString, secondString) {
  let result = '';
  if (firstString === '' || secondString === '') return '';
  
  if (firstString.length > secondString.length) {
    for (let i = 0; i < firstString.length; i += 1) {
      result += firstString[i];
      if (result.length === secondString.length) break;
    }
  } else {
    for (let i = 0; i < firstString.length; i += 1) {
      result += firstString[i];
      if (i === (firstString.length - 1) && result.length !== secondString.length) {
        i = 0
        result += firstString[i];
      } else if (result.length === secondString.length) {
        break;
      }
    }
  }
        
  
  return result;
}

console.log(stringCycling("abc", "hello")); // "abcab"
console.log(stringCycling("programming", "edabit")); // "progra"
console.log(stringCycling("the world in me evolves in hers", "i love Tesh, so much so")); // "the world in me evolves"
console.log(stringCycling("a thing of beauty is a joy forever", "indulge me surely")); // "a thing of beauty"
console.log(stringCycling("to", "hide")); // "toto"
console.log(stringCycling("such a feeling coming over me", "top of the world")); // "such a feeling c"
console.log(stringCycling("", "abc")); // ""
console.log(stringCycling("abc", "")); // ""
console.log(stringCycling("abc  123", "abc  123  123")); // "abc  123abc"
console.log(stringCycling("abcde", "hello")); "abcde"
console.log(stringCycling("", "")); // ""