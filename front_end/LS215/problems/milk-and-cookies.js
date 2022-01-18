// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

/*
Understand the Problem
----------------------
- Input:
  - date object with year, month and date
- Output:
  - true or false
- Rules:
  - return true of false depending on if the date object is Christmas Eve
  - Christmas Eve is December 24th
  - January starts at 0 and December ends at 11
  - all date objects will be valid
Examples/Test Cases:
--------------------
new Date(2022, 10, 24)); false
new Date(2054, 11, 24)); true

Mental Model:
-------------
Given the date object, find the month and the date. Return true if the month is 11 and the date is 24. False otherwise.

Data Structure:
---------------
- date objects -> numbers
  
Algorithm:
----------
- Given date, find month and date
  - if month is 11 and date is 24, return true
  - return false
*/

function timeForMilkAndCookies(date) {
  let month = date.getMonth(); 
  let day = date.getDate(); 
  if (month === 11 && day === 24) return true;
  return false;
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24))) // true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))) // false
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))) // true
console.log(timeForMilkAndCookies(new Date(2022, 10, 24))); // false
console.log(timeForMilkAndCookies(new Date(2054, 11, 24))); // true
