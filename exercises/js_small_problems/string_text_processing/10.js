
// Search Word Part 2
// The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.

// For this exercise, write a function that takes a word and a string of text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks ('**') on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').

/*
Understand the Problem
----------------------
- Input:
  - string as word
  - string as words seperated by single spaces and can include punctuation
- Output:
  - new string with matched word highlighted and uppercased
- Rules:
  - matched words will be highlighted with **word** and uppercased **WORD**
Examples/Test Cases:
--------------------
- 'sed' -> 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
**SED**, **SED**, **SED**
Mental Model:
-------------
Match the input word in the text and replace it with the word capitalized and surrounded by **.

Data Structure:
---------------
- string
  - replace words with ** and uppercased word in new string
  
Algorithm:
----------
- use word as first argument as the pattern to replace
- uppercase the word and surround it with **
*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(word, text) {
	let pattern = new RegExp('\\b' + word + '\\b', 'gi');
  return text.replace(pattern, `**${word.toUpperCase()}**`);
}

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
console.log(searchWord('qui', text));