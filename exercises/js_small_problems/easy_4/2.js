// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

/*
Understand the Problem
----------------------
- Input:
  - two arrays of number values
- Output:
  - one array of the union of the values from the two input arrays
- Rules:
  - There should be no duplication in the result array
  - Numbers in the array will be ordered from smallest to largest
  - Numbers can be 0 or less than 0, or greater than 0
  - Arrays can be of different length
- Questions:
  - What if the numbers in the input array are out of order?
    - Sort the final array so that numbers are ordered smallest to largest
Examples/Test Cases:
--------------------
- [1, 3, 5], [3, 6, 9] -> [1, 3, 5, 6, 9]
- [3, 3, 6, 4], [9, 2, 5, 7, 8, 1] -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

Mental Model:
-------------
- Create a copy of the first array. Assign the second array to the end of the first array. Flatten the array. Remove duplicates.
Sort the final array by numbers from smallest to largest. Return the final array. 

Data Structure:
---------------
- Input: 
  - array of numbers
- Rules: 
  - Push numbers from second array into final array and sort
Algorithm:
----------
- create 'arrayCopy' array and copy all values from first array with slice(0)
- create a 'result' array to []
- assign last element position of arrayCopy to the second array
- flatten the array
- iterate over arrayCopy:
  - if result includes current number
    - skip number
  - if not
    - add number to array
- sort array by numbers, smallest to largest a - b
- return 'result'
*/

function union(a, b) {
  let arrayCopy = a.slice(0);
  arrayCopy[arrayCopy.length] = b;
  return arrayCopy.flat();
  // return result.flat().sort((a, b) => a - b);
}

function union(...arrays) {
	let result = [];
	let addUniqueValues = function(value) {
		if (!result.includes(value)) result.push(value);
	};

	arrays.forEach(array => array.forEach(addUniqueValues));
	return result.sort((a, b) => a - b);
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([3, 3, 6, 4], [9, 2, 5, 7, 8, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]