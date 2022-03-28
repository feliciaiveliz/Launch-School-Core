// Implement a function count_substring that counts the number of substrings that begin with character "A" and ends with character "X".

// For example, given the input string "CAXAAYXZA", there are four substrings that begin with "A" and ends with "X", namely: "AX", "AXAAYX", "AAYX", and "AYX".


// INPUT:
// - string of uppercase letters

// OUTPUT:
// - number -> substrings that start with "A" and end with "X"

// RULES:
// - return 0 if string is empty
// - letters will always be uppercase

// DATA STRUCTURES:
// - string
// - array

// ALGORITHM:
// - if string is empty, return 0
// - create an empty array called 'substrings'
// - split string into letters and save to 'letters'
//   *- find all possible substrings for each letter
//    - set sliceIndex to 1
//     - loop while length of 'letters' is greater than 0
//       - start with first letter
//         - set an startIndex to 0
//           - if 'sliceIndex' > length of string 
//           - shift off the first letter of 'letters'
//           - reset 'sliceIndex' to 1
//         - slice out the substring, join it, then push to 'substrings'
//         - increase 'sliceIndex' by 1
//   - loop back up
// - filter through the 'letters' array and eliminate substrings with length of 1
// - keep substrings that in length >= 2 and start with "A" and end with "X"
// - return the length of 'letters' with valid substrings 

function countSubstring(string) {
  if (string.length === 0) return 0;
  let substrings = [];
  let letters = string.split('');
  let sliceIndex = 1;

  while (letters.length > 0) { 
    let startIndex = 0;
    if (sliceIndex > string.length) {
      letters.shift();
      sliceIndex = 1;
    }
    
    let slice = letters.slice(startIndex, sliceIndex);
    substrings.push(slice.join(''));
    sliceIndex += 1; 
  }
  
  return substrings.filter(substring => substring.length >= 2 && substring[0] === "A" && substring[substring.length - 1] === "X");
}


// console.log(countSubstring("")); //  0
// console.log(countSubstring("CAXAAYXZA")); //  4
// console.log(countSubstring("AAXOXXA")); // 6
//console.log(countSubstring("AXAXAXAXAX")); // 15
