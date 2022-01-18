// Double Char Part 2
// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

/*
Understand the Problem
----------------------
- Input:
  - empty string or string that contains letters, numbers, punctuation, whitespace
- Output:
  - new string that doubles only consonant letters
- Rules:
  - do not double vowels, digits, punctuation, or whitespace
- Questions:
  - What are vowels?
    - a, e, i, o, u
  - What are consonants?
    - any letter but a, e, i, o, u
Examples/Test Cases:
--------------------
- 'String' -> 'SSttrrinngg'
- '' -> ''
- 'July 4th' -> 'JJullyy 4tthh'

Mental Model:
-------------
- Create an array that contains only consonant letters. Iterate over the input string. If the current character is a consonant letter, double it and add it to a result string. If it is not, add it to the result string as is.

Data Structure:
---------------
- Input: 
  - result string
  - array of consonant letters
  - array of characters in input string
- Rules: 
  - Check all characters to see if they are consonants. Only double the consonants in the string.
  
Algorithm:
----------
- Create a result string ''
- Create a consonants array ['b', 'c', 'd', etc.]
- Split input string into an array of characters and iterate, given character:
  - if consonant array includes the current character downcased:
    - repeat the character twice and add it to result string
  - otherwise
    - add character to result string as is
- return result
*/

const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(string) {
  let result = '';
  
  string.split('').forEach(character => {
  	if (consonants.includes(character.toLowerCase())) {
  		result += character.repeat(2);
  	} else {
  		result += character;
  	}
  });

  return result;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""