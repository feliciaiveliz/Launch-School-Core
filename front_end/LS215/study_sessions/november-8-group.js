/* 

You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

 */

// INPUT: 
// - string

// OUTPUT:
// - number => count of how many times sections have repeating words

// RULES:
// - input will always be a string
// - section -> same words in subsequent order

// DATA STRUCURES:
// - strings -> array

// ALGORITHM:
// - if input is an empty string, return 0
// - create a 'count' variable - set to 0
// - split the string into array of words based on a single space
// - create a 'sections' empty array 
 //    - add first word from 'words' to 'sections'
//   - lowercase the first word
// - iterate over words array, given word:
//   - lowercase the current word
//   - check if it's equal to the last word in 'sections'
//     - if it is, add the current word to 'sections'
//     - if it is not
//       - if the length of sections is >= 2, increment 'count' by 1
//       - clear the sections array
//       - add the current word to 'sections'
//    - if we're at the end of iteration and the sections array length is greater than or equal to 2, increment count
// - return count

function countAdjacentPairs(string) {
  if (string.length === 0) return 0;
  let count = 0;
  let words = string.split(' ');
  let sections = [];
  sections.push(words.shift().toLowerCase());
  
  words.forEach(word => {
    word = word.toLowerCase();
    if (sections[sections.length - 1] === word) {
      sections.push(word);
    } else {
      if (sections.length >= 2) {
        count += 1;
        sections = [];
        sections.push(word);
      }
    }
  });
  
  if (sections.length >= 2) count += 1;
  return count; 
}

console.log(countAdjacentPairs('')); // 0  'An empty string should return 0.
console.log(countAdjacentPairs('orange Orange kiwi pineapple apple')); // 1, "Case should be ignored. 
console.log(countAdjacentPairs('orange Orange kiwi KiWI pineapple apple')); // 2
console.log(countAdjacentPairs('banana banana banana')); // 1, "Once a word has been paired, it is ignored.
console.log(countAdjacentPairs('Orange pineapple')); // 0
console.log(countAdjacentPairs('orange')); // 0

