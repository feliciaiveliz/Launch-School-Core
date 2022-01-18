/* 
You have a bank of switches before you, numbered from `1` to `n`. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches `2`, `4`, `6`, and so on. On the third pass, you go back to the beginning again, this time toggling switches `3`, `6`, `9`, and so on. You continue to repeat this process until you have gone through `n` repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after `n` repetitions.
*/

/*
Understand the Problem
----------------------
- Input:
  - number that represents the total number of switches
- Output:
 - array of numbers that represents the number of lights that are still on after 'n' repetitions
- Rules:
  - all lights start in the off position
  - 1st round: lights go from off to on 
  - 2nd round: lights that are multiples of 2 are switches off
- Questions/Clarifications:
  - All input is a positive integer
Examples/Test Cases:
--------------------
- 5 -> [k1, 4]
- 1st: 1, 2, 3, 4, 5 are on 
- 2nd: 1, 3, 5 are on, 2 and 4 are off
- 3rd: 1, 5 are on, 2, 3, 4 are off
- 4th: 1, 4, 5 are on, 2 and 3 are off
- 5th: 1 and 4 are on, 2, 3, 5 are off

Mental Model:
-------------
Create a bank of switches from 1 to 'n'. Create an object that will hold the switch numbers as keys and their states as values. { '1': false, '2': false } Start a loop that loops 'n' amount of times. [1, 2, 3, 4, 5]. Check if the current number is a multiple of the current round number. If it is, toggle the switch by accessing the light key in the object and switching the boolean to its opposite. If the current state is false, switch to true, and if it's true, switch to false. After all the switches have been checked, start round 2. Repeat the process until we've done 'n' rounds. Find out which lights are still on -> filter the object to find the lights (keys) whose values are true. Return that array of light switches.

Data Structure:
---------------
- Input: 
  - array of numbers (light switches)
  - object (lights -> keys, status -> boolean
- Rules: 
  - Iterate over the bank of switches and toggle the lights depending on if the current number is a multiple of the round number. Update the status of the switch according. Filter the object to find the lights that are still on after 'n' repetions. 
  
Algorithm:
----------
- create an array of numbers from 1 to 'n'
  - use from() to generate the sequence of numbers with a length of 'n'
- create an empty object called 'switchesObj'
- iterate over the bank of switches and update the switches obj with the number light switch as key and a value of false

- iterate 'n' times
  - iterate over the switches, given number:
    - if the current number is a multiple of round number
      - toggle the switch
        - convert the number switch to a string
        - if the value of the current number key is false
          - toggle to true
        - else 
          - toggle to false
    - continue to the next number if the current number is not a multiple
- Given switches, filter the object using the keys to find the values that are true - convert the string switches to number switches
*/

function lightsOn(switches) {
  let lights = Array.from({length: switches}, (_, i) =>  i + 1);
  let switchesObj = {};
  
  lights.forEach(light => {
    switchesObj[light] = false;
  });
                 
  for (let i = 1; i <= switches; i += 1) {
    lights.forEach(light => {
      if (light % i === 0) {
        if (switchesObj[light] === false) {
          switchesObj[light] = true;
        } else {
          switchesObj[light] = false;
        }
      }
    });
  }
    
  return Object.keys(switchesObj).map(Number).filter(light => switchesObj[light]);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0)); // []