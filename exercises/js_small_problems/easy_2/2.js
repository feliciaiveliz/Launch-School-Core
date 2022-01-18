// Write a function that will take a short line of text, and write it to the console log within a box.

/*
Understand the Problem
----------------------
Input:
- string of text
- string can contain one or more words
Output:
- string as box
- box has 4 sides and padding above and below text
- text is in the middle of the box
Rules:
- assume that the output will fit in browser window
Requirements:
- if string is empty, return borders of box with no text
- each corner of box is '+'
- top and bottom borders are '-'
- both sides of box are '|'
- there are 2 lines of padding (' ')  above and below text
- text sits in the middle of the box with a space before and after the string
  padding it within the box on each side 
Examples/Test Cases:
- logInBox('');
+--+
|  |
|  |
|  |
+--+
- logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
- 
Data Structure:
---------------
- Input: 
  - strings
- Rules: 
  - log a string for each row of the box
  - for first line, add one + with '-' the length of the text, then +
  - for second ling, add one | with ' ' the length of the text, then |
  - for the third line, add one | with ' ', plus text, plus ' ', then |
  - repeat first and second line
Algorithm:
----------
- log strings:
  - start first line: +, '-' length of string, +
  - second line: |, ' ' length of string, |
  - third line: |, ' ', text, ' ', |
  - repeat first line
  - repeat second line
*/

// function logInBox(text) {
//   let textLength = text.length + 2
//   console.log(`+${'-'.repeat((textLength))}+`);
//   console.log(`|${' '.repeat((textLength))}|`);
//   console.log(`| ${text} |`);
//   console.log(`|${' '.repeat((textLength))}|`);
//   console.log(`+${'-'.repeat((textLength))}+`);
// }

function logInBox(text) {
  let textSize = text.length + 2;
  let edgeRow = `+${'-'.repeat((textSize))}+`;
  let blankRow = `|${' '.repeat((textSize))}|`;
  let textRow = `| ${text} |`;

  [edgeRow, blankRow, textRow, blankRow, edgeRow].forEach(row => console.log(row));
}

console.log(logInBox('To boldly go where no one has gone before.'));
console.log(logInBox('When pumpkins are glowing and witches are seen, only 31 days left until Halloween'));
console.log(logInBox(''));
