// Next Featured Number Higher than a Given Value
// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

/*
Understand the Problem
----------------------
- Input:
  - number as starting point number
- Output:
  - number that is a featured number of 7
- Rules:
  - a featured number is a number that is a multiple of 7 
    - all of its digits occur only once
    - number is odd
  - return the next highest featured number that is greater than the input number
Examples/Test Cases:
--------------------
- featured(7)  // 21 (odd, unique digits, multiple of 7)
- featured(0)  // 7  (odd, unique digits, multiple of 7)
- featured(56) // 63 (odd, unique digits, multiple of 7)
- featured(-7) // 7  

Mental Model:
-------------
Starting from the input number, increment by 1 to get the next number.
If that number is odd, is a multiple of 7 and has only unique digits, return that number.
Otherwise keep incrementing by 1 on each iteration until the next featured number is found.

Data Structure:
---------------
- number -> loop and increment by 1 until number passes all 3 conditions
  
Algorithm:
----------
- loop from input number and increment by 1 each time
  - if number is odd, number mod 7 is 0 and digits are unique, return number
    - to check if number is unique use a set:
      - save original set to 'checkDigits'
        - ... new set (Array.from(number as string))
      - compare this to Arry.from array and if they are the same and it passes the above two checks, return number
*/

function isFeatured(number) {
  let originalNumber = [...new Set(Array.from(String(number)))];
  let uniqueNumber = Array.from(String(number));

  if (number % 2 === 1 && number % 7 === 0 && originalNumber === uniqueNumber) {
  	return true;
  }

  return false;
}

function featured(number) {
	let result = number + 1;
	while (isFeatured(result) === false) {
		result += 1;
	}

	return result;
}
console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."