/*
Understand the Problem
----------------------
- Input:
  - string of letters 'a' or 'b'
  - 
- Output:
  - number: the minimum number of additional numbers that are needed to obtain a string of blocks of equal length
- Rules:
  - the string can only contain 'a' and 'b'
  - if the string is empty, return ''
Examples/Test Cases:
--------------------
- 

Mental Model:
-------------
Create an object that will hold blocks as keys and array of letters (the block) as value. { 'block1': ['a', 'a'] }. 
Create a copy of the input string. While the string is not empty, create slices of the copied string. Each slice will become an array in the 'blocks' object.
Create an empty array. Iterate through the string one by one, adding a letter to the array.

Make blocks in an object. 
Data Structure:
---------------
- 
  
Algorithm:
----------
- 
*/

function solution(S) {
  return S.split('');
}

console.log(solution("abbabbaaa"));
console.log(solution("babaa"));
console.log(solution("bbbab"));
console.log(solution("bbbaaabbb"));



