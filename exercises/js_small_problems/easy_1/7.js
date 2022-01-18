// Leap Years Part 1
// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year or false if it is not a leap year. 

/*
Understand the Problem
----------------------
Input:
- number as year
- number year is greater than 0
Output:
- true or false
- true if input year is a leap year
- false if it is not a leap year
Rules:
- a leap year is evenly divisible by 400 and 100
- a leap year is evenly divisible by 4
- all other years are not leap years
- "evenly divisible" means that a number is divided into another number with a remainder
Requirements:
- treat any number that is not > 0 to be false
- return false if input is not a number (string, array, etc.)
- treat numbers that are divisible by 4 and 400 as leap years
- treat numbers that are divisible by 100 as not leap years
Examples/Test Cases:
- 2016 
  - 2016 % 4 === 0
  - 2016 % 100 !== 0 (leap year)
- 2100 
  - 2100 % 4 === 0
  - 2100 % 100 === 0 (not leap year)
Data Structure:
---------------
- Input: 
  - number: possible year to determine leap year
- Rules: 
  - find the remainders of numbers with 400, 4 and 100 
  - return a boolean depending on the calculation
Algorithm:
----------
- if the year is divisible by 400 it is leap year
- if the year is divisible by 4 is it leap year
- if the year is divisible by 100 it is not leap year
*/

function isLeapYear(year) {
	if (year % 400 === 0) {
		return true;
	} else if (year % 100 === 0) {
    return false;
	} else {
		return year % 4 === 0;
	}
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true