// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

/*

Understand the Problem
----------------------
- Input:
  - number as age
  - number as year user would like to retire
- Output:
  - string
- Rules:
  - tell user what year it is and what year they will retire
  - also tell user how many more years they have left to work
- Requirements:
  - compute the current year
  - compute the year they will retire
  - compute how many years it will take them to retire 
- Questions:

Mental Model:
-------------
- Ask the user what their age is and what year they would like to retire. To find the number of years they have left to work, subtract
year they would like to retire by their age. Find the current year. Add to the current year the number of years left for the user to work.
Display the current year, year they will retire and then the number of years they have left to work.

Examples/Test Cases:
--------------------
- age: 30
- age to retire: 70
  - years left to work: 70 - 30 = 40
- current year: 2017
- 2017 + 40 = 2057 -> year of retirement
Data Structure:
---------------
- Input: 
  - numbers
- Rules: 
  - age to retire - age
  - current year + age to retire 

Algorithm:
----------
- prompt user for their age
- prompt user for the age they would like to retire
- log the current year by creating a date object with current year
- log the year they retire by adding the age to retire to the current year
- log the number of years they have left to work
*/

let rlSync = require('readline-sync');
let age = rlSync.question('What is your age? ');
let ageToRetire = rlSync.question('At what age would you like to retire? ');
let today = new Date();
let currentYear = today.getFullYear();
let retirementAge = ageToRetire - age;


console.log(`It's ${currentYear}. You will retire in ${currentYear + retirementAge}.`);
console.log(`You have only ${retirementAge} years of work to go!`);