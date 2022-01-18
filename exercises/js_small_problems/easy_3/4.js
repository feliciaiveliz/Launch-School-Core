// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

/*
Understand the Problem
----------------------
Input:
- string
- string can contain letters or numbers, punctuation
- words can be seperated by spaces
Output:
- true or false
- if string is palindrome 
Rules:
- all case matters
- all characters matter
- a palindrome is a string that reads the same forwards and backwards
Requirements:
- return a palindrome string
- if string is empty, return ''
- if a strin contains anything but letters or numbers, replace them with ''
Examples/Test Cases:
- 'madam' -> 'madam' -> the same
- 'Madam' -> 'madaM' -> not the same
Data Structure:
---------------
- Input: 
  - string
  - array
- Rules: 
  - to check if a string is a palindrome, reverse the string and check for equality
Algorithm:
----------
- split the string into an array of characters
- reverse the string
- if original string is equal to the reversed string, it is a palindrome
- otherwise is it not
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('')
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true