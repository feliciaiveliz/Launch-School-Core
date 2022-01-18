// Grocery List
// Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

/*
Understand the Problem
----------------------
- Input:
  - 2D array
  - subarrays contain 2 elements
    - string for fruit, number for quantity
- Output:
  - 1D array of strings
    - each string is a fruit counted as many times as the quantity
- Rules:
  - Assume that each subarray contains only 2 elements
  - order the fruits in the output array according to their order in the input array
- Questions/Clarifications:
  - What if the count is 0?
    - do not include the fruit in the returned array
Examples/Test Cases:
--------------------
- [['apple', 3], ['orange', 1], ['banana', 2]] -> ["apple", "apple", "apple", "orange", "banana", "banana"]

Problem:
--------
Return an array that contains a list of fruits numbered as many times as the quantity
Mental Model:
-------------
Iterate over the larger array to get subarrays. With the subarray, start at 'count' and push fruit into result array.
Decrement count by 1 until count is 0. Do this for all subarrays then return array.

Data Structure:
---------------
- Input: 
  - array of arrays -> subarrays -> push fruit string to result array using 'quantity'
  
Algorithm:
----------
- create a result array []
- iterate over array, given subarray:
  - assign quantity to subarray index 1
  - while quantity is greater than 0
    - push fruit index 0 to result
    - decrement quantity by 1
  - repeat for other subarrays
- return result 
*/

function buyFruit(list) {
  let result = [];

  list.forEach(subarray => {
    let quantity = subarray[1];
    while (quantity > 0) {
      result.push(subarray[0]);
      quantity -= 1;
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]