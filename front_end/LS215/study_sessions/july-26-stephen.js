// Given an array of strings, reverse the strings in the array but don't reverse the punctuation. 

/*
Understand the Problem
----------------------
- Input:
  - array of strings with or without punctuation
- Output:
  - new array of reversed strings with punctuation preserved in their original order
- Rules:
  - strings with only letters are reversed
  - strings with punctuation are reversed, punctuation will have to be put back in their original places
- Questions:
  - What if the array contains invalid input? (numbers, empty array, etc.)
    - return [] 
  - What about strings that contain digits?
    - treat the digits as letters, reverse the string and preserve punctuation as normal
Examples/Test Cases:
--------------------
- "shan't" -> "tnah's"
- "h'allow33n'" -> "n'33wollah'"
- [1, 2, 3] -> []
- [".?'"] -> [".?'"]

Mental Model:
-------------
- If the array contains anything but strings or is empty, return []. For strings that contain digits, treat them as normal strings. 
- For each string, iterate over each character and update the object with the index of the punctuation as key and the punctuation as value. After iterating over the string, delete the punctuation from the string by replacing the punctuation with ''. Reverse the string. Iterate over the object keys, and insert the punctuation into their index location in the string. Convert the array of characters into a string and push the string into the array. Clear the object so that it's empty for the next word.

Data Structure:
---------------
- Input: 
  - array of strings
  - array of characters 
    - updating an object
Algorithm:
----------
- create a 'punctuationObj' {}
- create a 'result' []
- if the array is empty, return []
- iterate over the array of strings, given string
  - check if current element is a string using String()
  - if it is not a string, push '' to 'result'
  - else: 
    - split the string into an array of characters and iterate with an index, given character:
      - if the current character is anything but a letter or number, update the 'punctuationObj' with 'index' as key and current character as value
      - replace the punctuation with '' then split string again and reverse array of characters
      - Iterate over the object keys, and put the values (punc.) back into the string (splice)
      - join the array of characters back into a string with join('')
      - push the string into the 'result' array
    - reassign 'punctuationObj' to {}
- return 'result'
*/

function preservePunctuation(array) {
  let punctuationObj = {};
  let result = [];

  if (array.length === 0) return [];

  array.forEach(string => {
    if (string !== String(string)) {
      result.push('');  
    } else {
      string.split('').forEach((char, index) => {
        if (char.match(/[^a-z0-9]/i)) {
          punctuationObj[index] = char;
        }
      });

      string = string.replace(/[^a-z0-9]/gi, '').split('').reverse();
      
      Object.keys(punctuationObj).forEach(index => {
        string.splice(index, 0, punctuationObj[index]);
      });

      result.push(string.join(''));
    }
    punctuationObj = {};
  });
  return result;
}

console.log(preservePunctuation(["shan't", "won't", "y'all'rn't", "fixin'", "'eard", "why??", "peter", "rabbit"])); // returns ["tnah's", "tno'w", "t'nrl'la'y", "nixif'", "'drae", "yhw??", "retep", "tibbar"]);
console.log(preservePunctuation([".?'"])); // returns [".?'"]
console.log(preservePunctuation([1, 2, 3, 'hello'])); // returns ['', '', '', 'olleh]
console.log(preservePunctuation([]));        // returns []
console.log(preservePunctuation(["h'allow33n'", 'pum2p?kin'])); // ["n'33wollah'", "nikp2?mup"]
