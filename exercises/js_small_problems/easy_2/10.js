// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
//
// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

/*
Input:
- year as number
- how do we handle non-integer numbers?
  - assume all input will be numbers
Output:
- a string that represents century number with suffix
- string begins with century number: 1, 10, 21
- ends with st, nd, rd, or th
Rules:
- new centuries begin in years that end with a 01
  - 1900 --> 19th century; 1901 --> 20th century
- Century suffixes:
  - 1: st
  - 2: nd
  - 3: rd
  - 4-20: th
  - 21: st
  - 22: nd
  - 23: rd
  - 24-30th: th
  - etc.
Generalized Rules:
- Century numbers:
  - Number of times 100 will fit into the year, plus 1
  - Except if year ends in 00 (don't add one)
    - 1900 --> 19; 1901 --> 19 + 1 = 20th
    - 2000 --> 20; 2002 --> 20 + 1 = 21st
- Century Suffixes:
  - Based on last digit of the century:
    - 1: st
    - 2: nd
    - 3: rd
    - 0, 4-9: th
    - Except where last two digits are:
      - 11, 12, 13: th
Data Structure:
- input:
  - number
- rules:
  - years that end in 00 -> year / 100 
  - any other year -> (year / 100) + 1
  - for suffix: year % 100 to get last two digits
Algorithm:
- century number:
  - if year mod 10 is equal to 0
    - divide year by 100 
  - else if year ends in 1-9
    - divide year by 100 and add 1
- truncate any fractional part of number
- century string = century number to string, then "apply suffix rules"
  - if year mod 100 is either 11, 12, 13:
    - return century number + "th"
  - if year mod 10 is 1: return century number + 'st'
  - if year mod 10 is 2: return century number + 'nd'
  - if year mod 10 is 3: return century number + 'rd'
  - if year mod 10 is 0, 4-9: return century number + 'th'
*/

function century(year) {
  if (year % 10 === 0) {
    year = year / 100;
  } else {
    year = (year / 100) + 1;
  }

  year = Math.trunc(year);

  if (year % 100 === 11 || year % 100 === 12 || year % 100 === 13) {
    return year + 'th'
  }

  switch (year % 10) {
    case 1:
      return year + 'st'
    case 2: 
      return year + 'nd'
    case 3: 
      return year + 'rd'
    default:
      return year + 'th'
  }
}

function generateSuffix(number) {
  if ([11, 12, 13].includes(number % 100)) {
    return number + 'th'
  }

  switch (number % 10) {
    case 1:
      return number + 'st'
    case 2: 
      return number + 'nd'
    case 3: 
      return number + 'rd'
    default:
      return number + 'th'
  }
}

function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;
  year % 100 === 0 ? centuryNumber -= 1 : centuryNumber

  return generateSuffix(centuryNumber);
}

console.log(century(2000));  // "20th" -> 20
console.log(century(2001));  // "21st" -> 21
console.log(century(1965));  // "20th" -> 20
console.log(century(256));   // "3rd"
console.log(century(5));     // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052));  // "11th"
console.log(century(1127));  // "12th"
console.log(century(11201)); // "113th"
