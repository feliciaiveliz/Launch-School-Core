// Tri-Angles
// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

/*
Understand the Problem
----------------------
- Input:
  - 3 numbers (integer values), angles of a triangle
- Output:
  - string -> triangle's classification
- Rules:
  - right: one angle is 90 degrees
  - acute: all 3 angles are less than 90 degrees
  - obtuse: one angle is greater than 90 degrees
  - a valid triangle has angle degrees greater than 0 
    - and a sum of angles exactly 180 degrees
Examples/Test Cases:
--------------------
- 60, 70, 50 -> 180 -> acute -> all three sides are same
- 30, 90, 60 -> 180 -> right -> one angle is 90 degrees
- 120, 50, 10 -> 180 -> obtuse -> one angle greater than 90 degrees

Mental Model:
-------------
If any angle is 0 or less, return 'invalid'
If sum of all angles is less than 180, return 'invalid'
Put all angles into an array. Filter the array to find a 90 degree or number greater than 90. If the array 
contains a number greater than 90, return 'obtuse', if the number is 90 return 'right' otherwise return 'acute'

Data Structure:
---------------
- array of angles in degrees
  
Algorithm:
----------
- if the sorted array contains a zero, return 'invalid'
- if the sum of all numbers is < than 180, return 'invalid'
- filter the array and return an array that will either contain 90, a number greater than 90, or []
- if [] return 'acute'
- if 90 return 'right'
- else return 'obtuse'
*/

function triangle(...angles) {
  if (angles.sort()[0] === 0) return 'invalid';
  if (angles.reduce((sum, value) => sum + value) < 180) return 'invalid';

  // let angle = angles.filter(angle => { angle === 90 || angle > 90 });
  // if (angle === []) return 'acute';
  // if (angle[0] > 90) return 'obtuse';
  // if (angle[0] === 90) return 'right';
  
  if (angles.some(angle => angle > 90)) { 
  	return 'obtuse';
  } else if (angles.some(angle => angle === 90)) {
  	return 'right';
  } else {
  	return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"