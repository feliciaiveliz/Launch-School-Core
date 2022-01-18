// Now I Know My ABCs
// A collection of spelling blocks has two letters per block, as shown in this list:

// Copy Code
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

/*
Understand the Problem
----------------------
- Input:
  - string of upper/lower letters
- Output:
  - true or false
- Rules:
  - Return true if a word can be spelled from only the letters in the list of blocks
    - words can only use one letter from a block
    - in other words, if a block can spell a word with both of its letters, return false
  - consider letter case to be case-insensitive
  - blocks can only be used once
Examples/Test Cases:
--------------------
- BATCH -> B:O, N:A, G:T, H:U, C:P -> each block only uses one letter, true
- BUTCH -> B:O, H:U, G:T, C:P, H:U -> H:U block uses both letters for word, false
- fans -> F:S, N:A, N:A, F:S -> both blocks use both letters for word, false
- easy -> R:E, N:A, F:S, L:Y -> each block only uses one letter, true
- HANDY3 -> 3 is not included in the blocks, false
- meow -> false, 'm' is not included.

Mental Model:
-------------
Place the blocks in subarrays within a larger array. Loop through the blocks. 
If both letters are included in the word or the letter is not in the list of letters, return false.
Any other word would only include a single letter from a block.

Data Structure:
---------------
- array of arrays -> each subarray is a block of two letters
  
Algorithm:
----------
- create blocks array and put each block in a subarray
- split string into array of characters and iterate, with a letter
  - find the block that contains the letter when uppercased
    - filter out the blocks and find the block that contains the current letter
    - save to variable 
  - if the matched block is undefined (the block couldn't be found for the letter)
    - return false
  - otherwise take the block out of the list of blocks
    - splice it out of the array
- return true
*/


function isBlockWord(word) {
	if (word === '') return false;
  const blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  const letters = word.split('');

  for (let i = 0; i < letters.length; i += 1) {
    let matchingBlock = blocks.filter(block => block.includes(letters[i].toUpperCase()))[0];

    if (matchingBlock === undefined) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1);
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('easy'));       // true
console.log(isBlockWord('fans'));       // false
console.log(isBlockWord('HANDY3'));     // false
console.log(isBlockWord('meow'));       // true
console.log(isBlockWord(''));           // false