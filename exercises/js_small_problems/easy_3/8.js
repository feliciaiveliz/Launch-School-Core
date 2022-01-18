// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

/*

Understand the Problem
----------------------
- Input:
  - string of words seperated by spaces
- Output:
  - new string
- Rules:
  - every word contains at least one letter
  - the string will contain at least one word
  - assume that each string contains nothing but words and spaces
  - there are no trailing, leading or repeated spaces
- Requirements:
  - swap the first and last letters of every word
  - preserve case of all letters
  - return a new string; do not modify original string
  - words are preserved in their original position in the string
- Questions:

Examples/Test Cases:
--------------------
- 'Oh what a wonderful day it is' -> 'hO thaw a londerfuw yad ti si'
- 'a' -> 'a'
- 'Abcde' -> 'bcdeA' 

Mental Model:
-------------
- For each word in the string, save the first and last letters of the word. After they have been saved,
assign the first letter to the last position in the word, and assign the last letter to the first position of the word.
This becomes the new word with first and last letters swapped. Do this for every word. 

Data Structure:
---------------
- Input: 
  - string -> array
  - array -> string
- Rules: 
  - iterate over an array of words
  - map the words: swap the first and last letters for each word
  
Algorithm:
----------
- return map, given word:
  - save first letter to firstLetter
  - save last letter to lastLetter 
  - perform the swap: lastLetter + word slice (1, end of word - 1) + firstLetter
  - if word length is equal to 1, return word
  - join the array of words back into a string
*/

function swap(string) {
	return string.split(' ').map(word => {
		if (word.length === 1) return word;
		let firstLetter = word[0];
		let lastLetter = word[word.length - 1];
		return lastLetter + word.slice(1, -1) + firstLetter;
	}).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"