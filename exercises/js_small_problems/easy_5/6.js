// Counting Up
// Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

// You may assume that the argument will always be a positive integer.

/*
Understand the Problem
----------------------
- Input:
  - positive number
- Output:
  - array of all numbers from 1 to argument 
- Rules:
  - array will hold numbers from 1 to argument inclusive
  - assume that the input will always be positive
  - numbers in array will be ordered in ascending order
- Questions:
  - What does inclusive mean?
    - include the argument number as the last digit in array
  - Can I always expect a number argument?
    - yes
Examples/Test Cases:
--------------------
- 5 -> [1, 2, 3, 4, 5]
- 3 -> [1, 2, 3]
- 1 -> [0]

Mental Model:
-------------
- Create a range from 1 to 5. Put all number into an array and return array.

Data Structure:
---------------
- Input: 
  - numbers
  - array
- Rules: 
  - Start from 1 up to the input number and put all numbers into array.
  
Algorithm:
----------
- Using from(), create an array of the length of the input number. Use i to represent the values in the array
- On each iteration, i + 1 to add values starting from 1
- Return array
*/

function sequence(number) {
  return Array.from({length: number}, (_, i) => i + 1);
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]