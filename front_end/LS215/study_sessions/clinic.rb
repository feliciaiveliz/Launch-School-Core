# Given a string and array of subarrays that could contain string elements, return an integer representing the number of times an anagram of the given string occurs in the collection. Two words are anagrams if they contain the same letters in the same quantities; in other words, to create an anagram from a word, you must scramble the word’s letters but not add or delete any letters. Note that two words are not considered anagrams if they are the same word.

=begin
Input: 
String and array of subarrays that could contain strings
Output:
Number that represents the number of times an anagram appears in the array
Rules:
An anagram is two words that contain the same letters in the same quantities
A word is not an anagram of the input word if it is exactly the same word
Mental Model:
Iterate over the array of subarrays, then iterate over the subarray’s elements. If the current element is not a string or if it is equal to the input string, skip over it. Otherwise, convert the input string and current string into lowercase strings and sort them. If they are the same, they are anagrams. Increment the count variable by 1. Return the count once iteration is done for both arrays.

Algorithm:
Create a variable called ‘count’ and set to 0
Iterate over the outer array, given a subarray: 
      - iterate over the inner subarray, given an element:
        - if current element is a string and is not equal to the input string
          - downcase the input string and current string, then sort them
            - How: downcase the strings, split them into an array of characters, sort, then join them back into strings
            - save the newly sorted strings into variables
          - Compare: if the input string and the current string are equal, increment ‘count’ by 1
          - continue for the rest of the current array and the rest of the subarrays
   - When iteration is finished, return ‘count’
=end

def anagram_counter(string, array) 
  count = 0;
  array.each do |subarray|
    subarray.each do |element|
      if element != string && (element.to_s === element)
        sorted_string = string.downcase.split('').sort == 