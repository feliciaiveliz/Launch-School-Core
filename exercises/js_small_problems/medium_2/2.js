// Triangle Sides
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

/*
Understand the Problem
----------------------
- Input:
  - 3 numbers, the length of each side of a triangle
- Output:
  - string representing triangle's classification
    - equalilateral
    - isosoles
    - scalene
    - invalid
- Rules:
  - equalilateral means all sides of triangle are same length
  - isosoles means that two sides are of same length, one is different
  - scalene means all sides are of different lenghts
  - invalid means any side length of triange is less then or equal to 0
    - or the sum of the two shortest sides is shorter or equal to longest side
Examples/Test Cases:
--------------------
- 3, 3, 3 -> equalilateral -> all numbers are same
- 3, 3, 1.5 -> isosoles -> two sides have same length
- 3, 4, 5 -> scalene -> all numbers are different
- 0, 3, 3 -> one side is length 0, invalid
- 3, 1, 1 -> sum of two shortest sides is < 3, invalid

Mental Model:
-------------
Find the shortest, middle and longest sides of triangle. If any are less than or equal to 0, return invalid.
If shortest + middle < longest, return invalid
If all are equal, return equalilateral. If all are different, return scalene. Otherwise isosoles.
Data Structure:
---------------
- number
  
Algorithm:
----------
Find the minimum number. If it's <= 0, return invalid. 
Find the maximum and middle number. 
if minimum + middle < maximum, return invalid
if minimum, maxium, and middle are equal, return equalilateral
if minimum is not equal to maximum or middle, return scalene
- otherwise return isosoles
*/

function triangle(...sides) {
	let sortedSides = [...sides].sort((a, b) => a - b);
	let shortest = sortedSides[0];
	let middle = sortedSides[1];
	let longest = sortedSides[2];

	if (shortest === 0 || (shortest + middle) < longest) return "invalid";
	if (shortest === middle  && middle === longest) {
		return 'equalilateral';
	} else if ( shortest !== middle && middle !== longest) {
		return 'scalene'
	} else {
		return 'isosoles'
	}
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"