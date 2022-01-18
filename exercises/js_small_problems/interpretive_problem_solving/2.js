// // Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.


// Understand the Problem
// ----------------------
// Input:
// - an odd number that represents the size of the diamond
// - 'n' represents the total number of rows
// - 'n' also represents the width of the widest row
// Output:
// - four-pointed diamond in an nxn grid
// - each section of the diamond is a string
// Rules:
// - input will always be an odd integer
// Requirements:
// - each row is a string of stars, or asterisks, prepended by spaces
// - the total number of spaces in a row is divided by 2
//   - each half padding the left and right sides of the stars
// - every diamond starts and ends with 1 stars
// - the width of the largest row will be equal to 'n'
// - rows of stars increment by 2 (every odd number) up to 'n'
// - spaces for each row start at (n - 1) / 2
// - to create the second part of the diamond, repeat the steps but decrement
// Examples/Test Cases:
// - n = 5
//   - 1, 3, 5, 3, 1 -> stars
//   - 2, 1, 0, 2, 1 -> spaces
// Data Structure:
// ---------------
// - Input:
//   - numbers 
// - Rules: 
//   - calculate stars: 1 up to 'n', increment by 2
//   - calculate spaces: (n - 1) / 2
//   - calculate row of stars: (n - 1) / 2 + ('*' * (n)) + (n - 1) / 2 
// Algorithm:
// - assign stars to 1
// - assign spaces to (n - stars) / 2

// for first half of the diamond:
// - loop until stars is equal to 'n'
//   - print: spaces + stars + spaces
// for the second half of the diamond
// - loop from 'n' until 'n' is equal to 1
//   - print: spaces + stars + spaces


function diamond(n) {
	let stars = 2;

	for (let i = 1; i <= n; i += stars) {
    console.log(`${' '.repeat((n - i) / stars)} ${'*'.repeat(i)}`);
	}
 
  for (let i = (n - 2); i >= 0; i -= stars) {
  	console.log(`${' '.repeat((n - i) / stars)} ${'*'.repeat(i)}`);
  }
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(9));

