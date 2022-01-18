// Lettercase Percentage Ratio
// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

/*
Understand the Problem
----------------------
- Input:
  - string of letters, numbers, punctuation
- Output:
  - object
    - counts of lowercase/uppercase and punct. characters
- Rules:
  - return the percentage as a string
  - format: "50.00"
  - "0.00"
  - "100.00"
  - assume that the string will alwys contain at least one character
Examples/Test Cases:
--------------------
- 'abCdef 123' -> lowercase: "50.00", uppercase: "10.00", neither: "40.00"
  - lowercase: 5/10 -> 50%, uppercase: 1/10 -> 10%, neither: 4/10 -> 40%

Mental Model:
-------------
Loop through the string. If the current character is an uppercase letter, add 1 to uppercase. 
Repeat for lowercase letters and neither characters. Once done looping, find the length of the string.
Iterate through the object (that's holding the characters and their counts) and divide the value by the length of the string.
Format the value as "00.00". Return the object.

Data Structure:
---------------
- object: uppercase/lowercase/neither as keys, counts as values

Algorithm:
----------
- define 'result' = {}
- define 'stringLength' to length of input string
- split string into array of characters and iterate
  - if current character is not a letter
    - create the key in the 'result' obj with a value of 0
    - increment value by 1
  - if lowercase letter
    - create the key in the 'result' obj with a value of 0
    - increment value by 1
  - else if uppercase letter
    - create the key in the 'result' obj with a value of 0
    - increment value by 1
- iterate through the values of the result object and divde the value by 'stringLength'
- format the number into a string
  - multiply number by 100
  - pad with 0s
- return object
*/

function letterPercentages(string) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };
  let stringSize = string.length;

  string.split('').forEach(character => {
  	if (character.match(/[^a-z]/i)) {
  		result['neither'] += 1;
  	} else if (character.match(/[a-z]/)) {
  		result['lowercase'] += 1;
  	} else {
  		result['uppercase'] += 1;
  	}
  });

  Object.keys(result).forEach(key => {
  	let value = String(((result[key] / stringSize) * 100).toFixed(2));
    result[key] = value;
  });

  return result;
}

function letterPercentages(string) {
  let size = string.length;
  return {
  	lowercase: (((string.match(/[a-z]/g) || []).length / size) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / size) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / size) * 100).toFixed(2),
  };  
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }