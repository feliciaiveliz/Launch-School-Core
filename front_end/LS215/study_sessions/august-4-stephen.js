/*
Create a function that takes an arr and returns the sum of the numbers between two "1"s.

Examples

spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14

spaceApart(["1", 9, 20, 38, "1"]) ➞ 67

spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"

Notes
Return "invalid" if:
A negative number exists inside arr.
The number of "1"s does not equal 2.
Ignore any other string inside arr.
Note that "1" is not 1.
*/

/*
Understand the Problem
----------------------
- Input:
  - array of numbers and string '1's
  - numbers could be negative, 0 or positive
- Output:
  - number that represents sum or "invalid"
- Rules:
  - sum each number between both "1"s in the array
  - if any number is a negative number, return 'invalid'
  - "1" (string one) is not the same as 1 (number one)
  - don't count "1"s as part of the sum
  - if the count of "1"s is not 2, return invalid
  - input array can be modified if needed
Examples/Test Cases:
--------------------
- if "1" occurs more than twice, or less than 2, return invalid
- if array is empty, return invalid
- if any number in between "1"s are negative, return invalid

Mental Model:
-------------
Return invalid if the array is empty, or if the count of '1's is greater than or less than 2. Filter through the array and find all the occurrences of '1', find the length of the returned array. Remove all numbers from before '1' to '1'. You'll be left with numbers to sum and one more '1'. Remove the last '1' from the array. Iterate over the numbers left and check if the current number is less than 0. If it is, return invalid. Otherwise, increment a 'sum' value by all numbers that are greater than 0. Return 'sum'.

Data Structure:
---------------
- array of numbers, string '1's
- 'sum' variable 
  
Algorithm:
----------
- define 'sum' to 0
- if array is empty or the count of '1's is greater than or less than 2, return invalid
  - filter through the array and return an array of '1's
  - find the length of the array
  - loop through the array and check if current number 
- Create a copy of the input array, save to 'arrayCopy'
- Splice out a portion of the array starting from the beginning of the array (index 0) to the first occurrence of '1'
  - find the index of the first '1'
  - add 1 to '1' index to include '1' in the removed portion
- With the array of remaining numbers and '1'
  - splice out the last occurrence of '1'
- With array of only numbers, iterate:
  - if the number is less than 0, return 'invalid'
  - if the current element is a number:
    - increment 'sum' by current number
    - otherwise element is a string and skip it
- return 'sum'
*/

function spaceApart(array) {
  if (array.length === 0) return 'invalid';
  let length = array.filter(n => n === '1').length;
  if (length > 2 || length < 2) return 'invalid';
  
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0) return 'invalid';
  }
  
  let sum = 0;
  
  let arrayCopy = array.slice(0);
  arrayCopy.splice(0, (arrayCopy.indexOf('1') + 1));
  arrayCopy.splice(arrayCopy.indexOf('1'));
  
  for (let i = 0; i < arrayCopy.length; i += 1) {
    if (typeof arrayCopy[i] === 'number') {
      sum += arrayCopy[i];
    }
  } 
  
  return sum;
}

console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"])); //  14
console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2])); // "invalid"
console.log(spaceApart([1, 0, 1, 4, 3, 2, 3, 2])); // "invalid"
console.log(spaceApart(["1", 9, 20, 38, "1"])); // 67
console.log(spaceApart([-3, "1", 9, 20, 38, "1"])); // "invalid"
console.log(spaceApart(["1", 9, 20, "1", 38, 5, "1"])); // "invalid"
console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"])); // "invalid"
console.log(spaceApart([])); // "invalid"
console.log(spaceApart(["1"]))// "invalid")
console.log(spaceApart([4, 3, "1", "2", 4, "1", "2", "9"]))// 4
console.log(spaceApart(["1", -593, 1, "1", 4, 3, 2, 33, 2]))// "invalid"
console.log(spaceApart(["2", "a", 1, "1", 1, 3, 49, "1"]))// 53
console.log(spaceApart(["1", 593, 1, "1", 4, 3, -2, 33, 2]))// "invalid"