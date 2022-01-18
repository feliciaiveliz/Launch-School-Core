/*
# Use the PEDAC process to get a start on solving the problem below...
# ... but STOP when you finish writing your algorithm.
# Then let your partner know you're done.
# Once each of you finish, switch "computers" by moving your avatar across the table
# Copy and paste your partner’s algorithm to your own repl or code editor
# Code up a solution to the problem that your partner was given
# If you have any trouble interpreting their algorithm, ask them to adjust it
# Good luck!!

# Given a string and array of subarrays that could contain string elements, return an integer representing the number of times an anagram of the given string occurs in the collection. Two words are anagrams if they contain the same letters in the same quantities; in other words, to create an anagram from a word, you must scramble the word’s letters but not add or delete any letters. Note that two words are not considered anagrams if they are the same word.

Input: 
String and array of subarrays that could contain strings
Output:
Number that represents the number of times an anagram appears in the array
Rules:
An anagram is two words that contain the same letters in the same quantities
A word is not an anagram of the input word if it is exactly the same word
Mental Model:
Iterate over the array of subarrays, then iterate over the subarray’s elements. If the current element is not a string or if it is equal to the input string, skip over it. Otherwise, convert the input string and current string into lowercase strings and sort them. If they are the same, they are anagrams. Increment the count variable by 1. Return the count once iteration is done for both arrays.

Algorithm:
Create a variable called ‘count’ and set to 0
Iterate over the outer array, given a subarray: 
      - iterate over the inner subarray, given an element:
        - if current element is a string and is not equal to the input string
          - downcase the input string and current string, then sort them
            - How: downcase the strings, split them into an array of characters, sort, then join them back into strings
            - save the newly sorted strings into variables
          - Compare: if the input string and the current string are equal, increment ‘count’ by 1
          - continue for the rest of the current array and the rest of the subarrays
   - When iteration is finished, return ‘count’
*/

function anagramCounter(string, array) {
  let count = 0;
  array.forEach(subarray => {
    subarray.forEach(element => {
      if (element === String(element) && element !== string) {
        let sortedString = string.toLowerCase().split('').sort().join('');
        let sortedElement = element.toLowerCase().split('').sort().join('');
        if (sortedString === sortedElement) { count += 1; }
      }
    });
  });

  return count;
}

def anagram_counter(string, array) 
  count = 0;
  array.each do |subarray|
  subarray.each do |element|
  
// # Javascript test cases:
console.log(anagramCounter('reap', [['scram', 'beat', 45, null, 'pear'], [true, 'reap']]) == 1);
console.log(anagramCounter('meat', [['meat', 'mate', 'meaty', 'matey'], ['tame', 'team']]) == 3);
console.log(anagramCounter('VEIL', [['VILE', 'vile', 'evil'], []]) == 3);
console.log(anagramCounter('veil', [['VILE', 'evil'], []]) == 2);

// # Ruby test cases:
// p anagram_counter('reap', [['scram', 'beat', 45, nil, 'pear'], [true, 'reap']]) == 1
// p anagram_counter('meat', [['meat', 'mate', 'meaty', 'matey'], ['tame', 'team']]) == 3
// p anagram_counter('VEIL', [['VILE', 'vile', 'evil'], []]) == 3
// p anagram_counter('veil', [['VILE', 'evil'], []]) == 2
