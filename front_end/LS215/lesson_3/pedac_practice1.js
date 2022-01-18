// Suppose you have an arbitrary natural number (the target) and a set of one or more additional natural numbers (the factors). Write a program that computes the sum of all numbers from 1 up to the target number that are also multiples of one of the factors.
// For instance, if the target is 20, and the factors are 3 and 5, that gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.
// If no factors are given, use 3 and 5 as the default factors.

/*
Input:
- target number
- set of factors
Output:
- number: sum of multiples
Requirements:
- multiples are numbers that can be divided evenly by another number
- multiples must be unique
  - 15 is a multiple of 3 and 5 but only is counted once in sum
- the target value (20) is not counted when determining the sum
- all numbers are natural numbers greater than 0
- all factors will be provided in an array
- default factors will be 3 or 5 if none are provided
without a remainder
Examples:
- target number: 20
- multiples of 3: 3, 6, 9, 12, 15, 18;
  - all numbers have no remainder when divided by 3
- multiples of 5: 5, 10, 15;
  - all numbers have no remainder when divided by 5
Test Cases:
- target number: 20
- factors: 3
- sum: 63

- target number: 1
- factors: []
- sum: 0
Mental Model:
- Determine a list of all multiples of a set of factors up to a target value,
then filter the list of multiples to the unique values. Finally, compute the sum of the unique multiples.
Data Structure:
- array
Algorithm:
- create an empty array called 'multiples' that will contain the multiples
- check whether the list of factors is empty. If there are no factors, set the list to [3, 5]
- for every factor in the factors list:
  - set the current_multiple to 'factor' to keep track of the multiples of 'factor'
  - while 'current_multiple' < 'target'
    - append the 'current_multiple' to 'multiples'
    - add factor to 'current_multiple'
- filter duplicate numbers from 'multiples'
- compute and return the sum of the numbers in 'multiples'
Testing:
- multiples = []
- list of factors: [3, 5]
- current_multiple = 3
- current_multiple = 5
- while current_multiple < target
  - append current_multiple to multiples
  - increment current_multiple by 'factor'
- filter duplicates from 'multiples'
- compute sum
*/

function sumOfMultiples(targetNumber, factors) {
  let multiples = []
  if (factors.length === 0) {
    factors = [3, 5];
  }

  factors.forEach(function(factor) {
    let currentMultiple;

    for (currentMultiple = factor; currentMultiple < targetNumber; currentMultiple += factor) {
      if (multiples.indexOf(currentMultiple) === -1) {
        multiples.push(currentMultiple);
      }
    }
  });

  return multiples.reduce(function(sum, value) {
    return sum + value;
  }, 0);
}

console.log(sumOfMultiples(20, [3, 5]));  // returns 78
console.log(sumOfMultiples(20, [3]));     // returns 63
console.log(sumOfMultiples(20, [5]));     // returns 30
console.log(sumOfMultiples(20, []));      // returns 78
console.log(sumOfMultiples(1, []));       // returns 0
console.log(sumOfMultiples(20, [19]));    // returns 19
