// Inventory Item Availability
// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

/*
Understand the Problem
----------------------
- Input:
  - number
    - inventory item ID
  - array of objects
    - list of transactions
      - each object contains id -> number, movement -> string, quantity -> number
- Output:
  - array of objects
    - list of transactions that are specific to input inventory item
- Rules:
  - Return true only if the quantity of items is greater than 0. 
- Questions/Clarifications:
Examples/Test Cases:
--------------------
- 101 -> false: in + 5, in + 12 (17), out - 18 = -1
- 105 -> true: in + 10, in + 25 (35) > 0 

Mental Model:
-------------
Iterate through the list of transaction and deal with a single object transaction. Select the trans. 
that match the input inventory number. If the movement is 'in', increase quantity by quantity of current transaction.
If movement is 'out', decrease that the quantity amount. After iterating through the list of transactions, check if the final quantity is greater than 0.
If so, return true. 

Data Structure:
---------------
- Input: 
  - inventory id, list of trans. -> number -> boolean
- Rules: 
  - Increase or decrease the quantity amount based on the quantity number for each trans.
  
Algorithm:
----------
- Select only the transactions that match the id number of input ID.
- From those selected, iterate through the trans. and update the count variable according:
  - if movement is 'in', increment count by quantity value
  - if movement is 'out', decremenet count by quantity value
- After iteration, check if count is > 0, return true if so
*/

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(idNumber, list) {
	return list.filter(transaction => {
		return transaction.id === idNumber;
	});
}

function isItemAvailable(id, array) {
	let count = 0;

  transactionsFor(id, array).forEach(transactions => {
  	transactions.movement === 'in' ? 
  	count += transactions.quantity : count -= transactions.quantity;
  });

  return count > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true