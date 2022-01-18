// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

/*

Understand the Problem
----------------------
Input:
- number: total number of switches
- 'n': total number of repetitions
- How to handle negative numbers?
- How to handle bad input - letters, punctuation, NaN, etc.
- How to handle 0?
Output:
- array of numbers: lights that are on after 'n' repetitions
- 'n' represents the number of lights
Rules:
- all lights are initially turned off 
- 1st pass: all lights are turned on
- pattern: lights are toggled based on mulitples of 'n'
  - 2nd round: all lights that are multiples of 2 are toggled
- the number of switches determines the number of rounds
- return the array of number switches that are still on after rounds are completed
Requirements:
- calculate multiples: 
  - a multiple is a number that can be easily divided into another number without a remainder
  - as the current round number increments by 1, the number we are checking multiples for increments
    by 1 also
Examples/Test Cases:
- lightsOn(5) -> [1, 4]
  - 1st round: 1, 2, 3, 4, 5 are on
  - 2nd round: 2, 4 are off, 1, 3, 5, are on
  - 3rd round: 2, 3, 4 are off, 1, 5 are on
  - 4th round: 2, 3 are off, 1, 4, 5 are on
  - 5th round: 2, 3, 5 are off, 1, 4 are on -> return [1, 4]
Data Structure:
---------------
- Input: 
  - array
  - account for 0 index, add 1 for each iteration
- Rules: 
  - use booleans true or false to track lights:
    - true if on
    - false if off
Algorithm:
----------
- create an array of numbers 1 to 'n'
- loop over the array of number:
  - if current number in array is divisible by 'i' (current round)
    - toggle light using !
- after the rounds have been completed, filter the array for the numbers that are still on
  - if the number can represented as truthy
- return array
*/

function generateLights(n) {
	let lightsObj = {};
  
  Array.from({ length: n }, (_, i) => i + 1).forEach(number => {
  	lightsObj[number] = false
  });

  return lightsObj; 
}

function lightsOn(switches) {
  let lights = generateLights(switches);
  let lightsKeys = Object.keys(lights);

  for (let i = 1; i <= switches; i += 1) {
    lightsKeys.forEach(light => {
    	if (Number(light) % i === 0) {
    		lights[light] = !(lights[light]);
    	} 
    });
  }

  return lightsKeys.map(Number).filter(light => lights[light]);
}

console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// Observation: all turned on lights are perfect squares 

