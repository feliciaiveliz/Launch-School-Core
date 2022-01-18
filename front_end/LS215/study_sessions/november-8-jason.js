/*
Matching

Write a function that takes two objects and returns an array of objects
containing key/value pairs from the first object that are also in the
second object.
*/

// INPUT:
// - two objects

// OUTPUT:
// - array of objects that contain entries that are in both objects

// RULES:
// - input will always be two objects
// - if both objects are empty, return []
// - if one obj is empty, return []
// - if string and number values, treat them as different
// - if upper and lowercase letters, treat them as different
// - if string boolean and boolean treat them as different
// - values will not be arrays or objects

// DATA STRUCTURES:
// - objects 

// ALGORITHM:
// - if both objs are empty, return []
// - if one obj is empty, return []
// - create a result array
// - iterate through the keys of obj1, given key
//   - if the key is included in obj2's keys (array)
//     - if the current value is NaN and the second is NaN
//       - add the key and NaN property to 'result'
//     - otherwise if both values are equal
//       - numbers, strings, undefined, null, empty strings, booleans
//       - add the property to 'result'
//       - result push => { key: value }
//     - 
//   - return result
// - 
  
function match(first, second) {
  if (Object.keys(first).length === 0 || Object.keys(second).length === 0) return [];
  let result = [];
  
  Object.keys(first).forEach(key => {
    let obj = {};
    if (Object.keys(second).includes(key)) {
      if (Number.isNaN(first[key]) && Number.isNaN(second[key])) {
        obj[key] = first[key];
        result.push(obj); // { a: NaN }
      } else if (first[key] === second[key]) {
        obj[key] = first[key];
        result.push(obj);
      }
    }
  });
  
  return result;
}

// Empty objs
console.log(match({}, {})); // []
console.log(match({}, {a: 1})); // []

// Happy Path
console.log(match({a: 1}, {a: 1}));                           // [ { a: 1 } ]
console.log(match({a: 1, d: 4}, {a: 1, c: 3}));               // [ { a: 1 } ]
console.log(match({a: 1, d: undefined}, {a: 1, c: 3}));       // [ { a: 1 } ]
console.log(match({a: 1, b: 2, c: 3}, {a: 1, c: 3}));         // [ { a: 1 }, { c: 3 } ]
console.log(match({a: NaN}, {a: NaN}));  // [ { a: NaN } ]
console.log(match({a: 'abc'}, {a: 'abc'}));  // [ { a: 'abc' } ]
console.log(match({a: ''}, {a: ''}));  // [ { a: '' } ]
console.log(match({a: undefined}, {a: undefined}));  // [ { a: undefined } ]
console.log(match({a: null}, {a: null})); // [ {a: null} ]
console.log(match({1: undefined}, {1: undefined}));  // [ { 1: undefined } ]

// No common properties
console.log(match({a: 1}, {b: 2}));      // []

// Different data types
console.log(match({a: '1'}, {a: 1}));    // []
console.log(match({A: 1}, {a: 1}));      // []
console.log(match({a: null}, {a: 'null'}));  // []
console.log(match({a: false}, {a: 'false'}));  // []

console.log(match({a: undefined, b: 2}, {c: undefined}));     // []
console.log(match({a: null, b: 2}, {a: 1}));                  // []
console.log(match({a: NaN, b: 2}, {a: 1}));                   // []
console.log(match({a: true, b: 2}, {a: true}));               // [ { a: true } ]
console.log(match({a: true, b: 2}, {a: 1}));                  // []
console.log(match({a: 1}, {}));                               // []
console.log(match({}, {a: undefined}));                       // []
