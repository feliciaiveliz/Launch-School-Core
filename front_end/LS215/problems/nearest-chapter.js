// Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number. All page numbers in the object will be valid integers.
/*
Understand the Problem
----------------------
- Input:
  - object of chapters and their page numbers
  - number as current page number
- Output:
  - string of the chapter name
- Rules:
  - return the chapter that is nearest to the current page number
  - if two chapters are equidistant, return the highest page number
  - assume all page numbers will be digits
  - assume that the current page number is a digit 
Examples/Test Cases:
--------------------

Mental Model:
-------------

Data Structure:
---------------
- differences object: chapter names as keys and differences to current page number as values
- sortedDifferences: array to hold two values from smallest to largest
- sortedChapters: array to hold the keys from the differences object -> chapter names
  
Algorithm:
----------
- convert the page number into a number if it's a string
- define differences as {}
- iterate over the chapters (as keys) and for each chapter:
  - create the chapter as key in differences and the difference of the current page number and chapter number as value
    - find the absolute value to find positive difference
- sort the difference values:
  - put the values into an array and sort in ascending order
  - slice the array to only the two smallest values
  - this will help us find if the two values are the same
- sort the chapter names:
  - put the differences (chapter name keys) into an array and sort in ascending order
- if the two values are the same in the sorted differences array, return the second element
  - this is the higher of the two page numbers
- if the are different, return the first element
  - this is the chapter with the lowest difference
*/

function nearestChapter(chapters, page) {
  let currentPage = Number(page);
  let differences = {};
  
  Object.keys(chapters).forEach(chapter => {
    differences[chapter] = Math.abs(chapters[chapter] - currentPage);
  });
  
  let sortedDifferences = Object.values(differences).sort((a, b) => a - b).slice(0, 2);
  let sortedChapters = Object.keys(differences).sort((a, b) => differences[a] - differences[b]);        
  
  if (sortedDifferences[0] === sortedDifferences[1]) {
    return sortedChapters[1];
  } else {
    return sortedChapters[0];
  }
}

console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5}, 3)); // "Chapter 1b"
console.log(nearestChapter({"Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37}, 10)); // "Chapter 2"
console.log(nearestChapter({"New Beginnings" : 1, "Strange Developments" : 62, "The End?" : 194, "The True Ending" : 460}, 200)); // "The End?"
console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50}, 17)); // "Chapter 1b"
console.log(nearestChapter({"Chapter 1": 1, "Chapter 2": 53, "Chapter 3": 74}, 62)); // "Chapter 2"
console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d": 29}, '17')); // "Chapter 1d"
