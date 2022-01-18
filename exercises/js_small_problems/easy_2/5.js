// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right. 

/*
Understand the Problem
----------------------
Input:
- positive number
Output:
- strings that represent a right triangle
Rules:
- each side of the right triangle has 'n' sides
- the hypotenuse is the diagonal side (longest side)
- one end of the triangle will be at the lower-left end
- the other end of the triangle will be the upper right end
Requirements:
- the number of rows is equal to the input number
- triangle will start at 1
- triangle will end with 'n' stars
- pad spaces to the left of the stars
- row: ' ' + (n - 1)
Examples/Test Cases:
- triangle(5);

    * -> starts at 1
   ** -> row: ' ' (n - number of stars) + number of stars
  ***
 ****
***** -> ends at 'n'

Data Structure:
---------------
- Input: 
  - number calculations
- Rules: 
  - for each row, multiple spaces by the number of stars minus 1
    - keep track of incrementing 1
    - add the spaces to the number of stars 
  - stop when 'n' is reached
Algorithm:
----------
- loop: 
  - starting at 1 and up to and including 'n'
    - print a line of spaces and stars:
      - ' ' times (n - (index starting at 1)) plus '*' times (index starting at 1)
- end loop at 'n'
*/

function triangle(n) {
  for (let i = 1; i <= n; i += 1) {
  	console.log(' '.repeat(n - i) + '*'.repeat(i));
  }
}

console.log(triangle(5));

//     *
//    **
//   ***
//  ****
// *****

console.log(triangle(9));

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********