// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.


/*
Understand the Problem
----------------------
Input:
- number as year
- year could occur before or after 1752
- year is greater than 0
Output:
- true or false
- return true if leap year
- return false if not leap year
Rules:
- a leap year occurs on a year that is evenly divisible by 4
  - on or before 1752
- after 1752, a leap year occurs in years that are divisible by 400
  - not divisible by 100 and are divisible by 4
Requirements:
- if year occurs on or before 1752 and is divisible by 4
  - it is leap year
- if year occurs after 1752, follow rules from previous exercise
Examples/Test Cases:
- 1752 % 4 -> 0
- 2100: after 1752 and follows rules from previous solution
- 1: % 4 -> 1
- 1700 % 4 -> 0
Data Structure:
---------------
- Input: 
  - number as year
- Rules: 
  - calculate year mod 4 on or before 1752
  - calculate previous solution for after 1752
Algorithm:
----------
- if year equal to or less than 1752:
  - mod year by 4 to see if it's leap year
- otherwise check rules for years after 1752
*/

function isLeapYear(year) {
	if (year <= 1752) {
		return year % 4 === 0;
	} else if (year % 400 === 0) {
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
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true