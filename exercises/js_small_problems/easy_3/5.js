// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

/*
Understand the Problem
----------------------
Input:
- string
- string can contain letters or numbers, punctuation
- words can be seperated by spaces
Output:
- true or false
- if string is palindrome return true, otherwise false
Rules:
- program is case insensitive
- ignore all non-alphanumerics
- can use isPalindrome function
Requirements:
- return a string that is a palindrome
- the same forwards and backwards
- ignore punctuation and handle strings in all lowercase
Examples/Test Cases:
- 'madam' -> 'madam' -> true
- 'Madam' -> 'madam' -> true
- "Madam, I'm Adam"  -> 'madam im adam' -> true
- '123ab321' -> '123ba321' -> false
Data Structure:
---------------
- Input: 
  - string 
- Rules: 
  - remove all punctuation and lowercase strings
  - compare for equality
Algorithm:
----------
- replace anything that's not a letter with ''
- split string into array of characters
- compare the original array of character values with reversed version
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('')
}

function isRealPalindrome(string) {
  return string.toLowerCase().replace(/[^a-z]/g, '') === string.toLowerCase().replace(/[^a-z]/g, '').split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false