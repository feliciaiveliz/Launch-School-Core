// Create a function that squares every digit of a number.

/*
Understand the Problem
----------------------
Input:
- number
- number could be of any length greater than 0
Output:
- number
- the squares of all digits in the number
Rules:
- a square the product of two numbers of the same value
  - 81 -> 9 * 9
Requirements:
- square every digit
- put together all squared numbers into one number
Examples/Test Cases:
- 0 * 0: 0 
- 9119: 9 * 9 -> 81 + 1 + 1 + 81: 811181
Data Structure:
---------------
- Input: 
  - array of string digits
  - array of squared digits
- Rules: 
  - convert to string then convert to number
Algorithm:
----------
- create 'result' array []
- convert the input number into a string
- split the string into individual string digits, iterate:
  - convert string digit to number
  - number * number
  - push squared digit into 'result'
- given the array of squared digits:
  - join the array into a string of digits
  - convert the string into a number
  - return 'result' number
*/

function squareDigits(number) {
  let result = [];
  
  String(number).split('').forEach(n => {
    result.push((Number(n) * Number(n)));
  });
  
  return Number(result.join(''));
}

console.log(squareDigits(0));    // 0
console.log(squareDigits(9119)); // 811181
console.log(squareDigits(2483)); // 416649
console.log(squareDigits(3212)); // 9414