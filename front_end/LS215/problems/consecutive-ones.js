// Create a function that counts the number of blocks of two or more adjacent 1s in an array.

// INPUT:
// - array of 1s and 0s

// OUTPUT:
// - number -> two or more adjacent 1s (blocks)

// RULES:
// - only count 1s for blocks
// - input will only be an array with number 1s and 0s

// DATA STRUCTURES:
// - array

// ALGORITHM:
// - create a count variable set to 0
// - iterate through the input array
// - create a new array called 'blocks' []
// - if the current number 1, push 1 to 'blocks'
// - if the number is 0
//   - check the length of 'blocks'
//     - if >= 2, increase 'count' by 1
// - if we're at the end of iteration, check the length of 'blocks'
//   - if >= 2, increase 'count' by 1
//     - clear the blocks array
// - return count

// [1, 0, 0, 1, 1, 0, 1, 1, 1]
// [1, 1, 1] 2

function countOnes(array) {
  let count = 0;
  let blocks = [];
  
  array.forEach(number => {
    if (number === 1) {
      blocks.push(number);
    } else {
      if (blocks.length >= 2) {
        count += 1;
      }
      blocks = [];
    }
  });
  
  if (blocks.length >= 2) count += 1;
  return count;
}

console.log(countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]));   // 2
console.log(countOnes([1, 0, 1, 0, 1, 0, 1, 0]));      // 0
console.log(countOnes([1, 1, 1, 1, 0, 0, 0, 0]));      // 1
console.log(countOnes([0, 0, 0]));                     // 0
