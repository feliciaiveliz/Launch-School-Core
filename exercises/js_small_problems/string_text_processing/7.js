// Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.

/*
Understand the Problem
----------------------
- Input:
  - string of letters, numbers, spaces and non-letters
- Output:
  - new string that contains all original characters from input string
- Rules:
  - ignore non-alphabetic characters when when determining if a letter is upper or lower case
  - non-alphabetic characters will be included in output string, but not counted towards the case
Examples/Test Cases:
--------------------
- 'I Love Launch School!' -> "I lOvE lAuNcH sChOoL!"
- 'ALL CAPS' -> 'AlL cApS' 
- 'ignore 77 the 444 numbers' -> 'IgNoRe 77 ThE 444 nUmBeRs'
Mental Model:
-------------
Iterate over the string of letters and uppercase the letters in the odd position of the string, while lowercasing the letters in the even position.
For characters that are non-letters, include them in the returned string but don't consider them when determine letter case.

Data Structure:
---------------
- string -> array of characters -> index to determine letter case -> string
  
Algorithm:
----------
- define 'capitalize' to true
- Split string into array of characters and map with an index and char:
  - if capitalize is true, uppercase letter
  - if capitalize is false, lowercase letter
- join array back into string and return new string
*/

function staggeredCase(string) {
  let capitalize = true;

  return string.split('').map((char, index) => {
    if (char.match(/[^a-z]/i)) {
      return char;
    } else if (capitalize === true) {
      capitalize = false; 
      return char.toUpperCase(); 
    } else if (capitalize === false) {
      capitalize = true;
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
