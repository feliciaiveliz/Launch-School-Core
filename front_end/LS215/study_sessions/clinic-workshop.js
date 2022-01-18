/*
Use the PEDAC process to get a start on solving the problem below...
# ... but STOP when you finish writing your algorithm.
# Then let your partner know you're done.
# Once each of you finish, switch "computers" by moving your avatar across the table
# Copy and paste your partner’s algorithm to your own repl or code editor
# Code up a solution to the problem that your partner was given
# If you have any trouble interpreting their algorithm, ask them to adjust it
# Good luck!!


Problem
# Given an array of strings in which each string may or may not contain punctuation, return a copy of the array in which the alphabetical characters are in reverse order, but the punctuation stays in the same place. 


# Javascript test cases:
console.log(preservePunctuation(["shan't", "won't", "y'all'rn't", "fixin'"])) // ["tnah's", "tno'w", "t'nrl'la'y", "nixif'"];
console.log(preservePunctuation(["'eard", "why??", "peter", "rabbit", ''])); // ["'drae", "yhw??", "retep", "tibbar", ''];

Examples

# Ruby test cases:
p preserve_punctuation(["shan't", "won't", "y'all'rn't", "fixin'"]) == ["tnah's", "tno'w", "t'nrl'la'y", "nixif'"]
p preserve_punctuation(["'eard", "why??", "peter", "rabbit", '']) == ["'drae", "yhw??", "retep", "tibbar", '']

Data Structures
-arrays
-strings

Algorithm
-Initialize a local variable (arr) to an empty array
-Iterate over the given array of strings
-add a copy of string to the empty array but the letters in reverse order.
-return the new array
*/

function preservePunctuation(array) {
  let arr = [];
  let indexes = [];

  array.forEach(string => {  	
  	string.split('').forEach((character, index) => {
  		if (character.match(/[^a-zA-Z]/)) {
        indexes.push([character, index]);
      }
  	});

  	string = string.replace(/[^a-zA-Z]/g, '').split('').reverse();
    
    indexes.forEach(subarray => {
    	string.splice(subarray[1], 0, subarray[0]);
    });
    
    arr.push(string.join(''));
  });
  
  indexes = []
  return arr;
}

console.log(preservePunctuation(["shan't", "won't", "y'all'rn't", "fixin'"])) // ["tnah's", "tno'w", "t'nrl'la'y", "nixif'"];
console.log(preservePunctuation(["'eard", "why??", "peter", "rabbit", ''])); // ["'drae", "yhw??", "retep", "tibbar", ''];
