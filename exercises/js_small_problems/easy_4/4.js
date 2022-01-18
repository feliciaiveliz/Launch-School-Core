// Find the Duplicate
// Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

/*

Understand the Problem
----------------------
- Input:
  - array of numbers
- Output:
  - number
- Rules:
  - return the number that occurs twice in the array
- Questions:

Examples/Test Cases:
--------------------
- [1, 5, 3, 1] -> 1

Mental Model:
-------------
- Create an empty object. Iterate over the array of numbers and update the object. Make the keys the current number and the values as 1.
If the current number is already included in the object, update the value to 2. Once the object is complete, iterate over the keys. 
If the value is equal to 2, return the number (convert to number from string)

Data Structure:
---------------
- Input: 
  - array of numbers
  - object: numbers as keys and values as 1 or 2
- Rules: 
  - Use the value to determine which number has value 2
Algorithm:
----------
- create an 'obj' object {}
- Iterate over the numbers array and update the object:
  - if the object includes the current number, value += 1
  - if not, value = 1
- Iterate over the keys of the object, given key (number):
  - if the value === 2, return number (convert back to number)
*/

function findDup(array) {
	let obj = {};
	array.forEach(number => { 
    if (Object.keys(obj).includes(String(number))) {
    	obj[number] += 1;
    } else {
    	obj[number] = 1;
    }
	});

	return Number(Object.keys(obj).filter(n => obj[String(n)] === 2)[0]);
}

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73