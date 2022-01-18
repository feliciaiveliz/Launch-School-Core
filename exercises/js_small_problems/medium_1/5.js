// Word to Digit
// Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

/*
Understand the Problem
----------------------
- Input:
  - string as sentence of words seperated by spaces and punctuation
- Output:
  - new string that contains every occurrence of a number word converted to its corresponding digit
- Rules:
  - do not modify the original string
  - include numbers 0-9
  - do not include punctuation when converting number words to its digit
  - seperate digits in string by a single space like in original string
Examples/Test Cases:
--------------------
- 'Please call me at five five five one two three four. Thanks.'
- 'Please call me at 5 5 5 1 2 3 4. Thanks.'

Mental Model:
-------------
Create a collection that will hold number words and their corresponding digits.
Iterate over the string and for any number word, convert it to its digit and place in new string. 
All other characters will be left as is. Return new string with all number words converted to digits.

Data Structure:
---------------
- object -> number word as key, digit as value
- array of words -> map over words and convert only number words and leave all other words as is
  
Algorithm:
----------
- define 'wordDigit' object {}
- split string into array of words and map:
  - if the current word is a number word
    - if number word contains punctuation at end
      - slice out punctuation and save to variable
      - convert the number word to digit
      - return the digit + punctuation
    - convert the number word to digit
  - otherwise leave word as is
- join array back into a string with single space
- return string 
*/

function wordToDigit(string) {
  let wordDigits = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 };
  
  return string.split(' ').map(word => {
  	if ((wordDigits[word.slice(0, -1)]) && word[word.length - 1].match(/[^a-z]/gi)) {
      let punctuation = word[word.length - 1];
      word = word.slice(0, -1);
  		return wordDigits[word] + punctuation;
  	} else if (wordDigits[word]) {
  		return wordDigits[word];
  	} else {
  		return word;
  	}

  }).join(' ');
}

let wordDigits = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 };

function wordToDigit(sentence) {
  Object.keys(wordDigits).forEach(word => {
  	let regex = new RegExp(word, 'g');
  	sentence = sentence.replace(regex, wordToDigit[word])
  })
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."