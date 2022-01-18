// Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

/*
Understand the Problem
----------------------
- Input:
  - 0 or a floating point number
    - input represents an angle between 0 and 360 degrees
- Output:
  - string 
    - output represents the angle in degrees, minutes and seconds
- Rules:
  - represent degrees in (circle)
  - represent minutes in (')
  - represent seconds in (")
  - 60 minutes in a degree
  - 60 seconds in a minute
  - output should be within a second or two of final output
- Questions:
  - How to represent degrees?
    - \u00B0 for little circle
  - How do I calculate degrees?
    - floor the number to reach nearest whole number
  - How do I calculate minutes?
    - floor the result of input degrees float - degrees * 60
  - How do I calculate seconds?
    - input degrees float - degrees - (minutes / 60) * 60
Examples/Test Cases:
--------------------
- 

Mental Model:
-------------
- 

Data Structure:
---------------
- Input: 
  - 
- Rules: 
  - 
  
Algorithm:
----------
- 

*/

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"