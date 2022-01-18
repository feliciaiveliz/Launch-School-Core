// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

/*
Understand the Problem
----------------------
Input:
- string of letters and non-alphabetic characters
Output:
- new string of only single occuring spaces and letters
Rules:
- replace all non-alphabetic characters with spaces
- the result string should not have consecutive spaces
Requirements:
- if more than one non-alphabetic characters occur, replace with single space
- leave all alphabetic characters as is 
Examples/Test Cases:
- cleanUp("---what's my +*& line?");    // " what s my line "
- '-' occurs 3 consecutive times at the start of the string -> replaced by ' '
- "'" is replaced by ' '
- ' ' is left as is 
- '+*&' is replaced by ' ' -> '   ' is replaced by ' '
- '?' is replaced by ' '
Data Structure:
---------------
- Input:
  - string  
- Rules: 
  - replace all non-alphabetic characters with ' '
Algorithm:
----------
- if character is non-alphabetic, replace it with ' '
- if character is alphabetic, leave the character as is 
- return string with only letters and single spaces
*/

function cleanUp(string) {
	return string.replace(/[^a-z]+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "