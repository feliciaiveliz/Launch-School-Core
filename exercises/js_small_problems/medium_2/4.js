// Unlucky Days
// Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

/*
Understand the Problem
----------------------
- Input:
  - number that represents a year
- Output:
  - number that is the count of Friday the 13ths in a year
- Rules:
  - assume that the year is greater than 1752
  - the gregorian calendar will be in use for the future
  - for years less than 0 or less than or equal to 1752, return 'invalid year'
Examples/Test Cases:
--------------------
- 1986 -> 1
- 2015 -> 3
- 1752 -> 'invalid year'
- 0 -> 'invalid year'
- '1857' -> 'invalid year'
- 2017 -> 2

Mental Model:
-------------
Find all 13ths in every month that fall on a friday. Iterate through each month and find the day of the 13th. If that day is friday, increment a count by 1.
Return count when all months have been iterated over. 

Data Structure:
---------------
- year as number
- month as string in array
- date as 13
- iterate through the months 0-11 and plug in the month to find the day

Algorithm:
----------
- define a 'months' array to hold months from January to December
- define a 'count' variable to hold the number of 'fridaythe13ths'
- Iterate through the list of months, given month
  - plug in month to a new Date object: month, 13, year
  - if returned number is 5, that month contains a friday the 13th
  - increment count by 1
- loop through all months to find which months have a friday the 13th
- return 'count'
*/

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function fridayThe13ths(year) {
  let count = 0;
  const friday = 5;

  MONTHS.forEach(month => { 
    let date = new Date(`${month} 13, ${year}`);
    if (date.getDay() === friday) count += 1;
  });

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2