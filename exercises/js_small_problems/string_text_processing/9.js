// Search Word Part 1
// Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

// You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.

/*
Understand the Problem
----------------------
- Input:
  - a string -> a word
  - a string -> words seperated by single spaces and includes punctuation
- Output:
  - number
  - number of times the word appears in the text
- Rules:
  - assume that word and text will always be provided
  - word breaks are spaces
  - some words will include punctuation
Examples/Test Cases:
--------------------
- 'sed' -> 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
- 'Sed', 'sed', 'sed' -> case does not matter
Mental Model:
-------------
Use a regex to find all matches for the input in the text. Get the length of the matched words array and return number.

Data Structure:
---------------
- string of text -> array of matched words -> number of matched words
  
Algorithm:
----------
- Regex:
  - match the input word to the text
  - find the length of the array and return number
*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(word, text) {
	let pattern = new RegExp('\\b' + word + '\\b', 'gi');
  return text.match(pattern).length;
}

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));