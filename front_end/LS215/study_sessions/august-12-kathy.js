// ISBN-10 identifiers are ten digits long. The first nine characters are digits `0-9`. The last digit can be `0-9` or `X`, to indicate a value of 10.

//An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

//For example:
// ISBN     : 1 1 1 2 2 2 3 3 3  9
// position : 1 2 3 4 5 6 7 8 9 10
// This is a valid ISBN, because:
// (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

/*
Understand the Problem
----------------------
- Input:
  - string of digits and/or letters
- Output:
  - true or false
- Rules:
  - the string can include X as the last character
    - X represents a value of 10
  - the only letter that can be in the string is X
    - X can only be the last character in the string
  - the string can only be a length of 10, including X
  - return the result of multiplying each digit by its position, adding them together then take the result modulo 11
    - the return value must be 0 to return true
    - false if the return value is anything but 0
Examples/Test Cases:
--------------------
- '1112223339'
  - length is 10
  - last character is a digit
  - result is 0
  - return true
- '111222333'
  - length is 9
  - return false
- '1112223339X'
  - length is 11
  - return false
- 'X123456788'
  - length is 10
  - first character is X
  - return false
- '123456789F'
  - length is 10
  - last character is F
  - return false
- 'I234B6789X'
  - length is 10
  - last character is X
  - first character is I
  - return false
Mental Model:
-------------
Cases to return false:
 - length is not equal to 10
 - last character is not X or 0-9
 - first 9 characters are not 0-9
Cases to return true:
 - length is 10
 - last character is 0-9 or X
 - first 9 characters are 0-9
 - result computes to 0
Return false for all edge cases. For the rest, loop over each character. Increment a 'result' variable by each character multiplied by its position. When finished iterating, take the result and mod 11. If the result is 0, return true, false otherwise.
Data Structure:
---------------
- string -> array of string digits -> array of digits -> result value -> true or false
  
Algorithm:
----------
- If string length is not equal to 10, return false
- If the last character is not X or 0-9, return false
- If the first 9 characters are not 0-9, return false
- split string into array of string digits
- map the string digits into digits
- define 'result' as 0
- loop over the array with an index:
  - if the last character is X, pop off X
  - for each number, increment 'n' by index position plus 1
  - after first 9 digits were added, add 10 * 10 to 'result' 
    (if the string had X as last character)
  - otherwise leave as is
- take result mod 11
- if result is equal to 0, return true
- return false
*/

function validISBN(string) {
  if (string.length !== 10) return false;
  if (/[^0-9X]/.test(string[string.length - 1])) return false;
  if (/[^0-9]/.test(string.slice(0, 9))) return false;
  let result = 0;
  let digits = string.split('');
  
  digits.forEach((digit, index) => {
    if (digits[digits.length - 1] === 'X') {
      digits.pop();
    }
    result += digit * (index + 1);
  });
  
  if (string[string.length - 1] === 'X') {
    result += (10 * 10);
  }
  
  return result % 11 === 0;       
}

console.log(validISBN('1112223339'));  //  true
console.log(validISBN('111222333'));   //  false
console.log(validISBN('1112223339X')); //  false
console.log(validISBN('1234554321'));  //  true
console.log(validISBN('1234512345'));  //  false
console.log(validISBN('048665088X'));  //  true
console.log(validISBN('X123456788'));  //  false
console.log(validISBN('123456789F'));  //  false
console.log(validISBN('I234B6789X'));  //  false
console.log(validISBN(''));            //  false


