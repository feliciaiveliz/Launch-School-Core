// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

/*
Understand the Problem
----------------------
Input:
- number greater than 0
Output:
- number
- number is sum of all digits up to target number
  that are mulitples of 3 or 5
Rules:
- number is greater than 0
- range starts at 1 but does not include 1 in sum
- inclusive means that the target number is included in final sum 
- multiples are numbers that are evenly divisible by another number
Requirements:
- if a number is evenly divisible by 3 and 5
  - only include number once in final sum calculate
- 1 is not included in the final sum
Examples/Test Cases:
- 3: 3
- 5: 3 + 5
- 10: 3 + 5 + 6 + 9 + 10 -> 33
Data Structure:
---------------
- Input: 
  - array to hold multiples
- Rules: 
  - find all multiples of 3 and 5 up to and including the target number
  - put them into an array
  - compute or reduce to find the final sum of all numbers
Algorithm:
----------
- create an array to hold all multiples
- starting at 3:
  - loop until we reach target number
    - if current number is divisible by 3 or 5
      - add current number to multiples array
- once all multiples are in the array:
  - reduce numbers and return final sum of adding all multiples
*/

function multisum(targetNumber) {
  let multiples = [];

  for (let number = 3; number <= targetNumber; number += 1) {
  	if (number % 3 === 0 || number % 5 === 0) {
  		multiples.push(number);
  	}
  }

  return multiples.reduce((sum, value) => sum + value);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168