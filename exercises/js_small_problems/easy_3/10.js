// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

/*
Understand the Problem
----------------------
- Input:
  - string of words seperated by spaces
- Output:
  - object with word sizes as keys and number of words of a size as value
- Rules:
  - exclude non-letters when determining word size
  - if string is empty, return empty object {}
  - case does not matter when determining word size and counts
  - order of the keys does not matter
- Questions:
  - What are non-letters?
    - periods, questions marks, comman, exclamation points, numbers, etc

Examples/Test Cases:
--------------------
- 'Four score and seven.' -> Four 4 => 1, score 5 => 1, and 3 => 1 seven 5 => 1
  - '3': 1, '4': 1, '5': 2
- '' -> {}

Mental Model:
-------------
Create an object. Replace all non-letters with ''. For each word, determine it's length. Update the object
on each word with the words length and it's count starting with 1. For the next words, if the word length is already in the object, update the value of that word length by adding 1.

Data Structure:
---------------
- Input: 
  - string -> array 
  - object
- Rules: 
  - replacing the non-letters with '' as a string
  - iterate over the array of words to find the length of the word
  - update the object with the word length and the counts
  
Algorithm:
----------
- create a 'result' object {}
- if string is empty, return {}
- replace non-letters with empty string ''
- split the string into an array of words, iterate: give word
  - if 'result' includes the current word length as a string in its keys:
    - update the value by += 1
  - otherwise add the current word length and its value of 1
- return 'result'
*/

function wordSizes(string) {
  let result = {};
  if (string.length === 0) return {};

  string.replace(/[^a-z ]/gi, '').split(' ').forEach(word => {
  	if (Object.keys(result).includes(String(word.length))) {
  		result[word.length] += 1;
  	} else {
  		result[word.length] = 1;
  	}
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}