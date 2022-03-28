// Write a program that, given a word, computes the scrabble score for that word.

// Letter values

// Letter                          Value
// A, E, I, O, U, L, N, R, S, T        1
// D, G                                2
// B, C, M, P                          3
// F, H, V, W, Y                       4
// K                                   5
// J, X                                8
// Q, Z                                10

/*
Understanding the Problem
-------------------------

Input:
- a string
- will it always be a string?
- lower/upper case?
Output:
- an integer
  - scrabble score for input string
Rules:
- The score is the sum of the values for each letter in the word (string)
- The letter scores are defined in the table
Test Cases:
score('a') // 1
score('cabbage') // 14
score('Cabbage') // 14
Data Structure:
- input:
  - array of characters
- rules:
  - look up table: object
  - mini data structure choice: {a: 1, e: 1, ... z: 10}
  - { [a, e, i, o, u, l, n, r, s, t] => 1 }
Algorithm:
- split the input into array of chars
- map to lowercased characters
- map to each character into its scrabble score, referencing the lookup table
- reduce with summing up the values