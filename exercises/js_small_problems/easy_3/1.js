// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive). 

/*
Understand the Problem
----------------------
Input:
- no input
Output:
- string
- display Teddy's age in a sentence 
Rules:
- range is between 20 and 200 inclusive
Requirements:
- generate a random number between 20 and 200
- a random number is any arbitrary number between 2 numbers
Examples/Test Cases:
- Teddy is 69 years old!
Data Structure:
---------------
- Input: 
  - string
  - random number 
- Rules: 
  - log a string to a console that display a random number as an age 
Algorithm:
----------
- create a function to calculate a range from 2 numbers inclusive
- log a string that includes the random number
*/

function generateRandomAge(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - 20 + 1) + min);
}

let teddyAge = generateRandomAge(20, 200);
console.log(`Teddy is ${teddyAge} years old!`);
