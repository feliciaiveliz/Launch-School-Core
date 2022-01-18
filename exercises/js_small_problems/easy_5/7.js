// Name Swapping
// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

/*
Understand the Problem
----------------------
- Input:
  - string consisting of first name, space, last name
- Output:
  - new string consisting of last name, comma, space, first name
- Rules:
  - do not modify original string
  - preserve letter case
- Questions:
  - Can I assume that the input will always be a string?
    - No, account for input that could be arrays, numbers, etc.
  - What if the string contains characters that are not letters?
    - return an error message, only letters can be apart of a name
Examples/Test Cases:
--------------------
- 'Felicia Bacon' -> 'Bacon, Felicia'
- '' -> ''
- 324 -> "Invalid input. Only strings."

Mental Model:
-------------
- Split the string on whitespace. Reverse the array with the names and then join them back into a string seperated by a comma then space.
Data Structure:
---------------
- Input: 
  - string -> array of strings -> string
- Rules: 
  - the array of strings will contain both names
  - reverse the string to get the last name first and the first name last
  - join back into a string with a ", " seperating both names
  
Algorithm:
----------
- If input is not a string, return error message: "Invalid Input. Only strings as names"
- If input contains non-letters, return error message: "Invalid Input. Names must only contain letters"
- Create a result string ''
- Split string on whitespace, reverse array, join back into string with (', ')
*/

function swapName(string) {
  if (string !== String(string)) return "Invalid Input. Only strings as names";
  if (string.match(/[^a-z ]/gi)) return "Invalid Input. Names must only contain letters";
  return string.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Felicia Bacon')); // "Bacon, Felicia"
console.log(swapName('')); // ''
console.log(swapName(53243)) // "Invalid input, only strings as names."
console.log(swapName('Kay14 Kh47')); // "Invalid input, names must only contain letters."