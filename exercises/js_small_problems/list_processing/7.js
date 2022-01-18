// Palindromic Substrings
// Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

/*
Understand the Problem
----------------------
- Input:
  - string with one or more letters
- Output:
  - array of all substrings that are palindromic
- Rules:
  - each substring must consist of the same sequence of characters forwards and backwards
  - substrings must appear in the output array in order of appearance in the input string
  - duplicate substrings should be included in the output array
  - use 'substrings' solution from previous problem
  - consider letter case (case sensitive)
  - single letters are not palindromes
- Questions/Clarifications:
  - What is a palindrome?
    - a string that reads the same forwards and backwards
Examples/Test Cases:
--------------------
- 'abcd' -> []
- 'madam' -> ['madam', 'ada']
- 'knitting cassettes' -> ['nittin', 'itti', 'tt', 'ss', 'settes', 'ette', tt']

Problem:
--------
Create a list of all substrings from a string that are also palindromes.

Mental Model:
-------------
Generate an of all substrings. Use the 'leading substrings' and 'substrings' functions from previous.
To calculate whether a string is a palindrome, compare the string to itself when it is reversed. If they are the same, 
the word is a palindrome. It not, the word is not a palindrome. If the word has a length of 1, it is not a palindrome. If there are no
palindromes that can be formed from a list of substrings, return empty array [].

Data Structure:
---------------
- Input: 
  - string -> array of substrings -> array of palindromic substrings
- Rules: 
  - Find all possible substrings from a string and determine which substrings are palindromes
  
Algorithm:
----------
- If string length is one, return []
- Create all substrings:
  - pass input string to leading substrings function to generate all possible substrings
- Determine palindromes:
  - filter over the array of substrings, given string:
    - compare current string (1) with that string reversed (2)
      - split string (2), reverse it then join back to string
    - if they are equal, select that substring
  - return the array that substrings that are palindromes
*/

function leadingSubstrings(string) {    
  let substring = '';
  return string.split('').map((letter) => {
    return substring += letter;
  });
}

function substrings(string) {
  let result = [];

  while (string.length !== 0) {
  	result.push(leadingSubstrings(string));
  	string = string.slice(1);
  }

  return result;
}

function palindromes(string) {
	let result = [];

  substrings(string).forEach(substringArray => {
    substringArray.forEach(substring => {
      if (substring === substring.split('').reverse().join('')) {
        result.push(substring);
      }
    });
  });

  return result.filter(substring => substring.length > 1);
}

console.log(palindromes('abcd'));  // []
console.log(palindromes('madam')); // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'))
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  // "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  // "-madam-", "madam", "ada", "oo" ]
console.log(palindromes('knitting cassettes'));
// returns  ["nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
console.log(palindromes('Abcd')); // []
console.log(palindromes('AbcbA')); // ['AbcbA', 'bcb'];
console.log(palindromes('f')); // []