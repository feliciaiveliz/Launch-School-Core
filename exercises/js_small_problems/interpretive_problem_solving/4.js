// Caesar Cipher
// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

/*
Understand the Problem
----------------------
- Input:
  - string of a letter or letters
  - number is the shift value or the key
- Output:
  - new string
- Rules:
  - return a new string with letter values that are 'n' numbers shifted from the input letter values
  - preserve letter case -> if a letter is uppercased, the returned letter is also uppercase
  - string could contain both uppercase and lowercase letters
  - string could contain punctuation -> leave punctuation as is
  - if string is empty, return empty string
  - if 'n' is negative, shift numbers to the left
  - if 'n' is not given, default 'n' to 1
  - preserve whitespace
Examples/Test Cases:
--------------------

console.log(caesarEncrypt('', 4));        // ''
console.log(caesarEncrypt('pumpkins!'), -3) // 'mrjmhfkp' 
console.log(caesarEncrypt('12345', 5));   // '678910'
console.log(caesarEncrypt('abcde'));      // 'bcdef'
console.log(caesarEncrypt('hall0w33n', 1));  // 'ibmm1x44o'

Mental Model:
-------------
Create an alphabet 'a' to 'z' in lowercase. Create an empty string to push new characters to. Loop through each character in the string.
If 'n' is less than 0, shift left. If letter is lowercase, find the letter 'n' spaces to the left. Do this by finding the index of the current letter
in the alphabet in lowercase. Add 'n' to the index of current letter then retrieve the letter at that new index. Save to new result string.
If 'n' is greater than 0, shift right and repeat steps. If the current element is a number, add 'n' to the current number (as a number) and push to new string.
If 'n' is greater than the length of the alphabet, wrap around to the start of the alphabet. All other characters will be added to the string as is.
Data Structure:
---------------
- array to hold alphabet
- string to hold new letter/number/punc. values
  
Algorithm:
----------
- Define 'result' to ''
- Define KEY to 'n'
- Define 'alphabet' to ['a' 'z']
- return '' if string is ''
- split string into array of characters and iterate with an index:
  - if KEY is < 0 shift left
    - if current character is a lowercase letter
      - let index be equal to index - KEY
      - retrieve letter at index
      - add new letter to 'result'
    - if current character is a uppercase letter
      - let index be equal to index - KEY
      - retrieve letter at index
      - add new letter to 'result' uppercased
    - if current character is a number
      - let number = current number - KEY
      - add new number to result
    - else add character to result
  - if KEY is >= 0 shift right
   if current character is a lowercase letter
      - let index be equal to index + KEY
      - retrieve letter at index
      - add new letter to 'result'
    - if current character is a uppercase letter
      - let index be equal to index + KEY
      - retrieve letter at index
      - add new letter to 'result' uppercased
    - if current character is a number
      - let number = current number + KEY
      - add new number to result
    - else add character to result
- return result
*/

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesarEncrypt(string, n = 1) {
  let KEY = n;
  let result = '';
  if (string === '') return '';

  string.split('').forEach((character) => {
    if (character.match(/[0-9]/)) {
      let number = Number(character) + KEY;
      result += Number(number);
    } else if (character.match(/[^a-z]/i)) {
      result += character;
    } else if (character === character.toLowerCase()) {
      let index = ALPHABET.indexOf(character) + KEY;
      if (index > ALPHABET.length) {
        index = index % 26;
      }
      result += ALPHABET[index];
    } else { 
      let index = ALPHABET.indexOf(character.toLowerCase()) + KEY;
      if (index >= ALPHABET.length) {
        index = index % 26;
      }
      result += ALPHABET[index].toUpperCase();
    }
  });
  
  return result;
}

console.log(caesarEncrypt('', 4));        // ''
console.log(caesarEncrypt('pumpkins!', -3)); // 'mrjmhfkp' 
console.log(caesarEncrypt('12345', 5));   // '678910'
console.log(caesarEncrypt('abcde'));      // 'bcdef'
console.log(caesarEncrypt('hall0w33n', 1));  // 'ibmm1x44o'
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"