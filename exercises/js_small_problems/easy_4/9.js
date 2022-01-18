// How Many
// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

/*
Understand the Problem
----------------------
- Input:
  - array of strings
- Output: 
  - strings
- Rules: 
  - the output is each element with the number of occurrences of that element in the array
  - assume that the array is not empty
  - assume that the elements in the array are strings
  - case sensitive: SUV !== suv
- Questions:

Examples/Test Cases:
--------------------
- ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
  - car: 4, truck: 3, SUV: 1, motorcycle: 2

Mental Model:
-------------
- Create an empty object. Iterate over the array and update the object. If the object doesn't currently have the element in its keys,
create the key value pair where the element is the key and the count is 1. If it does include the element, += value by 1. Finally, iterate over
the keys of the object and log the element with its value. 

Data Structure:
---------------
- Input: 
  - array of strings -> object with keys as elements and 1 or more as values -> strings
- Rules: 
  - Use the object to hold the elements and their occurrences. 
  
Algorithm:
----------
- create a 'obj' {}
- iterate over the input array, given vehicle:
  - if obj keys includes the vehicle, value += 1
  - else add key value pair, where vehicle is key and 1 is value
- iterate over the objects keys, given key (vehicle)
  - log vehicle => value
*/

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
	let obj = {};

	array.forEach(vehicle => {
		if (Object.keys(obj).includes(vehicle)) {
			obj[vehicle] += 1;
		} else {
			obj[vehicle] = 1;
		}
	});

	return Object.keys(obj).forEach(key => console.log(`${key} => ${obj[key]}`));
}

console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2