// In the game of chess, a queen can attack pieces which are one the same row, column or diagonal.
// Positions on the board equate to co-ordinate numbers
// Given a set up like so:

// R > 
// C ^

// _ _ _ _ _ _ _ _
// _ _ _ _ _ _ _ _
// _ _ _ W _ _ _ _
// _ _ _ _ _ _ _ _
// _ _ _ _ _ _ _ _
// _ _ _ _ _ _ B _   
// _ _ _ _ _ _ _ _
// _ _ _ _ _ _ _ _  

_ _ _ _ _ _ W _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ B _
_ _ _ _ _ _ _ _   
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _ 

_ _ _ _ _ _ _ _  
_ _ _ _ _ B _ _  
_ _ _ _ _ _ _ _  
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _   
_ _ _ _ _ _ _ _   
_ W _ _ _ _ _ _  
_ _ _ _ _ _ _ _  


// The white queen's position equates to (2, 3) and the black queen is at (5, 6).
// In this example the queens are on the same diagonal, and so can attack each other.

// Write a function, which given a string representation of the board with the two queens, return true or false
// depending on whether the queens can attack each other or not.

/*
Input:
- A string representation of a board with two queens
- Strings consist of the characters _ W B
Output:
- true or false
Rules:
- The queens can attack if they are on the:
  - same row: W row number === B row number
  - same column: B column number === B column number
  - same diagonal: absolute difference between row numbers === difference between column numbers
    - distance: (x1 - x2).abs or (y1 - y2).abs
Examples/Test Cases:
- queenAttack((2, 3), (5, 6)) -> true
- queenAttack((0, 6), (4, 6)) -> true
- queenAttack((6, 1), (1, 5)) -> false
Data Structure:  
- chess board: 8x8 array of arrays
- easier to express row, columns and diagonals using arrays
Algorithm:
-

*/


console.log(queenAttack("_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ W _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ B _ \n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _ "));
console.log(queenAttack("_ _ _ _ _ _ W _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ B _\n_ _ _ _ _ _ _ _ \n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _ "));
console.log(queenAttack("_ _ _ _ _ _ _ _\n_ _ _ _ _ B _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _ \n_ W _ _ _ _ _ _\n_ _ _ _ _ _ _ _ "));
