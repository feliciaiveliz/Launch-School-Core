// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

/*
Understand the Problem
----------------------
Input:
- number
- assume that the number is greater than 0
- assume all input are numbers
Output:
- number
- number greater than 0
- number is greater than input
Rules:
- start adding from 1
- stop adding at number passed in
Requirements:
- return sum of all numbers from 1 to 'n'
- return 0 if input is 0
- include the input number in the final sum
Examples/Test Cases:
- 4: 1 + 2 + 3 + 4 = 10
- 0: 0
Data Structure:
---------------
- Input: 
  - numbers
- Rules: 
  - start from 1 and increment a sum by numbers until we reach the limit, or the input number given
Algorithm:
----------
- create a variable 'sum' to 0
- loop -> start at 1 and end at input number
  - increment 'sum' by current number
- return 'sum'
*/

function addUp(n) {
  let sum = 0;
  
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }
  
  return sum;
}

console.log(addUp(0)); // 0
console.log(addUp(4)); // 10
console.log(addUp(13)); // 91
console.log(addUp(600)); // 180300