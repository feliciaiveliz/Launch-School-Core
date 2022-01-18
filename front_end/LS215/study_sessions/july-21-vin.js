// Create a function that, given a string str, finds a letter that has a single occurrence. Return the letter in uppercase. If the input is empty, return an empty string "".

/*
Understand the Problem
----------------------
Input:
- string of upper/lower letters, or empty
- assume that input doesn't contain digits or non-alpha chars
Output:
- string, a letter
Rules:
- a letter that has a single occurrence
- if input is empty, return '' 
- if input is non-alphabetic, return ''
Requirements:
- return letter in uppercase
- assume that only one letter can occur once
- assume that the first single occuring character is returned
Examples/Test Cases:
- "EFFEAABbc" -> 'C'
- "AAAAVNNNNSS" -> 'V'
- 'S' -> 'S'
- '' -> ''
- 3235 -> ''
- 'qqqwwerrrrt' -> 'E'
Data Structure:
---------------
- Input: 
  - string
  - array
  - object
- Rules: 
  - for each letter in the string, count the number of occurrences
  - update the object with letter as key and counts as value
  - search the object for the letter that occurs once
  - return the first letter that occurs once, in uppercase
Algorithm:
----------
- create a 'result' object {}
- return '' if input string is ''
- uppercase entire input string
- split string into an array of characters, given letter:
  - create key/values pairs in 'result':
    - if key exists in 'result': += 1 value
    - if it doesn't, create letter => 1
- given 'result': 
  - given array of all keys in 'result', filter to find the key (letter) whose value is equal to 1
  - uppercase the letter
*/


console.log(singleOccurrence("EFFEAABbc")); // "C"
console.log(singleOccurrence("AAAAVNNNNSS")); //  "V"
console.log(singleOccurrence("S")); // "S"
console.log(singleOccurrence("qqqwwerrrrt")); // "E"
console.log(singleOccurrence("")); // ''
