// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

/*
Understand the Problem
----------------------
Input:
- number greater than 0 
- number could be even or odd in length
Output:
- number greater than 0
Rules:
- a double number is a number that is even length
  - left side digits are the same as the right side digits
Requirements:
- if number is a double number: return double number
- if number is not a double number: return number * 2
  - number with an odd length
  - number with an even length but both sides are different digits
- if 0, return 0
Examples/Test Cases:
- 44 -> 44 -> length is even, both sides are equal (as-is)
- 334433 -> 668866 -> length is even, both sides are not equal (doubled)
- 107 -> 214 -> length is odd (doubled)
- 0 -> 0 -> length is odd (doubled)
Data Structure:
---------------
- Input: 
  - string
  - number
- Rules: 
  - represent the digits as a string to split into halves and compare
  - if left side is equal to right side, return number
  - if not, return number * 2
Algorithm:
- convert number into string
  - if length of string is odd, return number * 2
- save left half of string into variable 'leftSide'
- save right half of string into variable 'rightSide'
- if equal, return number as is
- if not equal, return number * 2
*/

function twice(number) {
  let digits = String(number);
  let leftSide = digits.slice(0, (digits.length / 2));
  let rightSide = digits.slice(leftSide.length);

  return leftSide === rightSide ? number : number * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
console.log(twice(0));           // 0
console.log(twice(-249))         // -489

// > b = a.slice(0, (a.length / 2))                                                                                                    
// '334'                               
// > c = a.slice(b.length)                                                                                                             
// '433'