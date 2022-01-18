
// You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

// INPUT:
// - array of objects

// OUTPUT:
// - new array of objects

// INVALID TYPES:
// - null
// - undefined
// - NaN
// - booleans
// - specials characters and string digits (name only)
// - empty strings

// RULES:
// - split bunches based on quantity
// - return empty array if input array is empty
// - return empty array if all objects are empty
// - valid name data types are strings with letters only (empty, non-string are invalid)
// - valid quantity data types are numbers and string numbers (all others are invalid)
// - if either property (name, quantity) are not included in obj, ignore them

// DATA STRUCTURES:
// - objects -> needs both name and quanity
// - check the types of both properties

// ALGORITHM:
// - if array is empty, return []
// - create an empty array called 'result'
// - loop over the array of objs:
//   - if the length of the objs' keys array is 0, return []
// - iterate over the array of objects, given object
//   - if obj name and quantity:
//     - create an empty object {}
//     - if name value does not include non-letters and quanity value is not NaN and any other type -> it's value
//       - while quantity is greater than 0
//         - add the key and 1 to obj
//         - { name: 'grapes', quantity: 1 }
//         - push obj to 'result'
//         - decrease quantity by 1
// - return result

function splitBunches(array) {
  if (array.length === 0) return [];
  let result = [];
  
  array.forEach(object => {
    let obj = {};    
    if (object['name'] && object['quantity']) {
      if (!object['name'].match(/[^a-z]/i) && !Number.isNaN(object['quantity']) && typeof object['quantity'] === 'number') {
        
        while (object['quantity'] > 0) {
          obj['name'] = object['name'];
          obj['quantity'] = object['quantity'];
          result.push(obj);
          object['quantity'] -= 1;
        }
      }
    }
  });
  
  return result;
}

let splitBunches = (bunches) => {
  let answer = [];
  bunches.forEach(bunch => {
    let temp = {};
    let quant = bunch.quantity

    for (let k in bunch) {
      if (k === "quantity") {
        temp.quantity = 1;
      } else {
        temp[k] = bunch[k];
      }
    }

    for (let ind = 0; ind < quant; ind += 1) {
      answer.push(temp);
    }
  })

  console.log(answer);
}
        
//   // Empty array
// console.log(splitBunches([])); // []

// // Empty objects
// console.log(splitBunches([{}, {}]));
// // []

// Happy Path
// console.log(splitBunches([
//   { name: "grapes", quantity: 2 }
// ]));
// // ➞ [
// //   { name: "grapes", quantity: 1 },
// //   { name: "grapes", quantity: 1 }
// // ]

// console.log(splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ]));
// // [
// //   { name: "currants", quantity: 1},
// //   { name: "grapes", quantity: 1 },
// //   { name: "grapes", quantity: 1 },
// //   { name: "bananas", quantity: 1 },
// //   { name: "bananas", quantity: 1 }
// // ]

// More than 2 properties
console.log(splitBunches([
  { name: "currants", quantity: 1, color: 'red'},
  { name: "grapes", quantity: 2, color: 'green'},
  { name: "bananas", quantity: 2 }
]));
// ➞ [
//   { name: "currants", quantity: 1, color: 'red'},
//   { name: "grapes", quantity: 1, color: 'green'},
//   { name: "grapes", quantity: 1, color: 'green'},
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

console.log(splitBunches([
  { name: "Currants", quantity: 1 },
  { name: "Grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]));
// ➞ [
//   { name: "Currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

// Invalid name types
console.log(splitBunches([
  { name: "12!!", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "", quantity: 2 }
]));
// ➞ [
//   { name: "grapes", quantity: 1 },
// ]

console.log(splitBunches([
  { name: "Currants", quantity: 1 },
  {},
  { name: "bananas", quantity: 2 }
]));
// ➞ [
//   { name: "Currants", quantity: 1},
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

// Undefined
console.log(splitBunches([
  { name: "Currants", quantity: undefined },
  { name: undefined, quantity: 2 },
  { name: "bananas", quantity: 2 }
]));
// ➞ [
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

// NaN
console.log(splitBunches([
  { name: "Currants", quantity: 1 },
  { name: "Grapes", quantity: NaN },
  { name: "bananas", quantity: 2 }
]));
// ➞ [
//   { name: "Currants", quantity: 1},
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

console.log(splitBunches([
  { name: "currants", quantity: true },
  { name: "grapes", quantity: '2' },
  { name: "bananas", quantity: 2 }
]));
// ➞ [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

// Missing properties
console.log(splitBunches([
  { name: "Currants"},
  { name: "Grapes", quantity: 2 },
  { quantity: 2 }
]));
// ➞ [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
// ]
