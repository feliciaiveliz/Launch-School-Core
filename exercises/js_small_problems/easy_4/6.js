// Multiplicative Average
// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

/*
Understand the Problem
----------------------
- Input:
  - array of numbers
- Output:
  - string that represents average number
- Rules:
  - the number returned is the mulitplicative average of all numbers in the array
  - round the result to 3 decimal places
  - mulitplicative average means multiplying all numbers in the array then dividing that result by the number of values in the array
- Questions:
  - 
Examples/Test Cases:
--------------------
- [3, 5] -> 3 * 5 = 15 / 2 => "7.500" 

Mental Model:
-------------
- Reduce all the numbers in the array into a single number by multiplying them all together. Take that result and divide by the length of the array. 
Round the number to 3 decimal places and then convert the result to a string. 

Data Structure:
---------------
- Input: 
  - array, number, string
- Rules: 
  - Find mul. average all of numebrs, divide by length of array and return number rounded to 3 decimal places
  
Algorithm:
----------
- Use reduce() to multiply all numbers in the array into a single number
- Divide the result by array length
- Round the number to 3 decimal places using toFixed(3)
*/

function showMultiplicativeAverage(array) {
  let average = array.reduce((accum, value) => accum * value) / array.length;
  return average.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"