// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

/*
Understanding the Problem
-------------------------
Input:
- integer number
- what happens if the number is 0?
- what happens if the number is even?
  - clarify these questions with the interviewer
Output:
- function returns a single string with newline delimiters '\n'
- function prints each line to the screen in turn
Model the Problem:
- given an odd integer number 'n' (for example 5)
  - create 'n' strings with the following number of stars
    - 1, 3, 5, 3, 1
  - the strings will need to be prepended with the following number of spaces
    - 2, 1, 0, 1, 2
  - join strings together with '\n' or loop and print
- number of rows equals the input integer
- first 'row' always has one star
  - subsequent 'rows' increment by 2, up to maximum- equal to input integer 'n'
  - then decrement by 2 back to 1
- Number of spaces: (input - stars in row) / 2
Example/Test Cases:
console.log(diamond(1));
// logs
*

console.log(diamond(3));
// logs
 *
***
 *

console.log(diamond(9));
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

Data Structure:
---------------
- Number


Algorithm:
----------
- From an odd number, 2a + 1
  - generate an array, [1, 3, .. 2a + 1, ... 3, 1]
  - generate an array, [a, a - 1, .., 1, 0, 1, a]
- loop through the two arrays at the same time
  - for each iteration, print out x of number * prepended by y
    - y * " " + x * "*"
