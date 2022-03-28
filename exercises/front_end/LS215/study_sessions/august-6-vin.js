// Write a function that takes two or more objects and returns
// a new object which combines all the input objects.

// Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

// The combine function should not mutate the input objects. Try to merge the objects manually, rather than using built-in methods. For bonus practice, what if the values are a different data type, like strings? Can you add versatility to your solution?

/*
Understand the Problem
----------------------
- Input:
  - two or more objects
- Output: 
  - new object with similar keys combined into one value
  - if one of the object's doesn't contain a similar key, return that value for that key
- Rules:
  - account for more than 2 objects
  - values can be of any data type
  - it's not guaranteed that the other objects contain the same key/value as the first one
  - combine(objA); "At least two objects are required."
  - combine(); // "At least two objects are required."
  - combine([1, 2, 3]); // "Invalid input"
  - combine('abcde'); // "Invalid input"
  - combine({}, {}); // {}
  - combine({}, { a: 1, b: 2, c: 3 }); // { a: 1, b: 2, c: 3 }
  - combine({ a: 'hi', b: 'abc', c: 5 }, { a: ' friend', b: 'def', c: 7 }); // { a: 'hi friend', b: 'abcdef', c: 12 }
  - combine({ a: 3, b: 3 }, { a: '5', b: '5' });
  - combine({ a: 3, b: 3 }, { a: '5', b: '5' }, { a: '7', b: '7' }); 
Examples/Test Cases:
--------------------
console.log(combine({}, { a: 1, b: 2, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(combine({ a: 'hi', b: 'abc', c: 5 }, { a: ' friend', b: 'def', c: 7 })); // { a: 'hi friend', b: 'abcdef', c: 12 }

Mental Model:
-------------
If no argument is given, (undefined), return "At least two objects are required." If only one object is given (second object is undefined), return "At least two objects are required." If the input is not an object, (string, array, number, etc) return "Invalid input". 

Put all objects into an array so that we can loop over all objects. Create an empty object called 'result'. Loop over the objects in the array. Check result to see if it contains the keys/values from the first object. Add them to result. For all subsequent objects do: If result has the current key, check the value. If both values are strings, concatenate values. If both values are numbers, add values. If one is a string and the other is a number, convert the string to a number and add the values. If it doesn't have the key, add the key to result. For each key/value pair in each object in the array, repeat the steps until there are no more objects. Return result.

...objects

Data Structure:
---------------
- array of objects -> loop through array of objects and update result accordingly
  
Algorithm:
----------
- define result to {}
- If arguments are undefined, or arguments contains only one object, return "At least two objects are required." 
- Loop through the input array and check: if element is a string, an array, or a number, return "invalid result"
- Loop over the array of objects and with the current object's key: 
  - if result has that key, check data types
    - if result key (value) and current object key (value) are both strings or numbers
      - combine the values: result[key] += object[key]
    - else if result value is a number and current object value is string
      - convert the string to a number and combine values
      - if the current object value is a number and result value is string
        - convert the result value to a number and combine values
  - if result doesn't have the key, add key value pair to result
- return result
*/

function combine(...objects) {
  let result = {};
  
  for (let i = 0; i < objects.length; i += 1) {
    if (typeof objects[i] === 'string' || typeof objects[i] === 'number' || Array.isArray(objects[i])) return "Invalid input";
  }
  
  if (objects.length === 0 || objects.length === 1) return "At least two objects are required.";
  
  objects.forEach(object => {
    Object.keys(object).forEach(key => {
      if (result[key]) {
        if ((typeof result[key]) === 'string' && typeof object[key] === 'string' || (typeof result[key] === 'number' && typeof object[key] === 'number')) {
          result[key] += object[key];
        } else {
          if (typeof result[key] === 'string') {
            result[key] += String(object[key]);
          } else {
            result[key] += Number(object[key]); 
          }
        }
      } else {
        result[key] = object[key];
      }
    });
  });
  
  return result;
}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
console.log(combine(objA, objB)); // Returns { a: 13, b: 20, c: 36, d: 3 }
console.log(combine({})); // "At least two objects are required."
console.log(combine()); // "At least two objects are required."
console.log(combine([1, 2, 3])); // "Invalid input"
console.log(combine('abcde')); // "Invalid input"
console.log(combine({}, {})); // {}
console.log(combine({}, { a: 1, b: 2, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(combine({ a: 'hi', b: 'abc', c: 5 }, { a: ' friend', b: 'def', c: 7 })); // { a: 'hi friend', b: 'abcdef', c: 12 }
console.log(combine({ a: 3, b: 3 }, { a: '5', b: '5' })); // { a: 8, b: 8 }
console.log(combine({ a: 3, b: 3 }, { a: '5', b: '5' }, { a: '7', b: '7' })); // { a: 15, b: 15 } 