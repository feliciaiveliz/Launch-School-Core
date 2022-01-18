// A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

// A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

// Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

// Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// All operations are integer operations (which is only important with DIV and REMAINDER).

// Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they will not contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.

/*
Understand the Problem
----------------------
- Input:
  - string that represents a program that contains numbers and operations
- Output:
  - number that represents the register, or currently value of the stack after some operations
- Rules:
  - implement a mini stack and register program that takes number and commands and returns a result
  - do not modify the stack
  - programs will not pop non-existant values from stack
  - program will not contain unknown tokens
  - tokens are commands or operations
  - the operation removes the most recently push value from the stack
    - operates on the popped value and the register value
    - then stores the result back into the register
Examples/Test Cases:
--------------------
- stack of [3, 6, 4] where 4 is topmost value
- register: 7
- MULT: [3, 6] -> register += 7 * 4 -> 28
- MULT: [3] -> register += 28 * 4 -> 168

Mental Model:
-------------
Create a mini stack and register program. 
Place 'n' in the register.
'PUSH' -> push the register value to the stack
'ADD' -> pop value from stack and add to register, storing result in register
'SUB' -> pop value from stack and substract it from register value
'MULT' -> pop value from stack and multiply it by the register 
'DIV' -> pop value from stack and divide register value by popped stack value, storing 'integer' into register
'REMAINDER' -> pop value from stack and divide register value by popped value
  - storing integer remainder back in the register
'POP' -> remove topmost item from stack and place in register
'PRINT' -> print register value
Data Structure:
---------------
- array -> stack of integer values
- variable -> register value
  
Algorithm:
----------
- 
*/

console.log(minilang('PRINT'));
// 0

console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15

console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8

console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// 6

console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)