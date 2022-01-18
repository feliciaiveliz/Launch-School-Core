// Write a method that returns a list of all substrings of a string. The returned list should be ordered by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, the substrings at a given position should be returned in order from shortest to longest.

substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]

Abstraction:
- How to get substrings starting at specific index
  - generate array of substrings
  - slice out substrings starting with first letter + rest of letters in string
  - slice out first letter for the next iteration, then repeat step 1 starting at new first letter:
    - a + substrings 
    - b + substrings (after slicing out a)
- How to get substrings
  - start at 0 + 1, then increment (+ 1) by 1 to capture the next letter in sequence
