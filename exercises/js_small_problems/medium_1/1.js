// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

/*
Understand the Problem
----------------------
- Input:
  - array of strings, numbers, objects, functions, arrays, etc.
  - array could be empty 
- Output: 
  - new array with the first element moved to the end of the array
  - empty array
  - undefined
- Rules:
  - if array is not an array, returned undefined
  - if array is empty, return []
  - do not modify the original array
  - preserve the order in which the element were place in the original array
    - except for the first element
  - if the array contains a single element, return that element in a new array
Examples/Test Cases:
--------------------
- [7, 3, 5, 2, 9, 1] -> [3, 5, 2, 9, 1, 7]
- ['a', 'b', 'c'] -> ['b', 'c', 'a']
- ['a'] -> ['a']
- [1, 'a', 3, 'c'] -> ['a', 3, 'c', 1]
- [{ a: 2 }, [1, 2], 3] -> [[1, 2], 3, { a: 2 }]
- [] -> []
- no argument -> default to [], return []
- 'meow' -> undefined
Mental Model:
-------------
If the input array is empty return [], if input is not an array, return undefined. Make a copy of the original array. Take out the first element, and insert it into the back of the copied array.
Return array.

Data Structure:
---------------
- arrays
  - modifying a copy of the original array and moving the first element to the end of the array
  
Algorithm:
----------
- if input is not an array, return undefined
- if input array is empty, return []
- make a copy of the original array
  - shift off the first element of the array and push it back to the end of the array
- return array
*/

function rotateArray(array) {
	if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  let copy = array.slice(0);
  let firstElement = copy.shift();
  copy.push(firstElement);
  return copy;
}

function rotateArray(array) {
  if (!Array.isArray(array)) return;
  if (array.length === 0) return [];

  return array.slice(1).concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]