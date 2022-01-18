// (1) https://edabit.com/challenge/eiwM33xiRvWwpRZua

// Find Max of Sliding Window
// The sliding window is a technique used to simplify complex data problems. A window that slides over the data to examine different sections of it.

// Your challenge is to create a sliding window that traverses the array and returns the maximum value in each window.

// Example:

// [4, 5, 6, 7, 8, 9]

// Our function would start by examining the first two elements of the array and pushes the max value to a new array.

// [**4, 5,** 6, 7, 8, 9]

// ... then the window slides to examine the next two, in this case 5 and 6, and pushes the max value to the array.

// [4, **5, 6**, 7, 8, 9]

// The window will examine the entire length of the array until the maximums for each window have been added to the new array.

// Arguments
// Array:The array over which you are traversing.
// windowLength: The length of the window you will be using to do the search.
// Returns Array: A new array containing the maximums for each window.
// You are given this array and a window length of 2.

console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3)); // [3, 4, 4, 4, 3, 2, 5]

// (2) https://edabit.com/challenge/ujzhzyvGoASKxSAib
// The Frugal Gentleman

// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.
// All wines will be different prices, so there is no confusion in the ordering.

chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) ➞ "Wine 9"

chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

chosenWine([]) ➞ null

// (3) https://edabit.com/challenge/gfm9nQFzogSYTE24t

// Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

console.log(stringCycling("abc", "hello")); // "abcab"
console.log(stringCycling("programming", "edabit")); // "progra"
console.log(stringCycling("the world in me evolves in hers", "i love Tesh, so much so")); // "the world in me evolves"
console.log(stringCycling("a thing of beauty is a joy forever", "indulge me surely")); // "a thing of beauty"
console.log(stringCycling("to", "hide")); // "toto"
console.log(stringCycling("such a feeling coming over me", "top of the world")); // "such a feeling c"

// (4) https://edabit.com/challenge/wv6p5WR648oG6mTZx

// Create a function that counts the integer's number of digits.
// For an added challenge, try to solve this without using strings.
// Alternatively, you can solve this via a recursive approach.

console.log(count(318)); // 3
console.log(count(-92563)); // 5
console.log(count(4666)); // 4
console.log(count(-314890)); // 6
console.log(count(654321)); // 6
console.log(count(638476)); // 6

// (5) https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

console.log(arrayOfMultiples(7, 5)); // [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)); // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)); // [17, 34, 51, 68, 85, 102]

// (6) https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH

// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

console.log(oddishOrEvenish(43)); // "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

console.log(oddishOrEvenish(373)); // "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

console.log(oddishOrEvenish(4433)); // "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

// (7) https://edabit.com/challenge/eCPim4XcssdZdvs32

// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

console.log(numInStr(["1a", "a", "2b", "b"])); // ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])); // ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"])); // ["test1"]

