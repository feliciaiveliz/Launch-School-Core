// Write a function that takes a string consisting of one or more space separated words and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

/*
Understand the Problem
----------------------
Input:
- string of one or more space seperated words
Output:
- object with keys as number of words and values as words of different sizes
Rules:
- words are sequences of non-space characters
- punctutation is included in word length
Requirements:
- keys: word length
- values: number of words with that word length
- order the key/value pairs from smallest to largest number
  - remember that the keys are strings
Examples/Test Cases:
- 'Four score and seven.' -> 4: 1, 5: 1, 3: 1, 6: 1
Data Structure:
---------------
- Input: 
  - string
  - array
  - object
- Rules: 
  - iterate over words and update the object with the word lengths and their counted occurrences in the input string
Algorithm:
----------
- create a 'result' object {}
- return '' if input is {}
- split string into array of words based on whitespace, given word:
  - if 'result' has current word length as key, += 1
  - if it doesn't, = 1
- return 'result'
*/

function wordSizes(string) {
  let result = {};
  if (string.length === 0) return {};
  
  string.split(' ').forEach(word => {
    if (result.hasOwnProperty(word.length)) {
      result[word.length] += 1;
    } else {
      result[word.length] = 1;
    }
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));  // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}