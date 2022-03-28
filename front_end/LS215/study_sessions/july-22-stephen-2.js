// Write a function that converts an object into an array of keys and values.
/*
Understand the Problem
----------------------
Input:
- object
- number of key/value pairs is greater than 0
Output:
- array
- subarrays -> first element is key, second element is value
Requirements:
- each subarray contains two elements
- first element is key, could be any type as string
- second element is value, could be any type
Examples/Test Cases:
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]
Data Structure:
---------------
- Input: 
  - array
- Rules: 
  - iterate over object and add the key and value to a subarray
  - push subarray into outer result array
Algorithm:
----------
- create a 'result' array []
- retrieve all keys from the object (array) and iterate (given key):
  - in a subarray:
    - first element: current key
    - second element: value of the current key
  - push subarray into 'result'
- return 'result'
*/

function objectToArray(object) {
  let result = [];
  
  Object.keys(object).forEach(key => {
    result.push([key, object[key]]);
  });
  
  return result;
}
  
// Examples
console.log(objectToArray({
  D: 1,
  B: 2,
  C: 3
}));  // [["D", 1], ["B", 2], ["C", 3]]

console.log(objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
})); // [["likes", 2], ["dislikes", 3], ["followers", 10]]