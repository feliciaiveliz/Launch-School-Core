// Rotation Part 3
// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

/*
Understand the Problem
----------------------
- Input:
  - number less than, greater than or equal to 0
- Output:
  - number - maximum rotation of the original number
- Rules:
  - leading zeros will be dropped from returned number
  - return the maximum rotation of a number
    - each digit starting from the first digit will be rotated
    - after each rotation, keep the first digit or digits in place until last two digits have been rotated
Examples/Test Cases:
--------------------
- 735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579 -> rotate 97 -> 79
- keep 3 in place  -> keep 32 in place -> keep 321 in place -> keep 3215 in place
- rotate and keep digits in place until last two numbers
  - when at last two numbers, rotate and return number
  - 467 -> 674 -> 647
Mental Model:
-------------
Rotate numbers starting from first number. After first number has been added to the end of the number, move the second number to the end.
Add second number to a new number collection to keep track of 'fixed' digits. Each iteration, add first number to end of input number and add number to 'fixed'
digits collection. When at the last two digits, rotate them and add them both to the end of the 'fixed' digits collection. Return 'fixed' digits as a number.

Data Structure:
---------------
- number -> array of string numbers -> number
- convert number to a string then an array of string numbers
- add fixed numbers to a result array and continue to rotate first numbers from rest of input number
- convert array of numbers into a string, then back to a number
  
Algorithm:
----------
- define 'result' to []
- Use 'rotateRightmostDigits' to rotate numbers
- convert number to a string then split into array of string numbers
- rotate the first number and add it to the end of the array 
  - pass the number to 'rotateRightmostDigit' to get the first number rotated
- loop until we reach the last two numbers in 'number'
  - rotate digits by passing to 'rotateRightmostDigit'
  - shift off the first digit in 'number' and add to result array
  - continue for all numbers until we reach the last two numbers
- after looping through all numbers up to last index - 2:
  - rotate both numbers and add to the end of result
- join result into a string and convert to number
- return number
*/

function maxRotation(number) {
  if (!Number(number) || number === 0) return 0;
  let n = String(number).split('');
  
  for (let i = 0; i <= n.length - 1; i += 1) {
    n.push(n.splice(i, 1));
  }
  
  return Number(n.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
console.log(maxRotation(467));             // 647