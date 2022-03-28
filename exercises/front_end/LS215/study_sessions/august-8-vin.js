// Task
// You will be given a list of objects. Each object has type, material, and 
// possibly secondMaterial. The existing materials are: paper, glass, organic, 
// and plastic.

// Your job is to sort these objects across the 4 recycling bins according to 
// their material (and secondMaterial if it's present), by listing the type's 
// of objects that should go into those bins.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in 
// both of the respective bins
// The order of the type's in each bin should be the same as the order of 
// their respective objects that are in the input list

// Example
// input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]

// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

/*
Understand the Problem
----------------------
- Input:
  - array of objects
  - each object has a "type" and a material and possible second material
  - bins: paper, glass, organic and plastic
- Output:
  - array of arrays
  - each array is a bin
    - the bin contains each "type" or item
- Rules:
  - if an item contains two materials, put both items in the two bins according to the mateiral
    - wine bottle -> paper, glass
    - if a bin doesn't have any items in it, return the empty bin as an empty array
    - the order of the types in each bin should reflect the order that they are in the input list 
      - types are in order for all objects
      - paper, glass, organic, plastic
Examples/Test Cases:
--------------------
Mental Model:
-------------
Create an empty array to hold all 4 recycling bin arrays. Use an object to hold the bin types (paper, glass, organic and plastic) and arrays as the bins themselves. Iterate over the array of objects and deal with one object bin at a time. Iterate over the keys of the current object. Look at the material and find the bin of that material and add the type to that bin. Do the same for the second material. If the type is not one of the bins available, skip the item. 

Data Structure:
---------------
- object with types as keys and array of strings (types)
- array of arrays -> only return the values (array of types)
  
Algorithm:
----------
- define 'result' array []
- define sortedTypes = ['paper', 'glass', 'organic', 'plastic']
- define 'bins' object {}
- iterate over the list of objects, given object
  - save the type to a variable and shift it off of the array
  - iterate over the keys of the object (material, secondMaterial)
    - if 
    - add type to the array according to the material
  - 
*/

function recycle(array) {
 let result = [];
 let bins = { 'paper': [], 'glass': [], 'organic': [], 'plastic': [] };
  
 for (let i = 0; i < array.length; i += 1) {
   if (typeof array[i] !== 'object' || Array.isArray(array[i])) { 
     return 'Only objects allowed';
   }
 }
  
 array.forEach(object => {
   let materials = Object.values(object).slice(1);
   
   materials.forEach(material => {
     if (material === 'paper') {
       bins['paper'].push(object['type']);
     } else if (material === 'plastic') {
       bins['plastic'].push(object['type']);
     } else if (material === 'organic') {
       bins['organic'].push(object['type']);
     } else if (material === 'glass') {
       bins['glass'].push(object['type']);
     } else {
       continue;
     }
   });
 });
  
  Object.values(bins).forEach(array => { result.push(array); } );
  
  return result;
}

let binOne = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

console.log(recycle(binOne)); 

// [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

let binTwo = [
  {"type": "milk carton", "material": "plastic", "secondMaterial": "paper"},
  {"type": "pizza box", "material": "paper"},
  {"type": "jelly jar", "material": "glass", "secondMaterial": "paper"},
  {"type": "straw", "material": "plastic"},
]

console.log(recycle(binTw// Task
// You will be given a list of objects. Each object has type, material, and 
// possibly secondMaterial. The existing materials are: paper, glass, organic, 
// and plastic.

// Your job is to sort these objects across the 4 recycling bins according to 
// their material (and secondMaterial if it's present), by listing the type's 
// of objects that should go into those bins.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in 
// both of the respective bins
// The order of the type's in each bin should be the same as the order of 
// their respective objects that are in the input list

// Example
// input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]

// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

/*
Understand the Problem
----------------------
- Input:
  - array of objects
  - each object has a "type" and a material and possible second material
  - bins: paper, glass, organic and plastic
- Output:
  - array of arrays
  - each array is a bin
    - the bin contains each "type" or item
- Rules:
  - if an item contains two materials, put both items in the two bins according to the mateiral
    - wine bottle -> paper, glass
    - if a bin doesn't have any items in it, return the empty bin as an empty array
    - the order of the types in each bin should reflect the order that they are in the input list 
      - types are in order for all objects
      - paper, glass, organic, plastic
Examples/Test Cases:
--------------------
Mental Model:
-------------
Create an empty array to hold all 4 recycling bin arrays. Use an object to hold the bin types (paper, glass, organic and plastic) and arrays as the bins themselves. Iterate over the array of objects and deal with one object bin at a time. Iterate over the keys of the current object. Look at the material and find the bin of that material and add the type to that bin. Do the same for the second material. If the type is not one of the bins available, skip the item. 

Data Structure:
---------------
- object with types as keys and array of strings (types)
- array of arrays -> only return the values (array of types)
  
Algorithm:
----------
- define 'result' array []
- define sortedTypes = ['paper', 'glass', 'organic', 'plastic']
- define 'bins' object {}
- iterate over the list of objects, given object
  - save the type to a variable and shift it off of the array
  - iterate over the keys of the object (material, secondMaterial)
    - if 
    - add type to the array according to the material
  - 
*/

function recycle(array) {
  let result = [];
  let bins = { 'paper': [], 'glass': [], 'organic': [], 'plastic': [] };
  
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'object' || Array.isArray(array[i])) { 
      return 'Only objects allowed';
    }
  }
  
  for (let i = 0; i < array.length; i += 1) {
    let materials = Object.values(array[i]).slice(1);
    for (let j = 0; j < materials.length; j += 1) {
      if (materials[j] === 'paper') {
        bins['paper'].push(array[i]['type']);
      } else if (materials[j] === 'plastic') {
        bins['plastic'].push(array[i]['type']);
      } else if (materials[j] === 'organic') {
        bins['organic'].push(array[i]['type']);
      } else if (materials[j] === 'glass') {
        bins['glass'].push(array[i]['type']);
      } else {
        break;
      }
    }
  }
  
  Object.values(bins).forEach(array => { result.push(array); } );
  
  return result;
}

let binOne = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

console.log(recycle(binOne)); 

// [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

let binTwo = [
  {"type": "milk carton", "material": "plastic", "secondMaterial": "paper"},
  {"type": "pizza box", "material": "paper"},
  {"type": "jelly jar", "material": "glass", "secondMaterial": "paper"},
  {"type": "straw", "material": "plastic"},
]

console.log(recycle(binTwo)); // [["milk carton", "pizza box", "jelly jar"], ["jelly jar"], [], ["milk carton", "straw"]]

let binThree = [
  {"type": "out of date can of beans", "material": "metal", "secondMaterial": "paper"},
  {"type": "rotten tomatoes", "material": "organic"},
]

console.log(recycle(binThree)); // [[[], [], ['rotten tomatoes'], []]

let binFour = [];

console.log(recycle(binFour)); // [[], [], [], []]

let binFive = ['shoes', 'shirts', 'milk'];

console.log(recycle(binFive)); // "Only objects are allowed."o)); // [["milk carton", "pizza box", "jelly jar"], ["jelly jar"], [], ["milk carton", "straw"]]

let binThree = [
  {"type": "out of date can of beans", "material": "metal", "secondMaterial": "paper"},
  {"type": "rotten tomatoes", "material": "organic"},
]

console.log(recycle(binThree)); // [[[], [], ['rotten tomatoes'], []]

let binFour = [];

console.log(recycle(binFour)); // [[], [], [], []]

let binFive = ['shoes', 'shirts', 'milk'];

console.log(recycle(binFive)); // "Only objects are allowed."