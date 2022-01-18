// Inventory Item Transactions
// Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

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
  - only select the transactions that match the inventory id specified
  - assume that the input is an array of objects
- Questions/Clarifications:

Examples/Test Cases:
--------------------
- 101, transactions -> [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

Mental Model:
-------------
Filter through the array of objects, dealing with a single object at a time. This object represents a transaction.
Access the id number using the input inventory id number, and if they match, select that object transaction.

Data Structure:
---------------
- Input: 
  - id number, array of transactions -> array of selected transactions based on matching inventory ID number
Algorithm:
----------
- Iterate and filter through the transactions array, given object:
  - access the 'id' value using the input ID number, and check if the id matches the input ID number
  - if so, select that object
- return list of selected objects 
*/

function transactionsFor(idNumber, list) {
	return list.filter(transaction => {
		return transaction.id === idNumber;
	});
}

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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
console.log(transactionsFor(105, transactions));