// Create a function that counts the integer's number of digits.

/*
Understand the Problem
----------------------
- Input:
  - number: positive or negative
- Output:
  - number: count of digits in number
- Rules:
  - negative signs do not count as part of the number of digits
  - 0 -> 1
Examples/Test Cases:
--------------------
- console.log(count('123')); // 3
- console.log(count(123)); // 3

Mental Model:
-------------
Iterate over the number as a array of string elements and put only the digits into a result array. Get the length of the result array after we're done iterating, return the length.

Data Structure:
---------------
- number (or string) -> string of digits -> array of string digits -> put into result array -> find the length of the result and return the number
  
Algorithm:
----------
- if input is not a number or string, return 'Invalid input'
- define 'result' as []
- Convert the input into a string, split the string and iterate
  - if current element is a digit, add digit to 'result' array
- find the length of result and return number as length
*/

function count(number) {
  if (Array.isArray(number)) return "Invalid input";
  let result = [];
  
  String(number).split('').forEach(value => {
    if (value.match(/[0-9]/)) {
      result.push(value)
    }
  });
  
  return result.length;
}

console.log(count(0)); // 1
console.log(count(318)); // 3
console.log(count('-92a56b3')); // 5
console.log(count(4666)); // 4
console.log(count(-314890)); // 6
console.log(count('654abc321')); // 6
console.log(count(638476)); // 6
console.log(count('123')); // 3
console.log(count(123)); // 3
console.log(count('1234abc')); // 4
console.log(count([1, 2, 3, 5, 6])); // Invalid input