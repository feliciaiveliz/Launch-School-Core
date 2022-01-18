// Consider a character set consisting of letters, a space, and a point. Words consist of one or more, but at most 20 letters. An input text consists
// of one or more words seperated from each other by one or more spaces and terminated by zero or more spaces followed by a point. Input should be read
// from, and including, the first letter of the first word, up to and including the terminating point. The output text is to be produced such that successive
// words are seperated by a single space with the last word being terminated by a single point. Odd words are copied in reverse order while even words are merely
// echoed.

/*
Understanding the Problem
-------------------------
Input:
- one or more words
- words are seperated by one or more spaces
- input is terminated by:
  - zero or more spaces
    - followed by a point
- words: one or more characters up to 20
- possible characters in input: letters, spaces, point
Output:
- sentence of words with every other word reversed
  - reversed words are even numbered (2, 4) and odd indexed (1, 3)
- words are seperated by one space
- sentence terminated by zero spaces, then a point
Example:
- "whats the matter with kansas." ---> "whats eht matter htiw kansas."
- "the grass is green." ---> "the ssarg is neerg."
- "fall is my favorite    season." ---> "fall si my etirovaf season."
// or
- "fall is my favorite    season." ---> "fall si my etirovaf    season."
Data Structure:
---------------
- choices: string, array
- Array: index is easily represented
Algorithm:
----------
- split string into array of strings with space or point
- map the array of strings to a new array
  - map: reverse the odd indexed strings
- join the strings back together with a single space delimiter
- append a point to the end
*/

console.log(reverseOddWords("hello.")); // "hello."
console.log(reverseOddWords("hello .")); // "hello."
console.log(reverseOddWords("hello world.")); // "hello dlrow."
console.log(reverseOddWords("hello world .")); // "hello dlrow."
console.log(reverseOddWords("hello world   .")); // "hello dlrow."
console.log(reverseOddWords("hello hello world.")); // "hello olleh world."
console.log(reverseOddWords("")); // ""
