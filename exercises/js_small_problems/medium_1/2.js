// Rotation Part 2
// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

/*
Understand the Problem
----------------------
- Input:
  - two numbers
    - the original number
    - last 'n' digits to rotate
- Output:
  - the rotated number
- Rules:
  - rotate the last 'n' digits of the number
  - leave the first digits (not part of the last 'n' digits) in the same order
  - apply the same rules for the rotation as in the previous exercise: slice off the first digit and append it to the end of the 'number'
  - join the first digits with the last 'n' rotated digits, and return it as a number
Examples/Test Cases:
--------------------
- 735291 -> 73529 -> 1 stays in same place -> 735291
- 735291 -> 7352 -> 19 -> rotates from 91 -> 735212
- -12345, 4 -> -13452
Mental Model:
-------------
Rotate the last 'n' digits of a number. Leave the first part of the number (the part that is not the last 'n' digits) in original order.
Slice off the first digit and append it to the back of the number. Combine the first part of the number with the rotated part. Return as number.

Data Structure:
---------------
- number -> string
- 
  
Algorithm:
----------
- if number is not a number return undefined
- if number is negative
  - remove negative sign
  - perform slice
  - attach negative sign back to the rotated number
- convert original number to a string
- split the string into array of string numbers
  - splice out the number to rotate and append it to the end of the array
    - use a negative version of 'n' to start from back of array
- convert the array back to a string then to a number and return it
*/

function rotateRightmostDigits(number, digit) {
  if (!Number(number) || number === 0) return 0;
  let n = String(number).split('');
  return Number(n.concat(n.splice(-digit, 1)).join(''));
}

function maxRotation(number) {
  let result = [];
  if (!Number(number) || number === 0) return 0;
  let n = String(number).split('');
  
  for (let i = 0; i < n.length; i += 1) {
    n = n.concat(n.splice(0, 1))    
    result.push(n.shift());
    console.log(result);
  }
  return Number(result.join(''));
}
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(000000, 3));      // 000000
console.log(rotateRightmostDigits('hello', 2));     // 000000
console.log(rotateRightmostDigits(-12345, 4));      // -13452