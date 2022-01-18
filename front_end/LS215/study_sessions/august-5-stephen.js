/*
Given a number, create a function which returns a new number based on the following rules:

For each digit, replace it by the number of times it appears in the number.
The final instance of the number will be an integer, not a string.
The following is a working example:

digitCount(136116) ➞ 312332
// The number 1 appears thrice, so replace all 1s with 3s.
// The number 3 appears only once, so replace all 3s with 1s.
// The number 6 appears twice, so replace all 6s with 2s.

Examples

digitCount(221333) ➞ 221333

digitCount(136116) ➞ 312332

digitCount(2) ➞ 1

Notes
Each test will have a positive whole number in its parameter.

/*
Understand the Problem
----------------------
- Input:
  - positive whole number
- Output:
  - number with all digits appearing the number of times in the original number
- Rules:
  - assume only positive numbers will be passed in
  - if only passed in 0, return 1
Examples/Test Cases:
--------------------
- digitCount(0) -> 1
- digitCount(221333) -> 221333
- digitCount(136116) -> 312332
- digitCount(01234) -> 11111
- digitCount('12344') -> 12322
- digitCount('abc') -> "Invalid input"
- digitCount('abc123') -> "Invalid input"
- digitCount() -> "Invalid input"
- digitCount([1, 2, 3, 4]) -> 1111
Mental Model:
-------------
If no arguments are passed in, or the argument is a string that contains letters, return "Invalid input". For all other inputs - If number, convert to string and split it, then convert each string digit to number. If string, split it then convert each string digit to number. If array, convert array to string and check if it contains any letters or punctuation, if it does, return "Invalid input". Create a result string to add numbers on each iteration. With array of numbers, loop over each number and find it's count in the array by filtering the array and finding the length. With that length, increment the result by length. Once finished looping, convert string into number and return number.

Data Structure:
---------------
- number -> array of numbers -> converted number to string into 'result' string
  
Algorithm:
----------
- define a result string to ''
- if no argument is passed return "invalid input"
- if number is negative, return 'invalid input'
- if digits is a the string that contains letters or punctuation, return 'invalid input'
- if digits is an array, join array into a string and check if it contains letters or punctuation, if so return 'invalid input'
  - match to find anything not a number
- If input is a number, convert to string and split into array of string digits
  - convert each string digit into numbers
- If input is a string, split string into array of string digits and convert each string digit into number
- If array, leave as is
- Iterate over array of numbers as strings
  - convert each number into a string
  - filter the array to find all the instances of the current number
  - find the length of that returned array
  - increment 'result' by length of array (count of numbers)
- return the string converted to a number
*/

function digitCount(digits) {
  let result = '';
  if (digits === undefined) return "Invalid input";
  if (digits < 0) return "Invalid input";
  if (typeof digits === 'string') {
    if (digits.match(/[^0-9]/g)) return "Invalid input";
  }
  
  if (typeof digits === 'object') {
    if (digits.join('').match(/[^0-9]/g)) return "Invalid input";
  }
  
  if (typeof digits === 'number') {
    digits = String(digits).split('');
  } else if (typeof digits === 'string') {
    digits = digits.split(''); 
  }
  
  digits = digits.map(String);
  
  digits.forEach(digit => {
    let count = digits.filter(n => n === digit).length;
    result += String(count);
  });
  
  return Number(result);
}

console.log(digitCount(0)); // 1
console.log(digitCount(221333)); // 221333
console.log(digitCount(136116)); // 312332
console.log(digitCount(1234)); // 1111
console.log(digitCount('12344')); // 11122
console.log(digitCount('abc')); // "Invalid input"
console.log(digitCount('abc123')); // "Invalid input"
console.log(digitCount()); // "Invalid input"
console.log(digitCount([1, 2, 3, 4])); // 1111
console.log(digitCount(['a', 1, 'b', 2])); // "Invalid input"