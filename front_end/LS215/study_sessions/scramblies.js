// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

/*
Understand the Problem
----------------------
Input:
- a string of two words
- words are lowercase letters
- no punctuation or digits are included
Output:
- true or false
Rules:
- return true if a portion of str1 can be rearranged to match str2
- need to consider performance
Requirements:
- a portion of str1 matches str2 if the letters are arranged in sequence as they are in str2
Questions:
- what is the minimum length of a word?
Examples/Test Cases:
- 'rkqodlw', 'world' --> 'r odlw' (when sorted) === world
- 'cedewaraaossoqqyt', 'codewars' --> 'ced waros' (when sorted) === codewars
- 'katas', 'steak' --> 'kats' (when sorted, missing 'e')
Data Structure:
---------------
- Input: 
  - string of two words
- Rules: 
  - parse str1 to find letters that match str2
  - return boolean if all letters can be found
Problem:
- sort both words as arrays and join them back into strings
- letter count:
  - letter by letter, if a letter does not occur at least once in str1
    - stop iteration -> a match cannot be made with str2
  - otherwise, continue until the end of string
    - if the end is reached and iteration is not stopped, return true
Algorithm:
----------
- reassign str1 and str2
  - split both words into arrays of letters
  - sort words
  - join word arrays back into strings
- iterate over str2
  - if the index of the current letter is equal to -1 (letter doesn't exist in str1)
    - return false
  - otherwise return true
*/

function scramble(str1, str2) {
  // str1 = str1.split('').sort();
  // str2 = str2.split('').sort();

  
}

console.log(scramble('rkqodlw', 'world')); // ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // ==> True
console.log(scramble('katas', 'steak')); // ==> False